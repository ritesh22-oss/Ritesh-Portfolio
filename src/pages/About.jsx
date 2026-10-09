import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Helmet } from "react-helmet-async";

// components
import { Cta, GithubStats } from "../components";

// constants
import { SKILLS, EXPERIENCES, SITE_NAME } from "../constants";

import "react-vertical-timeline-component/style.min.css";

// about
const About = () => {
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | About me</title>
      </Helmet>

      {/* about section */}
      <section className="max-container">
        {/* about head */}
        <h1 className="head-text">
          Hello, I&apos;m{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {SITE_NAME.split(" ")[0]}
          </span>
        </h1>

        {/* about text */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
          Transforming Ideas into Impact with a Diverse Skill Set Built on Passion, Innovation, and Expertise.
          </p>
        </div>

        {/* about skills */}
        <div className="py-8 sm:py-10 flex flex-col">
          {/* skills head */}
          <h3 className="subhead-text">My Skills</h3>

          {/* skills list: responsive centered grid that balances on 320px to large desktop */}
          <div className="mt-10 sm:mt-16 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 md:gap-12">
            {/* map over each skill */}
            {SKILLS.map((skill) => (
              <div
                className="block-container w-16 h-16 sm:w-20 sm:h-20"
                key={`skill_${skill.name}`}
              >
                {/* bg btn */}
                <div className="btn-back rounded-xl" />
                {/* skill icon */}
                <div
                  className="btn-front rounded-xl flex flex-col justify-center items-center shadow-sm"
                  title={skill.name}
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* work experience */}
        <div className="py-16">
          {/* experience head */}
          <h3 className="subhead-text">Experience</h3>

          {/* experience text */}
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
            Over the years, I have honed my skills through diverse projects and collaborations, working alongside talented individuals to achieve remarkable results.</p>
          </div>

          {/* experience list */}
          <div className="mt-12 flex">
            <VerticalTimeline>
              {/* map over each experience */}
              {EXPERIENCES.map((experience) => (
                <VerticalTimelineElement
                  key={`Experience_${experience.title}`}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      {/* experience icon */}
                      <img
                        src={experience.icon}
                        alt={experience.title}
                        className="w-[58%] h-[58%] object-contain drop-shadow-sm"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    background: "#ffffff",
                    borderBottom: `4px solid ${experience.iconBg || "#3b82f6"}`,
                    boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
                    borderRadius: "1rem",
                    padding: "1.25rem 1.25rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #ffffff",
                  }}
                >
                  {/* experience info */}
                  <div className="border-b border-slate-100 pb-2.5">
                    {/* experience title */}
                    <h3 className="text-slate-900 text-lg sm:text-xl font-poppins font-bold tracking-tight">
                      {experience.title}
                    </h3>

                    {/* experience domain / role scope */}
                    <p
                      className="text-blue-600 font-medium text-xs sm:text-sm mt-1 flex items-center gap-1.5"
                      style={{ margin: 0 }}
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{experience.company_name}</span>
                    </p>
                  </div>

                  {/* experience points */}
                  <ul className="my-3 sm:my-4 list-disc ml-4 sm:ml-5 space-y-2">
                    {/* map over each experience point */}
                    {experience.points.map((point, i) => (
                      <li
                        key={`Experience_${experience.title}_point_${i + 1}`}
                        className="text-slate-600 font-normal pl-0.5 sm:pl-1 text-xs sm:text-sm leading-relaxed"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>

        {/* GitHub stats section */}
        <hr className="border-slate-200" />
        <GithubStats />

        {/* horizontal separator */}
        <hr className="border-slate-200" />

        {/* call-to-action */}
        <Cta />
      </section>
    </>
  );
};

export default About;
