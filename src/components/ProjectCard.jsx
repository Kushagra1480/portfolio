import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectCard = ({ imageUrl, title, description, links, stack }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-zinc-900">
      <img
            src={imageUrl}
            alt={title}
            className="w-full h-64"
          />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-700 text-sm mb-4 text-zinc-300">{description}</p>
        <div className="text-sm text-gray-600 mb-4 text-slate-400">
          <span className="font-semibold">Powered by:</span> {stack.join(', ')}
        </div>

        <div className="flex space-x-4">
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 flex-1"
          >
            <FaGithub className="mr-2" />
            Source Code
          </a>

          {links[1] ? (
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 flex-1"
            >
              <FaGlobe className="mr-2" />
              Visit
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed flex-1"
            >
              <FaGlobe className="mr-2" />
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;