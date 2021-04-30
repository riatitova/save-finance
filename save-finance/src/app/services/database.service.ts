import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import jsSHA from "jssha/dist/sha256";

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  database: any;

  constructor() {
    this.createDatabase();
  }

  createDatabase(): void {
    this.database = new Dexie('users');
    this.database.version(1).stores({
      users: '++id, login, password',
    });
  }

  async addUser(login: string, password: string): Promise<void> {
    const shaObject = new jsSHA("SHA-256", 'TEXT', { encoding: "UTF8", "numRounds" : 1 });
    shaObject.update(password);
    const hash = shaObject.getHash("HEX");

    await this.database.users.put({
      login,
      password: hash,
    });
  }

  async checkUser(login: string): Promise<boolean> {
    const query = await this.database.users
      .where('login')
      .equalsIgnoreCase(login)
      .toArray();
    const isEmpty: boolean = query.length === 0;
    return !isEmpty;
  }

  async checkPassword(login: string, password: string): Promise<boolean> {
    const query = await this.database.users
      .where('login')
      .equalsIgnoreCase(login)
      .toArray();
    const dbPassword = query[0].password;

    if (password === dbPassword) {
      return true;
    }

    return false;
  }

  async deleteUser(login: string): Promise<void> {
    await this.database.users
      .where('login')
      .equalsIgnoreCase(login)
      .delete();
  }
}
