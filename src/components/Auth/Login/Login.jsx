import styles from "./login.module.css";

const Login = () => {


    return(
        <section className={styles.container}>
            <form>
                <div className={styles.formField}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="email"/>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password">Password:</label>
                    <input type="text" placeholder="password"/>
                </div>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default Login;