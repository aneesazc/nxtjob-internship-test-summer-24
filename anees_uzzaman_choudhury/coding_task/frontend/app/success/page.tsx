import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import TopView from "@/components/TopView";


export default function Success() {
  return (
    <div>
      <NavBar headingVal={`Success Stories`} />
      <div className="flex">
        <SideBar />
        <TopView />
      </div>
    </div>
  );
}