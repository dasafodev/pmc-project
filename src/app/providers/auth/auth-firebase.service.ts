import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFirebaseService {
  private user: Observable<firebase.default.User | null>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  get authenticated(): boolean {
    return this.user != null; // True ó False
  }
  // Obtener el observador del usuario actual
  get currentUser(): Observable<firebase.default.User | null> {
    return this.user;
  }

  // Registro con email
  signUpWithEmail(email, pass): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, pass);
  }
  // Ingreso con email
  signInWithEmail(email, pass): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }
}
