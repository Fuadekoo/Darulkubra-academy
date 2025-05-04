"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zodSchema";
import useAction from "@/hooks/useAction";
import { authenticate } from "@/actions/common/auth";

function LoginForm() {
  const { handleSubmit, register, formState } = useForm<
      z.infer<typeof loginSchema>
    >({
      resolver: zodResolver(loginSchema),
    }),
    [, action, isLoading] = useAction(authenticate, [
      ,
      (state) => {
        if (state) {
          // addToast({ title: state, color: "danger" });
          // action();
        }
      },
    ]);
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          action(data);
        })}
      >
        <input {...register("phoneno")} placeholder="Phone" />
        <input {...register("passcode")} placeholder="Passcode" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
