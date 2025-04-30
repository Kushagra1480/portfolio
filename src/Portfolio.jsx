import { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Tag, Globe, GithubIcon } from 'lucide-react';

const Portfolio = () => {

const [asciiArt, setAsciiArt] = useState('');
  
  useEffect(() => {
    const fetchAsciiArt = async () => {
      try {
        const frames = [`                                                                                              
                                             :.                                                    
                                 . :     --:  .=                                                   
                                 :*   .:-  .  . :                                                  
                               : --  : .. .-::-:        ::                                         
                                 =---+=:==   *  =-     : :                                         
                               - --        ++@**#*+.   :-:      .:- :.                             
                                 ==     -.:.=##+#*=-=- :       :      :                            
                                 +=    -. :-*#*+#*- ..::      .: -..  -                            
                              -  =*%#--: -:+#**+=#*-      -::: -:    .-                            
                                #*%%#+#@:*+##*%*+@*#*     -.         -                             
                                #**%%+*%+=+#####%%**+= .:    : .......                             
                                 @@@#%#%++-+*%**#*=.= :    .  :::...=                              
                               #@#*# =*%*+==-#####*. -  : =.:   -..+                               
                               *%##%%++%%**=+*+**+#:*+*+++                                         
                              *%###+--:==*%##**#+*+*++%@**#                                        
                        =+==+*@#***=#=@*===#@@***%#*==#@@**                                        
                             .#@*:=-@@%*+=+**+#%###%**%@@@+                                        
                             -+@*=--@@*=##+==*++*#%@@@%@#                                          
                          :+*+*@*.:-@**#=++==#*#****@@@*#.                                         
                          +#***@+---%#*#**+#*#+#**#**##+                                           
                           +%***=:--: ##******##*****#++                                           
                            -=#%=..-.  +%##%#####**#%##+                                           
                                -.:::  @@**####*#*##@:                                             
                                : :- :#**#*#*##**#***=@                                            
                                - :- *#%@@@@@@@@@@@%%%%=                                           
                                - -: +%#%%@**#%**#**#+*+                                           
                                - -- %%*+#***#*+**%@#+*#+=       =@@@=                             
                                : -::**+**#*+***+***@@++=#+= =%@@-   :++-                          
                                .  :++# =- :*+**+*++*@*#@@@@@#         =+=#                        
                                = --=**#    ****+**+*@##*==-==+:          +=++.                    
                                = --*- .... ==  :+*+******==-=-==-                                 
                                = --*+..-#..  .  -+*+*#***++=-===-=:                               
                                + -=...-***#-...:**+*+%*#+*++=--=-=-=-                             
                                = -.=+#=****:.   =*++*+***+*++==-=-=-==-                           
                                = -==*+=**++::...:*+*+*++#*+***+-=-=-=--=.                         
                                = .==**=+*++**-=+*+*+++*++%*+##*+-=-=-=-=-+:                       
                                = .==*+++**++++**+*++*++*++%%##+++=-=-=-=-#*=                      
                                = .=+++++*+*+*++**++*+*+++++%***+++=-+==*%*                        
                                = .=+*++**++*+*++#+*++++*++=#%+*+*##*=#@%@.                        
                               .= .=+++=****+++*+*+++*+++**++@@+*###+%@%@%                         
                               :- .++*=+***++*+++***+++*++++-+%%#**%@%@@%#*                        
                               *- .+++-+#+*++++*+++++*++++**=+*%%%#@@%@@#*                         
                               #  .+++=+#+**+*+++*+*++++*++*+=+#%#@#@@%#*:*                        
                               +  .+++=+***++++*+++*++*++++++=++#@#@%%%@%:                         
                              :+  .+*+=+*++*++++#++#+++#++++++#%*%@@@@#                            
                              ++  .++++++++#++*+++++++++*+++*#%##%##%*                             
                              =*  .*+++++++*++++*++*#+++*+*+%%%###%-#                              
                             .-*  .++++++++%+++++++*@++++**#%##%###                                
                             -=*  .*+#++++*@+++++++*@*+#@@@%#-=-                                   
                             +=*  .*+#++++*%+++++++#@*@@@@@@                                       
                               =  .**%#@@%-.+***+:     @%%@%                                       
                               *  :@%                  =%%%%.                                      
                               #= :%*                   ##%@*                                      
                               @- :%:                   -%@%@.                                     
                           .:*%@-:-=-==-::::::::::::::  =%%@@@-                                    
                                                               .                                   
 `] 
        setAsciiArt(frames);
      } catch (error) {
        console.error('Error loading ASCII art:', error);
        setAsciiArt('ASCII art loading error');
      }
    };
    
    fetchAsciiArt();
  }, []);
  const projects = [
    {
        title: "Job Growth",
        date: "Jan '24-May '25",
        description: "Visualized trends in employment for the WP Carey Seidman Research Institute",
        tags: ["javascript", "d3", "python", "mysql", "php"],
        deployLink: 'https://dev-azsmart.ws.asu.edu/jg-charts-historical/',
        sourceLink: ''
    },
    {
        title: "CAssess",
        date: "Jan '25-May '25",
        description: "Platform for continuous assessment of university course projects based on software agility metrics",
        tags: ["vue", "typescript", "springboot", "java", "fastapi", "docker", "sql"],
        deployLink: '',
        sourceLink: ''
    },
    {
        title: "2d/ 3d rendering in the web",
        date: "Aug '24-Sep '24",
        description: "Tutorial website on different graphical web technologies like webgl, threejs, and babylonjs",
        tags: ["vue", "webgl", "threejs", "babylonjs"],
        deployLink: 'https://ser-421.vercel.app/webgl',
        sourceLink: 'https://github.com/KirtanSoni/2D-3D-in-Web'
    },
    {
        title: "Codevis",
        date: "Oct '24-Oct '24",
        description: "Charting tool that converts natural language/ code to UML using AI",
        tags: ["react", "javascript", "mermaid", "flask", "python"],
        deployLink: 'https://sunhacks-xi.vercel.app/',
        sourceLink: 'https://github.com/Kushagra1480/sunhacks'
    },
    {
        title: "Word Weave",
        date: "Jan '25-March '25",
        description: "LLM word search game",
        tags: ["react", "javascript", "golang", "sqlite"],
        deployLink: 'https://words-weave.com/',
        sourceLink: ''
    }
  ];
  
  return (
    <div className="flex justify-center items-center min-h-screen p-4 ">
      <div className="flex max-w-6xl w-full gap-4">
        <div className="flex flex-col w-3/5">
          <div className="border border-gray-500 bg-white px-6 py-2 mb-2">
            <h1 className="text-5xl font-bold text-center">Kushagra Kartik</h1>
          </div>

          <div className='flex flex-row-reverse'>
            <div className="bg-white p-1 mx-2 w-2/4 text-center">
                <span className="text-sm">MS Software Engg @ ASU</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="border border-gray-500 bg-white p-4 mr-2 h-40">
              <div className="flex flex-col items-center space-y-6">
                <div className="icon-container">
                    <a href='https://github.com/Kushagra1480' target='_blank' rel='noopner noreferrer'>
                        <Github size={24} className="hover-spin text-gray-700" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href='https://www.linkedin.com/in/kushagra-kartik/' target='_blank' rel='noopener noreferrer'>
                        <Linkedin size={24} className="hover-spin text-gray-700" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href='https://drive.google.com/file/d/1JBhnesdP5l6ZRRauXbRh9Xqq60A-fXFF/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <FileText size={24} className="hover-spin text-gray-700" />
                    </a>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-500 bg-white p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-4">Projects/ Work</h2>              
              <div className="overflow-y-auto max-h-128">
                {projects.map((project, index) => (
                  <div key={index} className="border border-gray-300 p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold mr-2">{project.title}</h3>
                        <div className='gap-2 flex'>
                            {project.deployLink.length > 0 && (
                                <>
                                    <a href={project.deployLink} target='_blank' rel='noopener noreferrer'>
                                        <Globe size={18} className='hover-spin text-green-300'/>
                                    </a>
                                </>
                            )}
                            {project.sourceLink && (
                                <>
                                    <a href={project.sourceLink} target='_blank' rel='noopener noreferrer'>
                                        <GithubIcon size={18} className='hover-spin text-blue-300'/>
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
                        <span key={tagIndex} className="flex items-center text-sm text-gray-600 gap-2">
                            <Tag size={12} className="hover-spin text-gray-700"/>
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
        
        <div className="w-2/6 justify-flex-end">
          <pre className="text-xs text-gray-600 whitespace-pre ">
            {asciiArt}
          </pre>
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
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
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