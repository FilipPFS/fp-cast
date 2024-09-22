import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SingOut = (props: Props) => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignUp />
    </div>
  );
};

export default SingOut;
