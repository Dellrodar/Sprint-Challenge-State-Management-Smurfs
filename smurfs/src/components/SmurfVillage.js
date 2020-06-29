import React, { useEffect } from 'react';
import { getSmurf, removeSmurf } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

function SmurfVillage(props) {

  useEffect(() => {
    props.getSmurf()
  }, [props.getSmurf])

  if (props.isFetching) {
    return <h2 className="loading">Smurfs are on the way!</h2>
  }

  const handleDelete = id => {
    console.log(id);
    props.removeSmurf(id);
  };

  return (
    <>
      {props.smurfs.map((smurf) => (
        <Smurf id={smurf.id} {...smurf} handleDelete={handleDelete} />
      ))}
      <button
        onClick={() => props.getSmurf()}>
        Get Smurfs
      </button>
    </>
  )
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurf, removeSmurf })(SmurfVillage);