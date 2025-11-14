function Projects() {
  return (
    <section id="projects">
        <h2>Projects & Initiatives</h2>
        <div className="projects-grid">
            <div className="project-card">
                <h3>Quality Control Transformation</h3>
                <p>Led the multi-year evolution of EVERSANA's quality practice, implementing modern testing frameworks, establishing standards and processes, and building a high-performing team that delivers quality at scale.</p>
                <span className="project-tag">Leadership</span>
                <span className="project-tag">Process</span>
                <span className="project-tag">Team Building</span>
            </div>

            <div className="project-card">
                <h3>Visual Testing Implementation</h3>
                <p>Pioneered the adoption of Applitools for automated visual testing, reducing regression testing time and improving quality detection. Now serving as an Applitools Ambassador to help others adopt visual AI testing.</p>
                <span className="project-tag">Automation</span>
                <span className="project-tag">Innovation</span>
                <span className="project-tag">AI/ML</span>
            </div>

            <div className="project-card">
                <h3>Comrade Cola</h3>
                <p>A creative coding project blending satire, storytelling, and technical challenges. My playground for exploring new technologies and keeping the joy in software development. Because quality work comes from people who love what they do.</p>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">Creative</span>
                <span className="project-tag">Fun</span>
            </div>
        </div>
    </section>
  );
}
export default Projects;