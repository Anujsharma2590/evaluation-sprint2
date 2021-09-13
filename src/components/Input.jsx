import './Top.css'

function Input(props) {
    return (
      <div className="Inp">
        <input
          value={props.query}
          onChange={props.handleChange}
          type="text"
          placeholder="Add Items"
        />
      </div>
    );
}
export {Input}