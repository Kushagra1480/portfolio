import React, {useState} from "react"

export const ProjectShowcase = () => {
    const [projects, setProjects] = useState([
        {id: 1, title: 'Agile Metrics', description: 'Architected full-stack application using React and Java Spring Boot'},
        {id: 2, title: 'Resouce Allocation in 5G Networks', description: 'Developed innovative resource allocation strategy using Deep Reinforcement Learning'},
    ])
    const [newProject, setNewProject] = useState({title: '', description: ''})

    const handleProject = () => {
        setProjects([...projects, {id: projects.length + 1, ...newProject}])
        setNewProject({title: '', description: ''})
    }

    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            {projects.map((project) => (
                <div key={project.id} className="mb-4">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
            <div className="mt-4">
                <input 
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="p-2 border rounded mb-2"
                />
                
                <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="w-full p-2 border rounded"
        />
                <button>Add Project</button>
            </div>
        </div>
    )
}