// styles
import styles from "./auth.module.css"

//react
import {useState} from "react";

// components
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";


const Auth = () => {

    const [action, setAction] = useState("SignUp");

    return(
        <section className={styles.auth}>
            {action === "SignUp" ? <SignUp/>: <Login/>}
        </section>
    )
}


export default Auth;