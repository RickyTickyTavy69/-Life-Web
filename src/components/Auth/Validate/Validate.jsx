// form state with formik
import {useFormik} from "formik";

import styles from "./validate.module.css";

const Validate =  () => {

    // form handler with formik

    const formik = useFormik({
        initialValues: {
            code: ""
        },
        onSubmit: (values) => {
            console.log("code", values.code);
        }
    })

    return(
        <div className={styles.container} >
            <form className={styles.form} action="">
                <input name="code" id="code" value={formik.values.code} onChange={formik.handleChange} type="text"/>
                <button onClick={formik.handleSubmit} type="submit">Submit code</button>
            </form>
        </div>

    )

}

export default Validate;