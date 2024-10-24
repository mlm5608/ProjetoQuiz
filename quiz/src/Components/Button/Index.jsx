export const Button = (props) => {
    return(
        <button className={`h-16 rounded-lg text-white font-tit font-bold text-center text-xl ${props.style}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export const ButtonPerguntas = (props) => {
    return(
        <button className={`h-14 rounded-lg text-white font-tit font-bold text-center text-2xl bg-primary-blue w-[150px] absolute right-10 bottom-10`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}