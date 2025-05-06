"use client";
import React from "react";
import useAction from "@/hooks/useAction";
import { createCourses } from "@/actions/teacher/course";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { courseSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddCourse() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
  });

  const [, submit, isLoading] = useAction(createCourses, [, () => {}]);

  const onSubmit = (data: z.infer<typeof courseSchema>) => {
    console.log("hello world");
    console.log("Form Data:", data);
    // submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Course Title" {...register("title")} />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </div>
      <div>
        <Input placeholder="Course Description" {...register("description")} />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button type="submit">submit</Button>
    </form>
  );
}

export default AddCourse;
