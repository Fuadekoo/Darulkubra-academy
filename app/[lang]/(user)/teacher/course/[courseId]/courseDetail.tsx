import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const course = {
  title: "Figma from A to Z",
  author: { name: "Crystal Lucas", role: "UI/UX Specialist", rating: 4.8 },
  rating: 4.5,
  reviews: 126,
  totalLessons: 38,
  duration: "4h 30min",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  sections: [
    { title: "Intro", duration: "22 min" },
    { title: "Intermediate Level Stuff", duration: "1h 20min" },
    { title: "Advanced Stuff", duration: "36 min" },
    { title: "Imports & Graphics", duration: "40 min" },
    { title: "Components in Figma", duration: "1h 12min" },
    { title: "Styles in Figma", duration: "41 min" },
    { title: "Summary", duration: "8 min" },
  ],
};

export default function CourseDetail() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Course Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg">Share</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Course Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Unlock the power of Figma with this comprehensive online course.
          </p>
          <p className="mt-2">
            💡 <strong>Instructor:</strong> {course.author.name} (
            {course.author.role})
          </p>
          <p>
            ⭐ {course.rating} ({course.reviews} reviews)
          </p>
          <p>
            📚 {course.totalLessons} lessons | ⏳ {course.duration}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {/* Embedded YouTube Video */}
        <div className="mb-6">
          <iframe
            className="w-full h-96 rounded-lg"
            src={course.videoUrl}
            title={course.title}
            allowFullScreen
          />
        </div>

        {/* Course Content */}
        <Card>
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {course.sections.map((section, index) => (
                <li key={index} className="border-b pb-2">
                  <strong>{section.title}</strong> - {section.duration}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
