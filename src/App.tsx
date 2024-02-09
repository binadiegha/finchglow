import "./App.css";
import { STAR } from "./assets/images";

function App() {
  return (
    <>
      <section className=" bg-red-800">
        <div>
          <img src={STAR.src} alt={STAR.alt} />

          <h1>Some special heading tag goes here</h1>
        </div>
      </section>
    </>
  );
}

export default App;
