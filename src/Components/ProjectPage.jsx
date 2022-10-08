import config from "../config.json"
import { BiWorld } from "react-icons/bi"
export default function ProjectPage() {
    return (
        <div>
            <div className="center">
                <div className="about-text">
                    <div className="about-text">
                        <span>Project</span>
                    </div>
                    <div className="desc">
                        <p>
                            All Project
                        </p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="projectcards">
                    {
                        config.projects.map((item, index) => {
                            return (
                                <div key={index} className="projectcard">
                                    <div className="projects-all">
                                        <div className="bg-cardsiy"> <BiWorld /> </div>
                                        <div className="project-all">
                                            <div>{item.name}</div>
                                            <div>{item.desc}</div>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div className="stilly"></div>
                                    </div>
                                    <div className="center gname">
                                        <a href={item.link}>View Project</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="center">
                <div className="still"></div>
            </div>
        </div>
    )
}