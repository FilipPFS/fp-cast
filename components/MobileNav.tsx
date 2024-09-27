"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { signOut } = useClerk();

  const { user } = useUser();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-black-1">
          <Link
            href={"/"}
            className="flex items-center cursor-pointer gap-3 pb-10 pl-4"
          >
            <Image src={"/icons/logo.svg"} alt="" width={23} height={27} />
            <h1 className="text-24 font-extrabold text-white-1 ml-2">
              FP-Cast
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex flex-col h-full w-full gap-6 text-white-1">
                {sidebarLinks.map(({ label, route, imgURL }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={route}
                        key={label}
                        className={cn(
                          "flex gap-3 items-center py-4 max-lg:px-4 justify-start",
                          {
                            "bg-nav-focus border-r-4 border-orange-1": isActive,
                          }
                        )}
                      >
                        <Image src={imgURL} alt="" width={24} height={24} />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <Link
                    href={`/profile/${user?.id}`}
                    className={cn(
                      "flex gap-3 items-center py-4 max-lg:px-4 justify-start",
                      {
                        "bg-nav-focus border-r-4 border-orange-1":
                          pathname.startsWith(`/profile/`),
                      }
                    )}
                  >
                    <Image
                      src={"/icons/profile.svg"}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p>Profile</p>
                  </Link>
                </SheetClose>
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
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
