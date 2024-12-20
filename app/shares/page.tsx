import Header from "../components/header";
import MainText from "../components/MainText";
import TemplateButton from "../components/templateButton";

export default function Shares() {
    return (
        <div>
            <Header/>
            <div className="flex-col flex items-center justify-center m-24">
                <MainText Text="Shares"/>
                <h1>
                    With shares costing just $26,578 or ¥187,417.41, CCS has one of the lowest prices on the Chinese market!</h1>
                    <h1 className="font-bold">Last Day: +0,256% ↑ Last Month: -5,65% ↓ Last Year: +0,267% ↑</h1>
                <div className="flex gap-7 m-1">
                    <TemplateButton TextButton="Buy"/>
                    <TemplateButton TextButton="Sell"/>
                </div>
            </div>
        </div>
    )
}