import React from "react";
import { portfolios } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      {portfolios &&
        portfolios.map((portfolio, index) => {
          return (
            <div key={index}>
              <div className="w-full text-right text-lg font-bold mb-2 px-3">
                {portfolio.year}
              </div>
              <div className="flex flex-wrap">
                {portfolio.data.map((row, cIndex) => (
                  <div
                    key={`${index}-${cIndex}`}
                    className="w-1/2 lg:w-1/3 px-2 mb-5"
                  >
                    <Link href={`/projects/${row.slug}`}>
                      <div className="relative w-full h-[200px] bg-slate-200 rounded-lg mb-2 hover:cursor-pointer">
                        <Image
                          src={row.images[0]}
                          fill={true}
                          alt="portoflio image"
                          className="object-contain hover:object-cover"
                        />
                      </div>
                    </Link>
                    <h3 className="font-bold">{row.name}</h3>
                    <p className="text-justify">{row.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Projects;
