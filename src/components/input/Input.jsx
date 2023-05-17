import './Input.css';

 const Input = (props) => {
  
    return (
        <div>
        <input
            type={props.type}
            className={props.className}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.onBlur}
            id={props.id}
            onKeyDown={props.handleKeyPress}
            placeholder={props.placeholder}
            />
        <span></span>
        </div>
    )        
}
export default Input;