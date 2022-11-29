//styles
import styles from "./dashboard.module.css";

//components
import Month from "./Stones/Month/Month.jsx";


const Dashboard = () => {

    const MonthsArray = [...Array(516).keys()];         // 43 Years


    return(
        <section className={styles.dashboardContainer}>
            {MonthsArray.map((number) => {
                return(
                    <Month key={number}/>
                )
            })}
        </section>
    )
}

export default Dashboard;