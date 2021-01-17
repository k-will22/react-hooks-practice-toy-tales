import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/toys")
  .then(response => response.json())
  .then(data => {
    setToys(data)
  })
}, [])

console.log(toys)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
    toy.id === updatedToy.id ? updatedToy : toy)
    setToys(updatedToys)
  }

  function handleDeleteToy(deletedToy) {
    const updatedToys = toys.filter((toy) => 
    toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onUpdateToy={handleUpdateToy}
        onDeleteToy={handleDeleteToy} />
    </>
  );
}

export default App;
