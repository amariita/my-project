import { useState, useCallback, useEffect } from "react";
import './Carousel.css'

const projects = [
    {
        
        id: 1,
        image: '',
        category: 'Landings',
        link: ''
    },
    {
        id: 2,
        image: '/src/assets/images/excel.JPG',
        category: 'Multipages',
        link: 'https://amariita.github.io/course-excel/'
    },
    {
        id: 3,
        image: '/src/assets/images/timer.JPG',
        category: 'SpApplications',
        link: 'https://amariita.github.io/pomodoro-timer/'
    },
];



const Carousel = ({selectedCategory}) => {
    const [selectedProject, setSelectedProject] = useState(null)

    const closeModal = useCallback(() => {
        setSelectedProject(null)
    }, [])

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    }, [closeModal])

    useEffect(() => {
        if (selectedProject) {
            document.addEventListener('keydown', handleKeyDown)
            return () => document.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedProject, handleKeyDown])

    return (
        <>
            <div className="projects-grid">
                {projects.filter((project) => {
                    if(selectedCategory == 'All') {
                        return true
                    }
                   return project.category === selectedCategory
                }).map((project) => (
                    <img 
                        key={project.id}
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && (
                <div className="modal-window-image" onClick={closeModal}>
                    <div className="divSelectedImage" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="modal-image" 
                        />
                        <a 
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-link"
                        >
                            Посмотреть сайт →
                        </a>
                        <button 
                            onClick={closeModal}
                            className="modal-image-close-button"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Carousel;