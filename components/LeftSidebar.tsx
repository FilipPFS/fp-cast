"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {};

const LeftSidebar = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const { signOut } = useClerk();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center cursor-pointer gap-3 pb-10 max-lg:justify-center"
        >
          <Image src={"/icons/logo.svg"} alt="" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            FP-Cast
          </h1>
        </Link>

        {sidebarLinks.map(({ label, route, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
            >
              <Image src={imgURL} alt="" width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button className="text-16 w-full bg-orange-1 font-extrabold">
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            className="text-16 w-full bg-orange-1 font-extrabold"
            onClick={() => signOut(() => router.push("/"))}
          >
            Log Out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
