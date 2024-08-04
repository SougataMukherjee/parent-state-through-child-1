import PropTypes from "prop-types";

function Child(props) {
  return (
    <>
      <br />
      <input
        value={props.fruit.fruit1}
        onChange={(e) => props.onFruitChange(e, "fruit1")}
      />
      <input
        value={props.fruit.fruit2}
        onChange={(e) => props.onFruitChange(e, "fruit2")}
      />
    </>
  );
}

Child.propTypes = {
  fruit: PropTypes.shape({
    fruit1: PropTypes.string.isRequired,
    fruit2: PropTypes.string.isRequired,
  }).isRequired,
  onFruitChange: PropTypes.func.isRequired,
};

export default Child;
