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
      <div className="md:max-w-7xl mx-auto max-w-sm ">
        <div className="grid md:grid-cols-4  py-14 ">
          <div className="col-span-1">
            <h2 className="font-bold text-xl underline underline-offset-4 text-gray-500 ">
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

      <hr />

      <div className="md:max-w-7xl mx-auto max-w-sm">
        <div className="grid md:grid-cols-4 py-14 ">
          <h3 className="font-bold text-xl underline underline-offset-4 text-gray-500">
            Works
          </h3>
          <div className="col-span-3">
            {works.map((work) => (
              <div className="" key={work.title}>
                <p>{work.company}</p>
                <p>{work.title}</p>
                <p>{work.description}</p>
                <p>{work.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="md:max-w-7xl mx-auto max-w-sm">
        <div className="grid md:grid-cols-4 py-14 ">
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
