import React from 'react'

const Smurf = (props) => {
  const onDelete = (e) => {
    props.handleDelete(props.id);
  };

  return (
    <div key={props.id}>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
      <p>{props.height}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Smurf;