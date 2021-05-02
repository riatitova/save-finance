import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jsSHA from 'jssha/dist/sha256';
import { BehaviorSubject, Observable } from 'rxjs';
import IUser from '../models/user';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject$: BehaviorSubject<IUser | null>;
  public currentUser$: Observable<IUser | null>;

  constructor(private DBService: DatabaseService, private router: Router) {
    this.currentUserSubject$ = new BehaviorSubject<IUser | null>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser$ = this.currentUserSubject$.asObservable() || null;
  }

  public get currentUserValue(): IUser | null {
    return this.currentUserSubject$.value;
  }

  logIn(login: string, currentPassword: string): void {
    this.DBService.logIn(login).subscribe((result: IUser[]) => {
      const currentUser = result[0];
      const dbPassword = currentUser.password;
      const isPasswordCorrect = this.checkPassword(currentPassword, dbPassword);
      if (isPasswordCorrect) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject$.next(currentUser);
        this.router.navigate(['main']);
      }
    });
  }

  logOut(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
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
