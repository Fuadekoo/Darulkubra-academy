"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zodSchema";
import useAction from "@/hooks/useAction";
import { authenticate } from "@/actions/common/auth";
import { addToast } from "@heroui/react";

function Page() {
  const { handleSubmit, register, formState } = useForm<
      z.infer<typeof loginSchema>
    >({
      resolver: zodResolver(loginSchema),
    }),
    [, action, isLoading] = useAction(authenticate, [
      ,
      (state) => {
        if (state) {
          addToast({ title: state, color: "danger" });
          action();
        }
      },
    ]);
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          action(data);
        })}
      >
        <input {...register("phone")} placeholder="Phone" />
        <input {...register("passcode")} placeholder="Passcode" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default Page;
