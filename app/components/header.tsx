import HeaderTitle from "./headerTitle";
import Navigation from "./navigation";

export default function Header() {
    return (
    <div className="bg-gray-950 p-2 flex justify-between">
        <HeaderTitle/>
        <Navigation/>
    </div>
    )
}