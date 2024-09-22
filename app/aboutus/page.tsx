import About from "../components/about";
import Header from "../components/header";
import MainText from "../components/MainText";

export default function AboutUs() {
    return (
        <div>
            <Header/>
            <div className="flex-col flex items-center justify-center m-24">
                <MainText Text="Who Are We?"/>
                <About/>
            </div>
        </div>
    )
}