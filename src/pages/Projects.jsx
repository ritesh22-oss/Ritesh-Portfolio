import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// components
import { Cta, GithubStats } from "../components";

// constants
import { PROJECTS, SITE_NAME } from "../constants";

// icons
import { arrow } from "../assets/icons";

// projects
const Projects = () => {
  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Projects</title>
      </Helmet>

      {/* projects section */}
      <section className="max-container">
        {/* projects head */}
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>

        {/* projects text */}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I&apos;ve embarked on numerous projects throughout the years, but
            these are the ones I hold closest to my heart. Many of them are
            open-source, so if you come across something that piques your
            interest, feel free to explore the codebase and contribute your
            ideas for further enhancements. Your collaboration is highly valued!
          </p>
        </div>

        {/* projects list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 my-12 sm:my-20">
          {/* map over projects */}
          {PROJECTS.map((project) => (
            <div
              key={`Project_${project.name}`}
              className="w-full bg-white/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* project */}
                <div className="block-container w-12 h-12">
                  {/* project icon bg */}
                  <div className={`btn-back rounded-xl ${project.theme}`} />

                  {/* project icon */}
                  <div
                    className="btn-front rounded-xl flex justify-center items-center"
                    title={project.name}
                  >
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>

                {/* project info */}
                <div className="mt-5 flex flex-col">
                  {/* project name */}
                  <h4 className="text-xl sm:text-2xl font-poppins font-semibold text-slate-900 leading-snug">
                    {project.name}
                  </h4>

                  {/* project description */}
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* project link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-poppins font-semibold text-blue-600 hover:text-blue-700 py-1 transition-colors text-sm sm:text-base"
                  title={`Visit ${project.name}`}
                  aria-label={`Visit live site for ${project.name}`}
                >
                  <span>Live Demo</span>
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-4 h-4 object-contain transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats & Contribution Activity */}
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

export default Projects;
