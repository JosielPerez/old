import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <body className={styles.main}>
      <div className={styles.landing_title}>
        <div className={styles.small_rectangle} />
        <div className={styles.title_container}>
          <h1 className={styles.title_name}>Purple Jay</h1>
        </div>
        <div className={styles.big_rectangle} />
      </div>
    </body>
  );
}
