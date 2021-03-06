import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
    id: number,
    name: string,
    password: string,
    email: string
}

export const USER_DATA: User = <User> {
    id: 1,
    name: 'vasile',
    password: '12345',
    email: 'test@test.com'
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService  {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient,
        private readonly router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        if (email === USER_DATA.email && password === USER_DATA.password) {
            localStorage.setItem('currentUser', JSON.stringify({
                name: USER_DATA.name,
                email: USER_DATA.email,
                token: 'random_token-1234456789'
            }));
            return localStorage.getItem('currentUser');
        } else {
            return null;
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.isLogged.next(false);
        this.router.navigate(['/']);
    }

    userLogin(): string {
        return localStorage.getItem('currentUser');
    }
}