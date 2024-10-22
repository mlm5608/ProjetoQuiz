export const Button = (props) => {
    return(
        <button className={`h-16 rounded-lg text-white font-tit font-bold text-center text-xl ${props.style}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export const ButtonPerguntas = (props) => {
    return(
        <button className={`h-10 rounded-lg text-white font-tit font-bold text-center text-xl bg-primary-blue w-[100px] mt-32 `} onClick={props.onClick}>
            {props.children}
        </button>
    )
}