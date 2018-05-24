// -->250 Setting up the Firebase SDK<--
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  // -->254 Sending the Token<--
  token: string;

  // -->257 Route Protection and Redirection Example<--
  constructor(private router: Router) {
  }

  // This is the method we want to call to sign a user up.
  signupUser(email: string, password: string) {
    // -->251 Signing Users Up<--
    // If we want we should return the `Promise` to handle it in the
    // component or handle it here, either with the `then` method to
    // handle successful response or with the `catch` method to handle
    // errors (like we do here).
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  // -->252 Signin Users In<--
  signinUser(email: string, password: string) {
    // If we want we should return the `Promise` to handle it in the
    // component or handle it here, either with the `then` method to
    // handle successful response (like we do here) or with the
    // `catch` method to handle errors (like we do here also).
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        // This holds the `Token`, with that we're able to identify
        // ourselves to the backend. Firebase SDK stores this `Token`
        // for us (see `Application` in the chrome developer tools).
        response => {
          console.log(response), // {user: Q, credential: null, additionalUserInfo: Gf, operationType: "signIn"}

            // -->254 Sending the Token<--
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => {
                  this.token = token;
                }
              );

          // -->257 Route Protection and Redirection Example<--
          this.router.navigate(['/']);
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  // -->256 Adding a Logout Button<--
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  // -->254 Sending the Token<--
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  // -->255 Checking and Using Authentication Status<--
  isAuthenticated() {
    // `isAuthenticated` should only return true if the token isn't null
    return this.token != null;
  }

}
