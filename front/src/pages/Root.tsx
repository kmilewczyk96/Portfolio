import {Outlet} from "react-router";

import MainNavbar from "../components/organisms/MainNavbar.tsx";


export default function Root() {
  return (
    <>
      <MainNavbar/>
      <Outlet/>
    </>
  )
};