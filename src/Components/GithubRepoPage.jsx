import React, { useEffect, useState } from 'react';
import { AiOutlineFork, AiFillStar } from "react-icons/ai"

import config from "../config.json"
export default function GithubRepoPage() {
    const [User, setData] = useState();
    useEffect(() => {
        fetch("https://api.github.com/users/"+config.githubname+"/repos")
            .then(response => response.json()
            )
            .then(data => {
                setData(data);
            });
    }, []);
    console.log();
    return (
        <div>
            <div className="center">
                <div className="about-text">
                    <div className="about-text">
                        <span>Github Projects</span>
                    </div>
                    <div className="desc">
                        <p>
                            Total {User?.length} Repo
                        </p>
                    </div>
                </div>
            </div>
            <div className='repos'>
                {
                    User?.map((item, index) => {
                        return (
                            <div key={index} className='repo'>
                                <div className="repo-with">
                                    <div className='github-avatar'>
                                        <div>
                                            <img src={item.owner.avatar_url} />
                                        </div>
                                        <div className='text-repo'>
                                            <div className='title-github'>
                                                {item.name}
                                            </div>
                                            <div className='desc-github'>
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='center'>
                                            <p>{item.stargazers_count} <AiFillStar/></p>
                                        </div>
                                        <div className='center'>
                                            <p>{item.forks_count} <AiOutlineFork/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}