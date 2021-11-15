import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

const initialItems = [
  { title: "Tamal Verde", body: "Tamal en hoja verde", price: 20 },
  { title: "Tamal Rojo", body: "Tamal en hoja rojo", price: 20 },
  { title: "Tamal Mole", body: "Tamal en hoja mole", price: 20 },
  { title: "Tamal Rajas", body: "Tamal en hoja rajas", price: 20 },
  { title: "Tamal Dulce", body: "Tamal en hoja dulce", price: 20 },
];

function App() {
  const [items] = useState(initialItems);

  return (
    <div className="App">
      {items.map(({ title, body, price }) => (
        <Card key={title} title={title} body={body} price={price} />
      ))}
    </div>
  );
}

export default App;
