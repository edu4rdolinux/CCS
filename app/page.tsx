import Header from "./components/header";
import MainText from "./components/MainText";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className="flex items-center justify-center h-screen">
        <MainText Text="Neoliberalism is Wonderful!"/>
      </div>
    </div>
  );
}
