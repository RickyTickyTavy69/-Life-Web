import styles from "./signup.module.css";
import {useState} from "react";

//formik
import {useFormik} from "formik";

const SignUp = () => {

    // handle signUp with formik
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            password2: "",
        },
        onSubmit: async (values) => {
            console.log("values", JSON.stringify(values));
            const response = await fetch("http://localhost:5000/users/", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {"Content-Type": "application/json"}
            });
            const result = await response.json();
            console.log("result", result);
        }
    })

    return(
        <section className={styles.container}>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.formField}>
                    <label htmlFor="name">Name:</label>
                    <input onChange={formik.handleChange}
                           value={formik.values.name}
                           id="name"
                           type="text"
                           placeholder="enter your name"/>
                    <div className={styles.helper}>You must enter your name.</div>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email">Email:</label>
                    <input onChange={formik.handleChange}
                           value={formik.values.email}
                           id="email"
                           type="text"
                           placeholder="enter your email"/>
                    <div className={styles.helper}>This is not a real email.</div>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password">Password:</label>
                    <input onChange={formik.handleChange}
                           value={formik.values.password}
                           id="password"
                           type="text"
                           placeholder="enter your password"/>
                    <div className={styles.helper}>Passwords don't match.</div>
                </div>
                <div className={styles.formField}>
                    <label htmlFor="password2">Repeat password:</label>
                    <input onChange={formik.handleChange}
                           value={formik.values.password2}
                           id="password2" type="text"
                           placeholder="repeat your password"/>
                    <div className={styles.helper}>Passwords don't match.</div>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    )

}

export default SignUp;