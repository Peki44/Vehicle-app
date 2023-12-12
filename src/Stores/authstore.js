import { auth } from "../Firebase/config";
import { makeObservable, observable, action } from 'mobx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast } from "react-toastify";

class AuthStore{
    isAdmin=false;
    user = null;
    email = '';
    password = '';
    cpassword = '';

    constructor() {
        makeObservable(this, {
          isAdmin:observable,
          user: observable,
          email: observable,
          password: observable,
          cpassword: observable,
          setUser: action,
          setEmail: action,
          setPassword: action,
          setCPassword: action,
          register: action,
          login: action,
          logout: action,
        });
    }
    setUser(user) {
        this.user = user;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }
    setCPassword(cpassword) {
        this.cpassword = cpassword;
    }
    setAdmin(isAdmin){
        this.isAdmin=isAdmin;
    }


    async register() {
    try {
        if(this.password === this.cpassword){
            const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
            this.setUser(userCredential.user);
            toast.success("Registration succes")
            this.email="";
            this.password="";
            this.cpassword="";
        }else{
            toast.error("Passwords don't match!");
        }
    } catch (error) {
        console.error('Registration error:', error.message);
        toast.error(error.message);
    }
    }

    async login() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth,this.email, this.password);
          this.setUser(userCredential.user);
          console.log(this.user.displayName);
          if(this.user.uid==="Jqie51680LV0A1WUZD6ochpKazZ2"){
            this.setAdmin(true);
          }
          /////////////////// email for admin pernarmatej@gmail.com
          /////////////////// password: 123456
          toast.success("Login succes")
          this.email="";
          this.password="";
        } catch (error) {
          toast.error("Login failed")
          console.error('Login error:', error.message);
        }
    }
    logout() {
        signOut(auth).then(() => {
          toast.success("Logout succes")
        }).catch((error) => {
          toast.error("Logout failed")
          console.error('Logout error:', error.message);
        });
    }
}

const authStore = new AuthStore();
export default authStore;