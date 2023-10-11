import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <h1 className="text-xl font-bold">
        Anang<span className="text-teal-500">Syfr</span>
      </h1>
      <nav className="">
        <ul className="flex items-center gap-x-5">
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
