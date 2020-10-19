import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from '../user.model';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
  }

  async signOut(): Promise<void> {
    await this.afAuth.signOut();
  }
}
