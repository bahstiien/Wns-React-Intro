import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WilderCard from "./components/WilderCard";

function App() {
  const Wilders = [
    {
      name: "Alpha",
      city: "Lyon",
      skills: [
        { title: "NodeJS", votes: 12 },
        { title: "PHP", votes: 45 },
      ],
    },
    {
      name: "Charlie",
      city: "Villeurbanne",
      skills: [
        { title: "NodeJS", votes: 12 },
        { title: "PHP", votes: 45 },
      ],
    },
    {
      name: "Bravo",
      city: "Grenoble",
      skills: [
        { title: "NodeJS", votes: 12 },
        { title: "PHP", votes: 45 },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {Wilders.map(({ name, city, skills, index }) => (
            <WilderCard key={index} name={name} city={city} skills={skills} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
