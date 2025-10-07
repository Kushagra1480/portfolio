import { Tag, Globe, GithubIcon } from "lucide-react";
import bridgeImg from "./assets/bridge.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Job Growth",
      date: "Jan '24-May '25",
      description:
        "Visualized trends in employment for the WP Carey Seidman Research Institute",
      tags: ["javascript", "d3", "python", "mysql", "php"],
      deployLink: "https://dev-azsmart.ws.asu.edu/jg-charts-historical/",
      sourceLink: "",
    },
    {
      title: "CAssess",
      date: "Jan '25-May '25",
      description:
        "Platform for continuous assessment of university course projects based on software agility metrics",
      tags: [
        "vue",
        "typescript",
        "springboot",
        "java",
        "fastapi",
        "docker",
        "sql",
      ],
      deployLink: "",
      sourceLink: "",
    },
    {
      title: "2d/ 3d rendering in the web",
      date: "Aug '24-Sep '24",
      description:
        "Tutorial website on different graphical web technologies like webgl, threejs, and babylonjs",
      tags: ["vue", "webgl", "threejs", "babylonjs"],
      deployLink: "https://ser-421.vercel.app/webgl",
      sourceLink: "https://github.com/KirtanSoni/2D-3D-in-Web",
    },
    {
      title: "Codevis",
      date: "Oct '24-Oct '24",
      description:
        "Charting tool that converts natural language/ code to UML using AI",
      tags: ["react", "javascript", "mermaid", "flask", "python"],
      deployLink: "https://sunhacks-xi.vercel.app/",
      sourceLink: "https://github.com/Kushagra1480/sunhacks",
    },
    {
      title: "Word Weave",
      date: "Jan '25-March '25",
      description: "LLM word search game",
      tags: ["react", "javascript", "golang", "sqlite"],
      deployLink: "https://words-weave.com/",
      sourceLink: "",
    },
  ];

  return (
    <div className="flex bg-slate-50 justify-center items-center min-h-screen p-4 ">
      <div className="flex max-w-6xl w-full gap-4">
        <div className="flex flex-col">
          <div className="px-6 py-2 mb-2">
            <h1 className="text-2xl font-bold text-center font-sans">
              Kushagra Kartik
            </h1>
            <p className="text-center text-gray-700">
              research assistant @ asu
            </p>
            <p className="text-center text-gray-700">SF Bay Area</p>
          </div>

          <div className="flex">
            <div>
              <img src={bridgeImg} />
              <p>
                <a
                  href="https://github.com/Kushagra1480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline hover:font-bold"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/kushagra-kartik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline hover:font-bold"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                <a
                  href="https://drive.google.com/file/d/1JBhnesdP5l6ZRRauXbRh9Xqq60A-fXFF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline hover:font-bold"
                >
                  Resume
                </a>
              </p>
              <div className="border border-gray-500 p-3 h-40 w-40 mr-4">
                <ul>
                  <li>
                    <a href="#work">work</a>
                  </li>
                  <li>
                    <a href="#edu">education</a>
                  </li>
                  <li>
                    <a href="#os">open_source</a>
                  </li>
                  <li>
                    <a href="#projects">projects</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-4" id="work">
                work experience
              </h2>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="mb-2">
                    <h3 className="font-bold font-sans">Research Assistant</h3>
                    <p className="ml-2 my-3">
                      <span className="block">
                        Health Engineering Applications Lab (HEAL)
                      </span>
                      <span className="block">Arizona State University</span>
                    </p>
                    <p className="font-light ml-4">
                      <span className="block">
                        Implementing paramedic competancy assessment
                      </span>
                      <span className="block">
                        algorithms based on VR training simulation data
                      </span>
                      <ul className="font-normal my-3">
                        <li>
                          java: implementation of service; servets for API
                        </li>
                        <li>kafka: real time data stream from VR simulation</li>
                        <li>
                          mongodb: simulation data & resulting performance
                          calculation store
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">June &apos;25 onwards</p>
                    <p>Remote (US)</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center ">
                  <div className="mb-2">
                    <h3 className="font-bold font-sans">Sofware Engineer</h3>
                    <p className="ml-2 my-2">
                      WP Carey Seidman Research Institute
                    </p>
                    <p className="ml-4 font-light my-3">
                      <span className="block">
                        Rewrote Job Growth data tool; reducing
                      </span>
                      <span className="block">
                        load times from 20s to 1s and added
                      </span>
                      <span className="block">custom visualizations</span>
                      <ul className="font-normal my-3">
                        <li>javascript: client logic</li>
                        <li>D3: visualization library</li>
                        <li>php: database calls</li>
                        <li>mysql: database; hosted on AWS RDS</li>
                        <li>python: ETL script</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">
                      Jan &apos;24-May &apos;25
                    </p>
                    <p>Tempe, AZ</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold my-4" id="edu">
                education
              </h2>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-bold font-sans">
                      MS in Software Engineering
                    </h3>
                    <p className="text-amber-500 ml-2">
                      Arizona State University
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Aug &apos;23-May &apos;25</p>
                    <p>GPA: 3.83</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-8 mt-4">
                  <div>
                    <h3 className="font-bold font-sans">
                      BS in Computer Science
                    </h3>
                    <p className="text-red-900 ml-2">
                      Netaji Subhas University of Technology
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Aug &apos;19-May &apos;23</p>
                    <p>GPA: 3.70</p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4" id="os">
                open source work
              </h2>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="mb-2">
                    <h3 className="font-bold font-sans">CloudQuery</h3>
                    <p className="ml-2 my-3">
                      <span className="block">
                        data movement framework powered by Apache Arrow
                      </span>
                      <div className="font-light ml-4">
                        <div className="flex justify-between">
                          <div>
                            <a
                              href="https://github.com/cloudquery/cloudquery/pull/21220"
                              target="_blank"
                              rel="noopner noreferrer"
                              className="text-blue-800 underline hover:font-bold block"
                            >
                              feat: Document Arrow to MySQL type support #21220
                            </a>
                          </div>
                          <div className="ml-8">
                            <p className="text-gray-600">Aug &apos;25</p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <a
                              href="https://github.com/cloudquery/cloudquery/pull/21279"
                              target="_blank"
                              rel="noopner noreferrer"
                              className="text-blue-800 underline hover:font-bold block"
                            >
                              feat: Added Type Documentation #21279
                            </a>
                          </div>
                          <div className="text-right ml-8">
                            <p className="text-gray-600">Aug &apos;25</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <div className="mb-2">
                    <h3 className="font-bold font-sans">PIConGPU</h3>
                    <p className="ml-2 my-3">
                      <span className="block">particle in cell simulator</span>
                      <div className="font-light ml-4">
                        <div className="flex justify-between">
                          <div>
                            <a
                              href="https://github.com/ComputationalRadiationPhysics/picongpu/pull/5465"
                              target="_blank"
                              rel="noopner noreferrer"
                              className="text-blue-800 underline hover:font-bold block"
                            >
                              Removed unit.param reference in docs #5465
                            </a>
                          </div>
                          <div className="ml-8">
                            <p className="text-gray-600">Sep &apos;25</p>
                          </div>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4" id="projects">
                projects
              </h2>
              <div className="">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 mb-4 font-mono"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold mr-2">
                          {project.title}
                        </h3>
                        <div className="gap-2 flex">
                          {project.deployLink.length > 0 && (
                            <>
                              <a
                                href={project.deployLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Globe
                                  size={18}
                                  className="hover-spin text-green-300"
                                />
                              </a>
                            </>
                          )}
                          {project.sourceLink && (
                            <>
                              <a
                                href={project.sourceLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <GithubIcon
                                  size={18}
                                  className="hover-spin text-blue-300"
                                />
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="text-gray-600">{project.date}</span>
                    </div>
                    <p className="mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="flex items-center text-sm text-gray-600 gap-2"
                        >
                          <Tag size={12} className="hover-spin text-gray-700" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-spin {
          transition: transform 0.3s ease;
        }
        .hover-spin:hover {
          animation: wiggle 0.5s ease-in-out;
        }

        @keyframes wiggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: green;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: green;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
