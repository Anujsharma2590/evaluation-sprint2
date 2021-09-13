


function Button(props) {
  const handleAddFn = () => {
    props.handleAdd();
  };
console.log(props.title)
  return (
    <div className="Btn">
      <button onClick={handleAddFn}>{props.title}</button>
    </div>
  );
}

export { Button };