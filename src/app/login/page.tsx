"use client";
import Image from "next/image";
import { Button, CustomLink, Input, LoaderSpinner } from "@/common";
import { Form } from "@/components";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AlertCheck, IconX } from "@/common/Icons";

export default function Login() {
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { toast } = useToast();
  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email: emailInput.value,
        password: passWordInput.value,
        redirect: false,
      });

      if (!res.ok) {
        throw new Error(res.error);
      }
      toast({
        title: "Logged in successfuly",
        variant: "success",
        action: <AlertCheck className="text-succes" />,
        duration: 1500,
      });
      router.push("/home/dashboard");
    } catch (error) {
      toast({
        title: "Invalid Credentials",
        variant: "destructive",
        action: (
          <div className="bg-error rounded-full p-1">
            <IconX className="text-white w-3" strokeWidth={4} />
          </div>
        ),
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex">
      <Image
        src="/firstpluig.png"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
        priority
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" login onSubmit={handleSumbit}>
          <div>
            <Input
              isLogin
              title="Email"
              placeholder="user@mail.com"
              {...emailInput}
              required
            />

            <Input
              isLogin
              title="Password"
              type="password"
              placeholder="Password"
              {...passWordInput}
              required
            />
          </div>
          {/* 
            TODO: Add this feature ==> Forgot Password
          
          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink> */}

          <Button
            disabled={isLoading || !emailInput.value || !passWordInput.value}
            variant={isLoading ? "text" : "primary"}
            className="rounded-md "
            size="big"
          >
            {isLoading && <LoaderSpinner />}
            Log In
          </Button>
        </Form>
      </article>
    </section>
  );
}
