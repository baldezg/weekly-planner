
 const Input = (props) => {
  
    return (
        <input
            type='text'
            className={props.className}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.onBlur}
            id={props.id}
            onKeyDown={props.handleKeyPress}
            />
    )        
}
export default Input;