import {Outlet} from "react-router";

import MainNavbar from "../components/organisms/MainNavbar.tsx";
import {ISection} from "../utils/interfaces.ts";


export default function Root() {
  const sections: ISection[] = [
    {id: 'home', label: 'Home'},
    {id: 'projects', label: 'Projects'},
    {id: 'contact', label: 'Contact'},
  ]

  return (
    <>
      <MainNavbar sections={sections}/>
      <Outlet/>
    </>
  )
};