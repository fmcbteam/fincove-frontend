import Dashnav from "../../../components/molecules/dashnav";
import Sidebar from "../../../components/molecules/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-row relative w-[100%] h-[100%] overflow-hidden">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-[100%] overflow-y-auto">
        <div className="flex flex-col w-[100%] top-0 left-0 bg-white z-[10] sticky">
          <Dashnav />
          <div className="p-4 w-[100%] mt-[20%] md:mt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
