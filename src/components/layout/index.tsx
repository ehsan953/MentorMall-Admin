// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// export default function Layout() {
//   return (
//     <div>
//       <Header />
//       <div className="min-h-[100vh]">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// }
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
      // <div>
      //   <Header />
      //   <div className="min-h-[100vh]">
      //     <Outlet />
      //   </div>
      //   <Footer />
      // </div>
      <div className="flex">
       <Sidebar />
       <div className="flex-1 ml-[320px] py-12 px-12 min-h-screen">
        <Outlet />
       </div>
     </div>
    );
  }
// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 ml-72 p-4 bg-gray-100 min-h-screen">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;
