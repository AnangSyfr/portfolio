import React from "react";
import { portfolios } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

interface IParams {
  slug: string;
}

interface IProject {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const findProject = (slug: string) => {
  const res: IProject[] = [];
  portfolios.map((portfolio) => {
    const project = portfolio.data.find((item) => item.slug == slug);
    if (project) {
      res.push(project);
    }
  });
  return res;
};

const Detail = ({ params }: { params: IParams }) => {
  const { slug } = params;
  const data = findProject(slug)[0];

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
