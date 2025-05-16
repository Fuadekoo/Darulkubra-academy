"use server";
import { prisma } from "@/lib/db";

export async function getPackageData() {
  try {
    const coursePackages = await prisma.coursePackage.findMany();
    return coursePackages;
  } catch (error) {
    console.error("Error fetching package data:", error);
    throw error;
  }
}

export async function createPackage() {
  try {
    const newPackage = await prisma.coursePackage.create({
      data: {
        // Add your package data here
      },
    });
    return newPackage;
  } catch (error) {
    console.error("Error creating package:", error);
    throw error;
  }
}

export async function updatePackage(packageId: string) {
  try {
    const updatedPackage = await prisma.coursePackage.update({
      where: { id: packageId },
      data: {
        // Add your updated package data here
      },
    });
    return updatedPackage;
  } catch (error) {
    console.error("Error updating package:", error);
    throw error;
  }
}

export async function deletePackage(packageId: string) {
  try {
    const deletedPackage = await prisma.coursePackage.delete({
      where: { id: packageId },
    });
    return deletedPackage;
  } catch (error) {
    console.error("Error deleting package:", error);
    throw error;
  }
}
