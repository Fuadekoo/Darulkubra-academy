import React from "react";
import useAction from "@/hooks/useAction";
import { createLesson } from "@/actions/teacher/course";

function AddCourse() {
  const [, submit, isLoading] = useAction(createLesson, [, () => {}]);
  return <div></div>;
}

export default AddCourse;
