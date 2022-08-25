import React from "react";
import PropTypes from "prop-types";

function PropTypesComponent({
  id,
  name,
  isSingle,
  age,
  address,
  work,
  language,
  handleClick
}) {
  console.log(address);
  console.log(work);
  return (
    <div>
      <div>name - {name}</div>
      <div>isSingle - {isSingle ? 'no': 'yes'}</div>
      <div>age - {age}</div>
      <div>
        address - {address.city}, {address.country}
      </div>
      <div>work - {work}</div>
      <div>language - {language}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

PropTypesComponent.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isSingle: PropTypes.bool,
  age: PropTypes.number,
  address: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  work: PropTypes.oneOf(["FE", "BE"]),
  handleClick: PropTypes.func,
};

PropTypesComponent.defaultProps = {
  language: "english",
};

export default PropTypesComponent;
