// const Total = (props) => {
//   const totalExercises = props.parts.reduce(
//     (acc, part) => acc + part.exercises,
//     0
//   );

//   return <p>Total exercises: {totalExercises}</p>;
// };

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    console.log("what is happening", sum, part);

    return sum + part.exercises;
  }, 0);

  return <p>Total number of exercises: {total}</p>;
};

export default Total;
