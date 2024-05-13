import {
         createUserWithEmailAndPassword,
         getAuth, 
         signInWithEmailAndPassword,
         signOut} from "firebase/auth"
import {
        addDoc, 
        collection, 
        getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAIUeZ0VfNyvuNGh2g5x-jRTV_gbgs-DF0",
  authDomain: "netflix-clone-1aed0.firebaseapp.com",
  projectId: "netflix-clone-1aed0",
  storageBucket: "netflix-clone-1aed0.appspot.com",
  messagingSenderId: "391851060762",
  appId: "1:391851060762:web:1d263c68b5c8bb046caba3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(error){
            console.log(error);
            toast.error(error.code);
    }
}
 
const login =async(email,password)=>{
    try{
      await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        consolelog(error);
        toast.error(error.code);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signUp, logout};