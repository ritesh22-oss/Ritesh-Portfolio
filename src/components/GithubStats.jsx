import { useState, useEffect } from "react";
import { github } from "../assets/icons";
import { EXTRA_LINKS } from "../constants";

const GithubStats = () => {
  const [userData, setUserData] = useState({
    publicRepos: 52,
    followers: 1,
    avatarUrl: "https://avatars.githubusercontent.com/u/176756169?v=4",
  });

  const [topRepos, setTopRepos] = useState([
    {
      name: "Ritesh-Portfolio",
      description: "Interactive 3D developer portfolio showcasing full-stack and machine learning projects.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/ritesh22-oss/Ritesh-Portfolio",
    },
    {
      name: "Jalpaiguri",
      description: "Modern web application crafted with TypeScript, featuring modular architecture.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/ritesh22-oss/Jalpaiguri",
    },
    {
      name: "jalpaiguri-connect",
      description: "Community and real-time networking platform with modern responsive frontend.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/ritesh22-oss/jalpaiguri-connect",
    },
    {
      name: "MY-jalpaiguri",
      description: "Digital directory and resource platform built for localized services and discovery.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/ritesh22-oss/MY-jalpaiguri",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);

        // Fetch User Info
        const userRes = await fetch("https://api.github.com/users/ritesh22-oss");
        if (userRes.ok) {
          const user = await userRes.json();
          if (isMounted) {
            setUserData({
              publicRepos: user.public_repos || 52,
              followers: user.followers || 1,
              avatarUrl: user.avatar_url || "https://avatars.githubusercontent.com/u/176756169?v=4",
            });
          }
        }

        // Fetch Top Repositories
        const reposRes = await fetch(
          "https://api.github.com/users/ritesh22-oss/repos?per_page=6&sort=updated"
        );
        if (reposRes.ok) {
          const repos = await reposRes.json();
          if (isMounted && Array.isArray(repos) && repos.length > 0) {
            const parsedRepos = repos.slice(0, 4).map((repo) => ({
              name: repo.name,
              description: repo.description || "Open source project repository on GitHub.",
              language: repo.language || "JavaScript",
              stargazers_count: repo.stargazers_count || 0,
              forks_count: repo.forks_count || 0,
              html_url: repo.html_url,
            }));
            setTopRepos(parsedRepos);
          }
        }
      } catch {
        // Fallback gracefully on network error or rate limit
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h3 className="subhead-text">GitHub Stats & Contributions</h3>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Live overview of open-source activity, contribution activity, and top repositories directly from GitHub.
          </p>
        </div>

        <a
          href={EXTRA_LINKS.source_code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm active:scale-95"
          aria-label="View Ritesh's GitHub Profile"
        >
          <img src={github} alt="GitHub" className="w-4 h-4 invert object-contain" />
          <span>@ritesh22-oss</span>
        </a>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Repositories</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900">
              {userData.publicRepos}
            </span>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Public
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Live projects & packages</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Activity</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-blue-600">
              Active
            </span>
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              2024–2026
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Regular code commits</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Top Stack</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-slate-900">
              Full Stack
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">TypeScript, React, Python</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400">Followers</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-slate-900">
              {userData.followers}
            </span>
            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
              Developer
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">Community network</p>
        </div>
      </div>

      {/* GitHub Contribution Graph & Activity Card */}
      <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm mb-8 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="font-poppins font-semibold text-slate-900 text-lg sm:text-xl">
              Contribution Graph
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Annual commit streak and open source contributions timeline
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Live GitHub Feed
          </span>
        </div>

        {/* Contribution Graph visualization */}
        <div className="w-full overflow-x-auto pb-2 flex justify-center">
          <img
            src="https://ghchart.rshah.org/0072ff/ritesh22-oss"
            alt="Ritesh's GitHub Contribution Chart"
            className="min-w-[650px] max-w-full h-auto object-contain rounded-xl p-2 bg-slate-50/70 border border-slate-200/60"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Top Repositories Grid fetched via GitHub API */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="font-poppins font-semibold text-slate-900 text-lg sm:text-xl">
              Top Repositories
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Fetched dynamically using the GitHub REST API
            </p>
          </div>

          <a
            href="https://github.com/ritesh22-oss?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
          >
            <span>View All</span>
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h5 className="font-poppins font-bold text-slate-900 group-hover:text-blue-600 text-base sm:text-lg transition-colors flex items-center gap-2">
                    <img src={github} alt="Repo" className="w-4 h-4 object-contain opacity-75" />
                    <span>{repo.name}</span>
                  </h5>
                  <span className="text-[11px] font-semibold text-slate-500 px-2 py-0.5 bg-slate-100 rounded-md">
                    Public
                  </span>
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      repo.language === "TypeScript"
                        ? "bg-blue-500"
                        : repo.language === "JavaScript"
                        ? "bg-yellow-400"
                        : repo.language === "Python"
                        ? "bg-emerald-500"
                        : "bg-indigo-500"
                    }`}
                  />
                  <span className="font-medium text-slate-700">{repo.language}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                    </svg>
                    <span>{repo.stargazers_count}</span>
                  </span>

                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current text-slate-400" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h4.5A2.25 2.25 0 0 0 12.5 6.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878ZM11.75 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-7.5 9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0-2.122A2.25 2.25 0 1 0 5 13.128v-.878a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.878a2.25 2.25 0 1 0 1.5 0v-.878A2.25 2.25 0 0 0 10.25 10h-4.5A2.25 2.25 0 0 0 3.5 12.25v.878Z" />
                    </svg>
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
