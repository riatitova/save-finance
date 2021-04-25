import { Injectable } from '@angular/core';
import Dexie from 'dexie';

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
    const id = await this.database.users.put({
      login: `${login}`,
      password: `${password}`,
    });
    console.log('Got id ' + id);
  }

  async checkUser(login: string): Promise<boolean> {
    const query = await this.database.users
      .where('login')
      .equalsIgnoreCase(`${login}`)
      .toArray();
    const isEmpty: boolean = query.length === 0;
    return !isEmpty;
  }

  async deleteUser(login: string): Promise<void> {
    await this.database.users
      .where('login')
      .equalsIgnoreCase(`${login}`)
      .delete();
  }
}
