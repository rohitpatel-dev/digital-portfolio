import ResumeDetails from "@/public/Resume/resumeDetails.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ResumePage() {
  var educations = ResumeDetails.resume.education;
  var works = ResumeDetails.resume.work;
  var skills = ResumeDetails.resume.skills;

  return (
    <div className="bg-white px-1">
      <div className="max-w-7xl mx-auto items-center justify-center">
        <div className="grid grid-cols-4 py-14">
          <div className="col-span-1">
            <h2 className="font-bold text-xl underline underline-offset-4 text-gray-500">
              Educations
            </h2>
          </div>
          <div className="col-span-3">
            {educations.map((education) => (
              <div key={education.school}>
                <p className="font-bold text-xl  text-gray-500">
                  {education.school}
                </p>
                <p>{education.graduated}</p>
                <p>{education.degree}</p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-red-500 h-2" />

      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-4 py-14">
          <div className="col-span-1 font-bold text-xl underline underline-offset-4 text-gray-500">
            work:
          </div>
          <div className="col-span-3">
            {works.map((work) => (
              <div key={work.company}>
                <p className="font-bold text-xl  text-gray-500">
                  {work.company}
                </p>
                <p>{work.title}</p>
                <p>{work.description}</p>
                <p>{work.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="max-w-7xl mx-auto items-center justify-center">
        <div className="grid grid-cols-4 py-14">
          <div className="font-bold text-xl underline underline-offset-4 text-gray-500">
            skills:
          </div>
          <div className="col-span-3 space-y-2">
            {skills.map((skill) => (
              <div key={skill.name}>
                <Card>
                  <CardHeader>
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{skill.level}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
