import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jsSHA from 'jssha/dist/sha256';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import IUser from '../models/user';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser$: BehaviorSubject<IUser | null>;

  constructor(private DBService: DatabaseService, private router: Router) {
    this.currentUser$ = new BehaviorSubject<IUser | null>(
      JSON.parse(String(localStorage.getItem('currentUser')))
    );
  }

  isLogin$(): Observable<boolean> {
    return this.currentUser$.asObservable().pipe(map((user: IUser | null) => !!user));
  }

  register({login, email, password}: IUser): void {
    this.DBService.addUser(login, email, password).subscribe(
      (result: IUser[]) => {
        const currentUser = result[0];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUser$.next(currentUser);
        this.router.navigate(['main']);
      }
    );
  }

  logIn(login: string, currentPassword: string): void {
    this.DBService.logIn(login).subscribe((result: IUser[]) => {
      const currentUser = result[0];
      const dbPassword = currentUser.password;
      const isPasswordCorrect = this.checkPassword(currentPassword, dbPassword);
      if (isPasswordCorrect) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUser$.next(currentUser);
        this.router.navigate(['main']);
      }
    });
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null);
    this.router.navigate(['main']);
  }

  checkPassword(currentPassword: string, dbPassword: string): boolean {
    const shaObject = new jsSHA('SHA-256', 'TEXT', {
      encoding: 'UTF8',
      numRounds: 1,
    });
    shaObject.update(currentPassword);
    const passwordHash = shaObject.getHash('HEX');

    return passwordHash === dbPassword;
  }
}
