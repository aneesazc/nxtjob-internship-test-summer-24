import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import TopView from "@/components/TopView";


export default function Home() {
  return (
    <div>
      <NavBar headingVal={`Career Discussions`} />
      <div className="flex">
        <SideBar />
        <TopView />
      </div>
    </div>
  );
}
