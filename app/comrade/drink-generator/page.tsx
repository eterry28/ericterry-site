"use client";
import { useEffect, useState } from "react";

export function DrinkGenerator() {
  const flavors = [
    "Cherry",
    "Vanilla",
    "Lemon",
    "Lime",
    "Strawberry",
    "Grape",
    "Orange",
    "Sour Apple",
    "Watermelon",
    "Peach",
    "Raspberry",
    "Blackberry",
    "Mango",
    "Tutti Frutti",
  ];
  const bases = [
    "Comrade Cola",
    "Dr. Dimitri",
    "Babushka Tea",
    "Mistery Mountain",
    "Gulag Punch",
    "Unity Water",
  ];
  const sugars = ["Zero Sugar", "Original", "Saccharin Enhanced"];

  const [flavor, setFlavor] = useState("");

  useEffect(() => {
    generateDrinkOption();
  }, []);

  // Function to generate a random drink option
  const generateDrinkOption = () => {
    const pickedFlavor = flavors[Math.floor(Math.random() * flavors.length)];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const sugar = sugars[Math.floor(Math.random() * sugars.length)];
    setFlavor(`${pickedFlavor} ${base} ${sugar}`);
  };

  return (
    <>
      <div className="grid-bg" />
      <nav>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#story">Story</a>
          </li>
          <li>
            <a href="/#journey">Journey</a>
          </li>
          <li>
            <a href="/#expertise">Expertise</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#connect">Connect</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="blog-container">
        <h2>Drink Generator</h2>

        <div style={{ textAlign: "center", display: "grid", gap: "20px" }}>
          <button
            onClick={generateDrinkOption}
            style={{
                margin: "0 auto",
              padding: "10px 20px",
              fontSize: "16px",
              background: "white",
              border: "none",
              borderRadius: "5px",
              color: "var(--darker-bg)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            className="btn btn-primary"
          >
            Generate Drink
          </button>

          <p>Click the button to generate a random drink option</p>

          <h3>New Flavor:</h3>
          <h2>{flavor}</h2>
        </div>
      </div>
    </>
  );
}
export default DrinkGenerator;
