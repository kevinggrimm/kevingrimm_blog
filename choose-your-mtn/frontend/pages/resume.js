import HeaderTitle from "@components/HeaderTitle";

import { PageSEO } from "@components/SEO";
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
    <>
      <PageSEO
        title={"Resume - Kevin Grimm"}
        description={"Resume - Kevin Grimm"}
      />
      <div className="flex flex-col flex-wrap w-full leading-relaxed lg:mx-10 lg:px-5">
        <div className="">
          <div className="">
            <HeaderTitle title={summary.title} />
            <div className="flex flex-col w-full">
              {summary.paragraphs.map((paragraph, i) => (
                <div className="mb-4">{paragraph}</div>
              ))}
            </div>
          </div>
          <div>
            <HeaderTitle title={experience.title} />
            <div className="flex flex-col">
              {experience.roles.map((role, i) => (
                <div className="flex flex-col mb-4">
                  <div className="flex flex-row font-semibold text-[16px]">
                    <div className="flex flex-col text-left w-6/12">
                      <div className="w-full">{role.company}</div>
                      <div className="w-full">{role.position}</div>
                    </div>
                    <div className="flex flex-col text-right w-6/12">
                      <div className="w-full">{role.location}</div>
                      <div className="w-full">{role.period}</div>
                    </div>
                  </div>
                  <ul className="list-disc px-4">
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
            <div className="flex flex-col text-[16px]">
              {techStack.categories.map((category, i) => (
                <div className="mb-2">
                  <span className="font-bold">{`${category.name}: `}</span>
                  <span>{category.items}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <HeaderTitle title={certifications.title} />
            <div className="flex flex-col -mb-4">
              {certifications.certs.map((cert, i) => (
                <div className="mb-2 text-[16px]">
                  <div className="flex flex-row font-semibold">
                    <div className="text-left w-7/12">{cert.name}</div>
                    <div className="text-right w-5/12">{cert.date}</div>
                  </div>
                  <div>
                    <span>Credential ID: </span>
                    <a className='underline' href={cert.href}>{cert.id}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <HeaderTitle title={projects.title} />
            <div className="flex flex-col">
              {projects.projects.map((project, i) => (
                <>
                  <div className="flex flex-row text-[16px] font-semibold">
                    <div className="text-left w-7/12">{project.name}</div>
                    <div className="text-right w-5/12">
                      <a className="w-full underline" href={project.href}>
                        {project.site}
                      </a>
                    </div>
                  </div>
                  <div className="text-[16px]">{project.description}</div>
                  <ul className="list-disc px-4">
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
                <div className="text-[16px] mb-4">
                  <div className="flex flex-row font-semibold">
                    <div className="w-7/12 text-left">{event.organization}</div>
                    <div className="w-5/12 text-right">{event.timePeriod}</div>
                  </div>
                  <ul className="list-disc px-4">
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
            <div className="flex flex-col text-[16px]">
              <div className="flex flex-row font-semibold">
                <div className="w-7/12 text-left flex flex-col">
                  <div className="flex flex-col">
                    <div>{education.university}</div>
                    <div>{education.college}</div>
                  </div>
                </div>
                <div className="w-5/12 text-right flex flex-col">
                  <div>{education.location}</div>
                  <div>{education.timePeriod}</div>
                </div>
              </div>
              <ul className="list-disc px-4">
                {education.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <HeaderTitle title={interests.title} />
            <div className="text-[16px]">{interests.activities}</div>
          </div>
        </div>
      </div>
    </>
  );
}