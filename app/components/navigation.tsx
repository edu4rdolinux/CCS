import NavigationOption from "./navigationOption";

export default function Navigation() {
  return (
    <div className="flex flex-wrap">
      <NavigationOption Option="Home" />
      <NavigationOption Option="About Us" />
      <NavigationOption Option="Shares" />
      <NavigationOption Option="Partners" />
    </div>
  );
}
