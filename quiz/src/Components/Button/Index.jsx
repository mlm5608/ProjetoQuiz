

export const Button = (props) => {
    return(
        <button className={`h-16 rounded-lg text-white font-tit font-bold text-center text-xl ${props.style}`}>
            {props.children}
        </button>
    )
}