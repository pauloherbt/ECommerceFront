import { Catalog } from "./components/Catalog";
import { Comments } from "./components/Comments";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Catalog></Catalog>
        <Comments></Comments>
      </main>
      <Footer></Footer>
    </>
  );
}

