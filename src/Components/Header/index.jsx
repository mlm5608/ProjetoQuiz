import logoEtip from "../../Assets/LogoEtip.png"
import logoQuiz from "../../Assets/QuizB.png"

export const Header = (props) => {
    return (
        <header className="w-full h-20 bg-primary-blue flex flex-row items-center justify-around absolute top-0">
            {
                props.login
                    ?
                    <>
                        <h1 className="font-tit font-semibold text-4xl text-white text-center">Welcome</h1>
                    </>
                    :
                    <>
                        <img src={logoEtip} alt="Logo marca da escola" className="w-[120px] " />
                        <img src={logoQuiz} alt="Logo marca da escola" className="h-[90px]" />
                        <h1 className="font-tit text-3xl text-white w-[120px] text-center">3°MB</h1>
                    </>
            }

        </header>
    )
}