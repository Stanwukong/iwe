import RegisterForm from "@/components/auth/RegisterModal";
import React from "react";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
