import Layout from "@/components/layout";
import Blog from "@/pages/Blog";
import Coupon from "@/pages/Coupon";
import Courses from "@/pages/Courses";
import Dashboard from "@/pages/Dashboard";
import DigitalManuals from "@/pages/DigitalManuals";
import Forum from "@/pages/Forum";
import HardshipApplications from "@/pages/HardshipApplications";
import InstructorApplications from "@/pages/InstructorApplications";
import Orders from "@/pages/Orders";
import Seminars from "@/pages/Seminars";
import Store from "@/pages/Store";
import Testimonial from "@/pages/Testimonial";
import Users from "@/pages/Users";
import { createBrowserRouter as Router } from "react-router-dom";
import Downloads from './../pages/Downloads';
import Videos from "@/pages/Videos";
import StudyGroupAndEvents from "@/pages/StudyGroupAndEvents";
import UserRole from "@/pages/UserRole";
import Adverts from "@/pages/Adverts";

export const routes = Router([
  {
    path: "*",
    element: <div>Page not found</div>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>Home page</div>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/hardshipapplications",
        element: <HardshipApplications/>,
      },
      {
        path: "/instructorapplications",
        element: <InstructorApplications/>,
      },
      {
        path: "/courses",
        element: <Courses/>,
      },
      {
        path: "/seminars",
        element: <Seminars/>,
      },
      {
        path: "/digital-manuals",
        element: <DigitalManuals/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/forum",
        element: <Forum/>,
      },
      {
        path: "/testimonial",
        element: <Testimonial/>,
      },
      {
        path: "/store",
        element: <Store/>,
      },
      {
        path: "/orders",
        element: <Orders/>,
      },
      {
        path: "/coupon",
        element: <Coupon/>,
      },
      {
        path: "/downloads",
        element: <Downloads/>,
      },
      {
        path: "/videos",
        element: <Videos/>,
      },
      {
        path: "/study-group",
        element: <StudyGroupAndEvents/>,
      },
      {
        path: "/user-roles",
        element: <UserRole/>,
      },
      {
        path: "/adverts",
        element: <Adverts/>,
      },
    ],
  },
]);
