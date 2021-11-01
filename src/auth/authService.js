import { auth } from "./firebase/firebaseConfig";
import { useHistory } from 'react-router'



export default function AuthService() {
    

    async function logInService({email,password}){
        
        let flag;
        await auth.signInWithEmailAndPassword(email, password)
        .then(cred=>{
            flag=true
        })
        .catch(err=>{
            flag=false
        })    

        return flag
        
    }

    async function logOutService(){

        let flag;
        await auth.signOut().then(()=> {
            flag=true
        })
        .catch(err=>{
            flag=false
        })

        return flag
    }

   function logInStatus(){
        
    const call  = new Promise ((resolve, reject)=>{
        auth.onAuthStateChanged(user=> {
            
            if(user) resolve(true)
            else  reject(false)
            
        })
    })

    return call
}

const history = useHistory()

async function handleLogOut(){

    const res = await logOutService()
    if(!res)alert("no se puede salir")
    else history.replace("/home")

}

    
    
    return{
        logInService,
        handleLogOut,
        logInStatus
       
    }
    
}


