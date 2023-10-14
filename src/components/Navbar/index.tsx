import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:flex items-center justify-between py-10">
      <h1 className="text-xl font-bold text-center mb-2 lg:mb-0">
        Anang<span className="text-teal-500">Syfr</span>
      </h1>
      <nav className="w-full">
        <ul className="flex items-center justify-center lg:justify-end gap-x-10">
          <li className="border-b-2 border-transparent hover:border-slate-800">
            <Link className="p-2 block" href={"/"}>
              About
            </Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-slate-800">
            <Link className="p-2 block" href={"/projects"}>
              Projects
            </Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-slate-800">
            <Link className="p-2 block" href={"/contact"}>
              Reach Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
