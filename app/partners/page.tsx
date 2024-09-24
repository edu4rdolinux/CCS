import Header from "../components/header";
import MainText from "../components/MainText";
import Partner from "../components/partner";

export default function Partners() {
    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center m-24">
                <MainText Text="Partners"/>
                <div className="flex flex-wrap flex-row items-center gap-x-20 ease-in duration-300">
                    <Partner Alt="Aramco Logo" ImageUrl="/200513-aramco-logomarca.jpg"/>
                    <Partner Alt="Bank Of China Logo" ImageUrl="/Agricultural_Bank_of_China_vvqxu8_3f66b9fd4b.jpg"/>
                    <Partner Alt="Blackrock Logo" ImageUrl="/BlackRock-logo.png"/>
                    <Partner Alt="China Construction Bank Logo" ImageUrl="/China_Construction_Bank_logo.svg.png"/>
                </div>
            </div>
        </div>
    )
}