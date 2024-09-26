"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EmblaCarousel from "./Caroussel";
import { useRouter } from "next/navigation";

type Props = {};

const RightSidebar = (props: Props) => {
  const { user } = useUser();

  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);

  const router = useRouter();

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

      <section className="flex flex-col gap-2">
        <Header title={"Fans also like"} titleClassname={""} />
        <EmblaCarousel fansLikeDetail={topPodcasters!} />
      </section>
      <section className="flex flex-col gap-8 pt-12 pb-9">
        <Header title={"Top Podcasters"} titleClassname=""></Header>
        <div className="flex flex-col gap-6">
          {topPodcasters?.slice(0, 4).map((top) => (
            <div
              key={top._id}
              className="flex cursor-pointer justify-between"
              onClick={() => router.push(`/profile/${top.clerkId}`)}
            >
              <figure className="flex items-center gap-3">
                <Image
                  src={top.imageUrl}
                  alt={top.name}
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
                <h2 className="text-white-1 font-semibold">{top.name}</h2>
              </figure>
              <div className="flex items-center">
                <p className="text-14 font-normal">
                  {top.totalPodcasts} podcasts
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
