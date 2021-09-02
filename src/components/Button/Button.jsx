import "./button.css"
const Button = ({ title = "Search", onClick = () => { }, extraStyles = {}, primary, outline }) => {
    return (
        <button onClick={onclick} className={`btn ${primary && "btn-primary"} ${outline && "btn-outline"}  `} style={extraStyles}>
            {title}
        </button>
    )
}

export default Button
