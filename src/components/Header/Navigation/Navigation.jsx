//react-router-dom
import {NavLink} from "react-router-dom";

import styles from "./navigation.module.css";

const Navigation = () => {

    return(
        <nav className={styles.navigation}>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/auth">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>
    )

}



export default Navigation;