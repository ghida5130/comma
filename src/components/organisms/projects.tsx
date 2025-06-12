"use client";

import ProjectCard from "@/components/molecules/projectCard";
import ProjectModal from "@/components/templates/projectModal";
import { myProjectData } from "@/data/projectData";
import { useAppSelector } from "@/lib/hooks";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
    const { isActive } = useAppSelector((state) => state.modal);
    return (
        <>
            <section className="w-full grid gap-[25px] grid-cols-1 lg:grid-cols-2">
                {Object.entries(myProjectData).map(([key, data]) => (
                    <ProjectCard key={data.title} objKey={key} data={data} />
                ))}
            </section>
            <AnimatePresence>{isActive && <ProjectModal />}</AnimatePresence>
        </>
    );
}
