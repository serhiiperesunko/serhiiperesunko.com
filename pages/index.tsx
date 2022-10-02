import {MainLayout} from "../layouts";
import styles from "./index.module.css"
import Twitter from '../assets/icons/twitter.svg'

const HomePage = () => (
  <MainLayout title="Serhii Peresunko" className={styles.app}>
    <h1>Follow me on <a href="https://bit.ly/3Sy2qFa" className={styles.link}><Twitter/></a></h1>
  </MainLayout>
)

export default HomePage
 