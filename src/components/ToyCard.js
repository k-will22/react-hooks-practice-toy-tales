import React from "react";

function ToyCard({ toy, onUpdateToy, onDeleteToy }) {
  const { id, name, image, likes } = toy

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json)
    .then(() => {
      onDeleteToy(toy)
    })
  }

  function handleLikes() {
    const newObj = {likes : likes + 1}

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
    .then(response => response.json())
    .then(onUpdateToy)

  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
