
export const Title = (props) => {
    return(
        <h1 className={`font-tit text-3xl text-complementary-green ${props.style}`}>{props.children}</h1>
    )
}

export const TitleQuestion = (props) => {
    return(
        <h1 className={`font-tit text-xl text-left text-complementary-green ${props.style}`}>{props.children}</h1>
    )
}