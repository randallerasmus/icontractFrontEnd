import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");

  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) {
  }

  getUserState() {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/dashboard']);
        }

      })
  }

  createUser(user) {

    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: user.name + ' ' + user.lastName
        });

        // this insert this data and send the user to the home or
        // dashboard  ------------->>> then statement just say that if everything is successfull it will execute the
        // latter
        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/dashboard']);
          });
      })
      // this only executes if anyting is wrong with the username and password
      .catch(error => {
        this.eventAuthError.next(error);
      })
  }

  // this is where we will insert the information into the db
  insertUserData(userCredential: firebase.auth.UserCredential) {
    //uid = like a primary key
    return this.db.doc(`Users/${userCredential.user.uid}`)
      .set({
        email: this.newUser.email,
        name: this.newUser.name,
        lastname: this.newUser.lastName,
        role: 'network user'
      })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
