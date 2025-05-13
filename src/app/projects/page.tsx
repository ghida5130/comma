"use client";

import Project from "@/components/organisms/projects/project";
import ProjectModal from "@/components/templates/projectModal";
import { myProjectData } from "@/data/projectData";

import { AnimatePresence, motion } from "framer-motion";

// redux
import { useAppSelector } from "@/lib/hooks";

export default function Projects() {
    const { isActive } = useAppSelector((state) => state.modal);
    return (
        <div className="w-[90%] mx-auto flex flex-col gap-8 relative md:w-[80%] xl:w-[70%]">
            <div className="w-full grid gap-[25px] grid-cols-1 xl:grid-cols-2">
                {Object.entries(myProjectData).map(([key, data]) => (
                    <Project key={data.title} objKey={key} data={data} />
                ))}
            </div>
            <AnimatePresence>{isActive && <ProjectModal />}</AnimatePresence>
        </div>
    );
}
