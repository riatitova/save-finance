import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import jsSHA from 'jssha/dist/sha256';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IUser from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  database: any;

  constructor() {
    this.database = new Dexie('users');
    this.createDatabase();
  }

  createDatabase(): void {
    this.database.version(1).stores({
      users: '++id, login, password',
    });
  }

  addUser(login: string, email: string, password: string): Observable<IUser[]> {
    const shaObject = new jsSHA('SHA-256', 'TEXT', {
      encoding: 'UTF8',
      numRounds: 1,
    });
    shaObject.update(password);
    const hash = shaObject.getHash('HEX');

    from(this.database.users.put({
      login,
      email,
      password: hash,
    }));
    return this.makeQuery(login);
  }

  makeQuery(login: string): Observable<any> {
    return from(this.database.users
      .where('login')
      .equals(login)
      .toArray());
  }

  checkUser(login: string): Observable<boolean> {
    return this.makeQuery(login).pipe(map((response: IUser[]) => {
      return !(response.length === 0)
    }));
  }

  deleteUser(login: string): void {
    from(this.database.users.where('login').equals(login).delete());
  }

  logIn(login: string): Observable<IUser[]> {
    return this.makeQuery(login);
  }
}