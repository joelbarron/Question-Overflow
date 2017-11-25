import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class AuthService {

  private usersUrl: string;
  public currentUser?: User;

  constructor(
    private http: Http,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
    // console.log(this.usersUrl);
    if (this.isLoggedIn()) {
      const { userId, email, firstName, lastName } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, firstName, lastName, userId);
    }
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const url = urljoin(this.usersUrl, 'signin');

    return this.http.post(url, body, { headers })
      .map((response: Response) => {
        const json = response.json();
        this.login(json);
        return json;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const url = urljoin(this.usersUrl, 'signup');

    return this.http.post(url, body, { headers })
      .map((response: Response) => {
        const json = response.json();
        this.login(json);
        return json;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  login = ({ token, userId, firstName, lastName, email }) => {
    this.currentUser = new User(email, null, firstName, lastName, userId);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({ userId, firstName, lastName, email }));
    this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/signin');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  public handleError = (error: any) => {
    const { error: { name }, message } = error;

    if (name === 'TokenExpiredError') {
      this.showError('Tu sesión ha expirado');
    } else if (name === 'JsonWebTokenError') {
      this.showError('Ha habido un problema con tu sesión');
    } else {
      this.showError(message || 'Ha ocurrido un error. Intentalo de nuevo.')
    }

    this.logout();
  }


  showError (message) {
    this.snackBar.open(message, 'x', { duration: 2500 });
  }
}
