import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import TopView from "@/components/TopView";


export default function Introduction() {
  return (
    <div>
      <NavBar headingVal={`Introduction`} />
      <div className="flex">
        <SideBar />
        <TopView />
      </div>
    </div>
  );
}