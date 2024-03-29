"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";

// Run: npx shadcn-ui@latest add button
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { publicEnv } from "@/lib/env/public";

function AuthForm() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Card className="min-w-[300px] items-center">
      <CardHeader>
        <CardTitle>Sign In / Up</CardTitle>
      </CardHeader>
      <CardContent className=" flex flex-col gap-2">
        <Button
          onClick={async () => {
            // sign in with github
            signIn("google", {
              callbackUrl: `${publicEnv.NEXT_PUBLIC_BASE_URL}/success`,
            });
          }}
          className="flex w-full justify-center"
          variant={"outline"}
        >
          <Image src="/google.png" alt="Google icon" width={20} height={20} />
          <span className="grow">Sign In with Google</span>
        </Button>
      </CardContent>
    </Card>
  );
}

export default AuthForm;
