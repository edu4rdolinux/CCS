import NavigationOption from "./navigationOption";

export default function Navigation() {
  return (
    <div className="flex">
      <NavigationOption Option="Home" />
      <NavigationOption Option="About Us" />
      <NavigationOption Option="Shares" />
      <NavigationOption Option="Partners" />
    </div>
  );
}
