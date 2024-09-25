"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Caroussel from "./Caroussel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EmblaCarousel from "./Caroussel";

type Props = {};

const RightSidebar = (props: Props) => {
  const { user } = useUser();

  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);

  return (
    <section className="right_sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 items-center">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="font-semibold truncate text-white-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src={"/icons/right-arrow.svg"}
              width={24}
              height={24}
              alt="right arrow"
            />
          </div>
        </Link>
      </SignedIn>

      <section>
        <Header title={"Fans also like"} titleClassname={""} />
        <EmblaCarousel fansLikeDetail={topPodcasters!} />
      </section>
    </section>
  );
};

export default RightSidebar;
