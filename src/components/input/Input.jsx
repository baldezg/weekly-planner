
 const Input = (props) => {
  
    return (
        <input
            type='text'
            className={props.className}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            />
    )        
}
export default Input;