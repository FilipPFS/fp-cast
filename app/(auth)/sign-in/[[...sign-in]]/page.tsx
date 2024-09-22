import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

const SingIn = (props: Props) => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
};

export default SingIn;
