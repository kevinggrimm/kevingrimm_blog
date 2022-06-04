import HeaderTitle from "@components/Resume/HeaderTitle";

import { SEO } from "@components/common";
import resumeData from "@/content/resume";

export default function Resume({ }) {
  const {
    summary,
    experience, 
    techStack,
    certifications,
    projects,
    leadership,
    education,
    interests
  } = resumeData;
  return (
    <div className="flex flex-col flex-wrap w-full lg:mx-10 lg:px-5">
      <div className="">
        <HeaderTitle title={summary.title} />
        <div className="flex flex-col w-full">
          {summary.paragraphs.map((paragraph, i) => (
            <div className="mt-4 mb-2">{paragraph}</div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <HeaderTitle title={experience.title} />
        <div className="flex flex-col">
          {experience.roles.map((role, i) => (
            <div className="flex flex-col">
              <div className="flex flex-row font-bold">
                <div className="flex flex-col text-left w-6/12">
                  <div className="w-full text-xl">{role.company}</div>
                  <div className="w-full text-xl">{role.position}</div>
                </div>
                <div className="flex flex-col text-right w-6/12 text-md">
                  <div className="w-full">{role.location}</div>
                  <div className="w-full">{role.period}</div>
                </div>
              </div>
              <ul className="text-lg list-disc">
                {role.accomplishments.map((accomplishment, i) => (
                  <li key={i}>{accomplishment}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HeaderTitle title={techStack.title} />
        <div className="flex flex-col my-4 text-xl">
          {techStack.categories.map((category, i) => (
            <div className="my-2">
              <span className="font-bold">{`${category.name}: `}</span>
              <span>{category.items}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HeaderTitle title={certifications.title} />
        <div className="flex flex-col my-4">
          {certifications.certs.map((cert, i) => (
            <div className="my-2">
              <div className="flex flex-row font-bold">
                <div className="text-left w-7/12 text-xl">
                  {cert.name}
                </div>
                <div className="text-right w-5/12 text-md">{cert.date}</div>
              </div>
              <div>
                <span className="font-semibold">Credential ID: </span>
                <a href={cert.href}>{cert.id}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <HeaderTitle title={projects.title} />
        <div className="flex flex-col">
          {projects.projects.map((project, i) => (
            <>
            <div className="flex flex-row">
              <div className="text-xl font-bold text-left w-7/12 my-2 text-xl">
                {project.name}
              </div>
              <div className="text-right w-5/12 text-md">
                <a className="w-full" href={project.href}>
                  {project.site}
                </a>
              </div>
            </div>
            <div className="text-lg">{project.description}</div>
            <ul className="text-lg">
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            </>
          ))}
        </div>
      </div>
      <div>
        <HeaderTitle title={leadership.title} />
        <div className="flex flex-col">
          {leadership.events.map((event) => (
            <div className="my-2">
              <div className="flex flex-row font-bold">
                <div className="w-7/12 text-left text-xl">
                  {event.organization}
                </div>
                <div className="w-5/12 text-right text-md">
                  {event.timePeriod}
                </div>
              </div>
              <ul className="text-lg">
                {event.actions.map((action, i) => (
                  <li key={i}>{action}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HeaderTitle title={education.title} />
        <div className="flex flex-col">
          <div className="flex flex-row font-bold">
            <div className="w-7/12 text-left flex flex-col">
              <div className="flex flex-col text-xl">
                <div>{education.university}</div>
                <div>{education.college}</div>
              </div>
            </div>
            <div className="w-5/12 text-right flex flex-col text-md">
              <div>{education.location}</div>
              <div>{education.timePeriod}</div>
            </div>
          </div>
          <ul className="text-lg">
            {education.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <HeaderTitle title={interests.title} />
        <div className="text-lg">{interests.activities}</div>
      </div>
    </div>
  );
}