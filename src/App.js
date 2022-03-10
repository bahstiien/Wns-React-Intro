import React from "react";
import "./App.css";
import WilderCard from "./components/WilderCard";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>

        <section className="card-row">
          <WilderCard name="Alpha" />
          <WilderCard name="Bravo" />
          <WilderCard name="Charlie" />
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
