import React from "react";
import { portfolios } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

interface IParams {
  id: number;
}

interface IProject {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const findProject = (id: number) => {
  const res: IProject[] = [];
  portfolios.map((portfolio) => {
    const project = portfolio.data.find((item) => item.id == id);
    if (project) {
      res.push(project);
    }
  });
  return res;
};

const Detail = ({ params }: { params: IParams }) => {
  const { id } = params;
  const data = findProject(id)[0];

  return (
    <div className="py-5">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">Detail #{data.id}</h3>
        <Link href={"/projects"}>Kembali</Link>
      </div>
      <p>{data.name}</p>

      <div className="w-full">
        {data.images.map((image, index) => (
          <Image
            alt="project-image"
            src={image}
            key={index}
            width={1000}
            height={500}
            className="mb-5"
          />
        ))}
      </div>

      <p>{data.description}</p>
    </div>
  );
};

export default Detail;
