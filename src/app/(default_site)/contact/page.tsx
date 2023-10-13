import Link from "next/link";
import React from "react";
import { GitHub, Facebook, Instagram, Linkedin } from "react-feather";

const Contact = () => {
  return (
    <div className="w-full">
      <ul>
        <li className="mb-3">
          <Link href={""} className="inline-block w-auto">
            <GitHub className="inline" /> Github
          </Link>
        </li>
        <li className="mb-3">
          <Link href={""} className="inline-block w-auto">
            <Facebook className="inline" /> Facebook
          </Link>
        </li>
        <li className="mb-3">
          <Link href={""} className="inline-block w-auto">
            <Instagram className="inline" /> Instagram
          </Link>
        </li>
        <li className="mb-3">
          <Link href={""} className="inline-block w-auto">
            <Linkedin className="inline" /> Linkedin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
