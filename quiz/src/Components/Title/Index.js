
export const Title = (props) => {
    return(
        <h1 className={`font-tit text-3xl text-complementary-green ${props.style}`}>{props.children}</h1>
    )
}