import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiSpeedometer,
  mdiMenuDown,
  mdiLogout,
  mdiChemicalWeapon,
  mdiAccountGroupOutline, mdiClipboardTextOutline, mdiBookOpenPageVariantOutline, mdiBullhornOutline, mdiTextBoxOutline, mdiForum, mdiMessageText, mdiCart, mdiVectorCircleVariant, mdiTicketPercentOutline,mdiDownload,
  mdiYoutube,
  mdiCalendarBlankOutline,
  mdiApacheKafka,
  mdiAccountEyeOutline
} from "@mdi/js";
const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation(); // Get the current route
  
  const toggleSection = (section: string) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };
  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <div className="h-screen w-[320px] bg-green-700 text-white fixed top-0 left-0 overflow-y-auto">
      <div className="flex justify-center p-4">
        <img
          src="/MentorMall-logo-transparent.svg"
          alt="Logo"
          className="w-[130px] lg:w-[180px]"
        />
      </div>
      <ul className="text-gray200">
        <li>
          <Link to="/dashboard" className="block px-4 mb-1">
            <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/dashboard') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
              <Icon path={mdiSpeedometer} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Dashboard</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("user")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiChemicalWeapon} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>User</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "user" && (
            <div className=" pl-4">
              <Link to="/users" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/users') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon
                    path={mdiAccountGroupOutline}
                    size={1}
                    color="currentColor"
                  />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Users</span>
                  </div>
                </div>
              </Link>
              <Link to="/hardshipapplications" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/hardshipapplications') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon
                    path={mdiAccountGroupOutline}
                    size={1}
                    color="currentColor"
                  />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Hardship Applications</span>
                  </div>
                </div>
              </Link>
              <Link to="/instructorapplications" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/instructorapplications') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon
                    path={mdiAccountGroupOutline}
                    size={1}
                    color="currentColor"
                  />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Instructor Applications</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>

        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("learning")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiClipboardTextOutline} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Learning</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "learning" && (
            <div className="pl-4">
              <Link to="/courses" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/courses') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiClipboardTextOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Courses</span>
                  </div>
                </div>
              </Link>
              <Link to="/seminars" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/seminars') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiClipboardTextOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Seminars</span>
                  </div>
                </div>
              </Link>
              <Link to="/digital-manuals" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/digital-manuals') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiBookOpenPageVariantOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Digital Manuals</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>

        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("communication")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiBullhornOutline} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Communication</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "communication" && (
            <div className="pl-4">
              <Link to="/blog" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/blog') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiTextBoxOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Blog</span>
                  </div>
                </div>
              </Link>
              <Link to="/forum" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/forum') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiForum} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Forum</span>
                  </div>
                </div>
              </Link>
              <Link to="/testimonial" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/testimonial') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiMessageText} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Testimonial</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>

        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("sales")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiCart} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Sales & Marketing</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "sales" && (
            <div className="pl-4">
              <Link to="/store" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/store') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiCart} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Store</span>
                  </div>
                </div>
              </Link>
              <Link to="/orders" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/orders') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiVectorCircleVariant} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Orders</span>
                  </div>
                </div>
              </Link>
              <Link to="/coupon" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/coupon') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiTicketPercentOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Coupon</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>
        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("resources")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiDownload} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Resources</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "resources" && (
            <div className="pl-4">
              <Link to="/downloads" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/downloads') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiDownload} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Downloads</span>
                  </div>
                </div>
              </Link>
              <Link to="/videos" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/videos') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiYoutube} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Videos</span>
                  </div>
                </div>
              </Link>
              <Link to="/study-group" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/study-group') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiCalendarBlankOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>Study Group & Events</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>
        <li>
          <div
            className="block px-4 mb-1 cursor-pointer"
            onClick={() => toggleSection("access")}
          >
            <div className="flex gap-4 p-3 items-center rounded-md">
              <Icon path={mdiApacheKafka} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Access</span>
                <Icon path={mdiMenuDown} size={1} color="currentColor" />
              </div>
            </div>
          </div>
          {activeSection === "access" && (
            <div className="pl-4">
              <Link to="/user-roles" className="block px-4 mb-1">
                <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/user-roles') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
                  <Icon path={mdiAccountEyeOutline} size={1} color="currentColor" />
                  <div className="flex-grow flex justify-between items-center">
                    <span>User Roles</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link to="/adverts" className="block px-4 mb-1">
            <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/adverts') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
              <Icon path={mdiBullhornOutline} size={1} color="currentColor" />
              <div className="flex-grow flex justify-between items-center">
                <span>Adverts</span>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <div className="block px-4 mb-1">
            <div className="flex py-2 px-4 items-center rounded-md">
              <div className="basis-[20%]">
                <img
                  src="/Mentor2.JPG"
                  alt=""
                  className="rounded-full h-8 w-8 object-cover"
                />
              </div>
              <div className="flex-grow flex justify-between items-center">
                <span>master@mentor.com</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="block px-4 mb-1 cursor-pointer">
            <div className={`flex gap-4 p-3 items-center rounded-md ${isActiveLink('/logout') ? 'bg-green-900' : 'hover:bg-green-900'}`}>
              <div className="basis-[20%]">
                <Icon path={mdiLogout} size={1} color="currentColor" />
              </div>
              <div className="flex-grow flex justify-between items-center">
                <span>Logout</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
