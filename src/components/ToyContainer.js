import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onUpdateToy, onDeleteToy }) {
  const toyList = toys.map((toy) => {
    return <ToyCard 
      key={toy.id} 
      toy={toy} 
      onUpdateToy={onUpdateToy}
      onDeleteToy={onDeleteToy} /> 
  })
  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
