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
    <Card className="w-full max-w-sm space-y-4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your support me account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit((data) => {
            action(data);
          })}
        >
          <div>
            <label className="block mb-1">Phone Number</label>
            <Input
              {...register("phoneno")}
              placeholder="09xxxxxxxx"
              type="text"
            />
            {formState.errors.phoneno && (
              <span className="text-red-500 text-xs">
                {formState.errors.phoneno.message}
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1">Passcode</label>
            <Input
              {...register("passcode")}
              placeholder="*********"
              type="password"
            />
            {formState.errors.passcode && (
              <span className="text-red-500 text-xs">
                {formState.errors.passcode.message}
              </span>
            )}
          </div>
          <Button type="submit" className="mt-4" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
