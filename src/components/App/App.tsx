import styles from "./App.module.css";
import Header from "../Header/Header";
import CatList from "../CatList/CatList";
import Footer from "../Footer/Footer";
import cats from "../../cats.json";

const takenCats = cats.filter((cat) => cat.taken);
const freeCats = cats.filter((cat) => !cat.taken);

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.app}>
        <section className={styles.section}>
          <h2 className={styles.title}>Taken cats</h2>
          <CatList items={takenCats} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Free cats</h2>
          <CatList items={freeCats} />
        </section>
      </main>
      <Footer />
    </>
  );
}
