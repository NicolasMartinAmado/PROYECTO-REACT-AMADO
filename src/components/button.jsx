const Button = (props) => {

return (
    <button
    id={props.id}
    className={props.className}
    onClick={()=> {}}
    type={props.type}
    value={props.value}
    disabled= {props.disabled}
    style={props.style}
     >
{props.text}
    </button>
)
}
export default Button;