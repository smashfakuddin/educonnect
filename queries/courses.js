import { Course } from "@/model/course-model";
import { Category } from "@/model/category-model";
import { User } from "@/model/user-model";
import { Module } from "@/model/module-model";
import { Testimonial } from "@/model/testimonial-model";
import dbConnect from "@/service/mongo";

export async function getCourses() {
  await dbConnect();
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    }).lean();

  return courses;
}
