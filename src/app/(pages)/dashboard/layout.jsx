import Dashnav from "../../../components/molecules/dashnav";
import Sidebar from "../../../components/molecules/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row relative w-[100%] h-screen overflow-y-hidden">
      <div className="flex flex-col w-[100%] top-0 left-0 bg-background z-[10] sticky">
        <Dashnav />
        <div className="flex">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="w-[100%] mt-[20%] md:mt-0 max-h-[80%]"> 
            {/* Set a max height and overflow-y: auto to enable scrolling */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

