import React from "react";
import NavbarComponent from "@/components/NavbarComponent";
import SideBarComponent from "@/components/SidebarComponent";


const DashboardLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      // style={{
      //   backgroundImage: "url('/tree-forest.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <SideBarComponent />
      <div className="flex flex-col flex-grow">
        <NavbarComponent />
        <main className="flex-grow ml-10 mt-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
