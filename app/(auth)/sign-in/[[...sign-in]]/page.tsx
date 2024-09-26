import { SignIn } from "@clerk/nextjs";
import React from "react";

const SingIn = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
};

export default SingIn;
