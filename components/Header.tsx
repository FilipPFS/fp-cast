import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  titleClassname: string;
};

const Header = ({ title, titleClassname }: Props) => {
  return (
    <header className="flex items-center justify-between mt-12">
      {title ? (
        <h1 className={cn("text-18 font-bold text-white-1", titleClassname)}>
          {title}
        </h1>
      ) : (
        <div />
      )}
      <Link href={"/discover"} className="text-16 font-semibold text-orange-1">
        See All
      </Link>
    </header>
  );
};

export default Header;
