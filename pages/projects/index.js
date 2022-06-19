import clsx from "clsx";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
    return (
        <div>
            <div>
              <h1 className="text-2xl">Side projects</h1>
              <p className="mt-2">There is usually no shortage of ideas and potential projects that I would like to implement. Many of them seep away as scribbles in notebooks or as snippets of thoughts in text programs. However, some ideas actually come to live if I find some time and desire for it in my spare time.</p>
            </div>
            <div className={clsx(
              "mt-10 grid grid-cols-1 gap-y-12 gap-x-10",
              "xs:grid-cols-2",
              "sm:mt-20",
              "md:grid-cols-3"
            )}>
              <ProjectCard
                title="Lumon"
                // link="projects/lumon"
                externalLink={true}
                link="https://www.severance.iamrob.in/"
                description="'Severance' interface"
                color="bg-[#0E1F38]"
                logo="/img/projects/lumon/thumb.png"
                logoHeight="h-[33%]"
              />
              <ProjectCard
                title="Geeenerated"
                link="https://www.instagram.com/geeenerated/"
                externalLink={true}
                description="generative art"
                color="bg-[#6F69D2]"
                logo="/img/projects/geeenerated/thumb.svg"
                logoHeight="h-[36%]"
              />
              <ProjectCard
                title="notion budget"
                link="projects/notionbudget"
                description="budget data visualization"
                color="bg-[#2D2E37]"
                logo="/img/projects/notionbudget/thumb.png"
                logoHeight="h-[33%]"
              />
              <ProjectCard
                title="oh my"
                link="projects/ohmy"
                description="internet usage tracker"
                color="bg-[#F5BA4F]"
                logo="/img/projects/ohmy/thumb.svg"
                logoHeight="h-[35%]"
              />
              <ProjectCard
                title="sam"
                link="projects/sam"
                color="bg-[#304B56]"
                description="project registration tool"
                logo="/img/projects/sam/thumb.svg"
              />
              <ProjectCard
                title="meaningful animations"
                link="projects/meaningfulanimations"
                description="UI animations criteria catalog"
                color="bg-[#5861F4]"
                logo="/img/projects/ma/thumb.svg"
              />
              <ProjectCard
                title="media.camp"
                link="projects/mediacamp"
                description="student barcamp"
                color="bg-[#917ED7]"
                logo="/img/projects/mediacamp/thumb.svg"
                logoHeight="h-[33%]"
              />
            </div>
        </div>
    );
}

Projects.layout = "LayoutDefault";

export default Projects;
