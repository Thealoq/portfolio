import img from "../assets/av.png"
import { AiFillInstagram, AiFillGithub, AiFillYoutube } from "react-icons/ai"
import config from "../config.json"
export default function BioPage() {
    return (
        <div>
            <div className="bg-color"></div>
            <div className="center repo-center">
                <div className="avatar">
                    <div className="all-item">
                        <div><img src={img} alt="avatar" /></div>
                        <div className="text-all">
                            <div className="text-align">
                                <div className="title-log">{config.name}</div>
                                <div className="desc-log">{config.job}</div>
                            </div>
                            <div className="socialmedia-logos">
                                <div>
                                    <a href={config.instagram}> <AiFillInstagram size={24} /></a>
                                </div>
                                <div>
                                    <a href={config.github}><AiFillGithub size={24} /></a>
                                </div>
                                <div>
                                    <a href={config.youtube}><AiFillYoutube size={24} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="home-button">Visit Repo</div>
            </div>
            <div className="center ">
                <div className="about-text repo-center">
                    <div className="about-text">
                        <span>About me</span>
                    </div>
                    <div className="desc">
                        <p>
                            {config.desc}
                        </p>
                    </div>
                </div>
            </div>
             <div className="center ">
                <div className="bio-card center repo-center">
                        <div className="bio-cards">
                            <div className="boxiy">
                                <div className="title-bio">
                                    Location
                                </div>
                                <div className="title-desc">
                                    {config.Location}
                                </div>
                            </div>
                            <div className="boxiy">
                                <div className="title-bio">
                                    Job
                                </div>
                                <div className="title-desc">
                                    {config["bio-job"]}
                                </div>
                            </div>
                            <div className="boxiy">
                                <div className="title-bio">
                                    Email
                                </div>
                                <div className="title-desc">
                                    {config.email}
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            <div className="center">
                <div className="still"></div>
            </div>
        </div>
    )
}