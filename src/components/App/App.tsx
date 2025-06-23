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

      <h2>Taken cats</h2>
      <CatList items={takenCats} />

      <h2>Free cats</h2>
      <CatList items={freeCats} />

      <Footer />
    </>
  );
}
