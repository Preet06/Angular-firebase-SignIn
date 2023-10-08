import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth  : AngularFireAuth, private router : Router) {

    // fireauth.onIdTokenChanged(function(user) {
    //   if (user) {
    //     console.log('loggid in');
        
    //   }
    //   else{
    //     console.log('Not logged')
    //     router.navigate(['/login'])
    //   }
    // });
  }
   
   login(email : string, password : string ){
    this.fireauth .signInWithEmailAndPassword(email,password).then( () => {
          localStorage.setItem('token','true');
          alert("successful login");
          this.router.navigate(['/dasboard'])
    }, err =>{
          alert(err.message);
          this.router.navigate(['/login']);
    })
   }

   register(email: string , password:string){
    this.fireauth .createUserWithEmailAndPassword(email,password).then( () => {
      alert('Registeration is successful')
      this.router.navigate(['/login'])
}, err =>{
      alert(err.message);
      this.router.navigate(['/register']);
})
   }

   logout(){
   

    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['login'])
    },
    err => {
      alert(err.message)
    }
    )
   }


   googleSignIn()
   {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then( res =>{
      this.router.navigate(['/dasboard'])
      localStorage.setItem('token',JSON.stringify(res.user?.uid))
      console.log("done log in")
    },
    err =>{
      alert(err.message)
    })
   }

   forgotPassword(email:string)
   {
    this.fireauth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Mail is sent");
      this.router.navigate(['login'])
    })
    .catch(function(error) {
      alert("something went wrong")
    });
  }


  check(){
       this.fireauth.onIdTokenChanged((user) => {
      if (user) {
        console.log('loggid in');
        
      }
      else{
        console.log('Not logged')
        this.router.navigate(['/login'])
      }
    });
  }
}
