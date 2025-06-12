"use client";

import DetailBtn from "@/components/atoms/button/detailBtn";
import ProjectGithubBtn from "@/components/atoms/button/projectGithubBtn";
import ProjectLinkBtn from "@/components/atoms/button/projectLinkBtn";
import SkillIcon from "@/components/atoms/icons/skillIcon";
import { ProjectDataType } from "@/types/type";

interface ProjectType {
    objKey: string;
    data: ProjectDataType;
}

export default function ProjectCard({ objKey, data }: ProjectType) {
    return (
        <div className="p-5 rounded-lg flex flex-col gap-2 relative bg-secondary shadow-lg shadow-black">
            <h3 className="text-3xl font-semibold">
                {data.title}
                <span className="text-base font-light"> {data.develop}</span>
            </h3>

            <p className="text-lg">{data.description}</p>
            <div className="flex flex-wrap gap-3">
                {data.skills.map((val) => (
                    <SkillIcon key={val} type={val} />
                ))}
            </div>
            <ul className="space-y-1 mt-5 mb-auto">
                {data.introduce.map((val) => (
                    <li key={val}>• {val}</li>
                ))}
            </ul>
            <div className="mt-3 flex flex-col gap-1">
                <ProjectLinkBtn href={data.link} title={data.title} />
                <ProjectGithubBtn href={data.github} title={data.title} />
                {data.serverGithub ? (
                    <ProjectGithubBtn href={data.serverGithub} title={data.title} alias="(Server)" />
                ) : null}
            </div>
            <DetailBtn innerText="자세히 보기" name={objKey} />
        </div>
    );
}
