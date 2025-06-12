"use client";

import Image from "next/image";
import ModalBackDrop from "../atoms/layout/modalBackDrop";
import CloseModalBtn from "../atoms/button/closeModalBtn";
import { useModal } from "@/hooks/useModal";
import { motion } from "framer-motion";
import projectDetailData from "@/data/projectDetailData";

import testImage from "@/public/test/test.jpg";

import { DetailDataType } from "@/types/type";
import { useState } from "react";
import { useImageModal } from "@/hooks/useImageModal";
import ImageModal from "./imageModal";
import ModalCategoryT from "../atoms/text/modalCategoryT";
import ModalContentT from "../atoms/text/modalContentT";
import ModalDetailDataTitleT from "../atoms/text/modalDetailDataTitleT";
import SkillIcon from "../atoms/icons/skillIcon";
import ModalLinkBtn from "../atoms/button/modalLinkBtn";

export default function ProjectModal() {
    const { modalName } = useModal();
    const currentProject: DetailDataType = projectDetailData[modalName] ?? null;
    // const currentProject = null;
    const { isImageModalActive, setImageModalUrl, showImageModal } = useImageModal();

    return (
        <ModalBackDrop>
            <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full xl:w-1/2 md:w-3/4 h-full md:h-[80%] bg-[#000000] relative rounded-2xl overflow-hidden shadow-xl shadow-[rgba(0,0,0,0.8)]"
            >
                {currentProject ? (
                    <>
                        <div className="px-5 py-3 absolute top-0 bg-[black] w-full">
                            <h3 className="text-2xl font-semibold">
                                {currentProject.title} {currentProject.develop}
                            </h3>
                            <p className="">{currentProject.description}</p>
                        </div>
                        <div className="bg-[#cccccc] h-full pt-20">
                            <div className="h-full w-[95%] mx-auto overflow-auto scrollbar-hide p-5 text-black flex flex-col gap-10">
                                <section>
                                    <ModalCategoryT>개발 동기</ModalCategoryT>
                                    <ModalContentT data={currentProject.motivation} />
                                </section>
                                <section>
                                    <ModalCategoryT>기능 요약</ModalCategoryT>
                                    <div className="flex flex-wrap gap-3 mb-2">
                                        {currentProject.skills.map((val) => (
                                            <SkillIcon key={val} type={val} />
                                        ))}
                                    </div>
                                    {currentProject.overview.map((val, idx) => (
                                        <ModalContentT key={idx} data={val} />
                                    ))}
                                </section>
                                <section>
                                    <ModalCategoryT>기술 상세</ModalCategoryT>
                                    {currentProject.learned.map(({ title, content, link }, i) => (
                                        <div key={title}>
                                            <ModalDetailDataTitleT>{title}</ModalDetailDataTitleT>
                                            {content.map((data, j) => (
                                                <ModalContentT key={"project detail content" + i + j} data={data} />
                                            ))}
                                            {link
                                                ? link.map((data) => <ModalLinkBtn key={data.title} data={data} />)
                                                : null}
                                        </div>
                                    ))}
                                </section>
                                <section>
                                    <ModalCategoryT>스크린샷</ModalCategoryT>
                                    <div className="grid gap-[15px] grid-cols-3">
                                        {currentProject.images.map(({ title, content }) => (
                                            <button
                                                key={title}
                                                className="shadow-lg shadow-[#3d3d3d] overflow-hidden rounded-xl relative h-[150px] bg-white w-full"
                                                onClick={() => {
                                                    showImageModal(title);
                                                    setImageModalUrl(content);
                                                }}
                                            >
                                                <Image
                                                    src={content}
                                                    alt={title + " image"}
                                                    width={350}
                                                    height={0}
                                                    className="object-cover h-[150px]"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </>
                ) : null}
                <CloseModalBtn />
            </motion.div>
            {isImageModalActive && <ImageModal />}
        </ModalBackDrop>
    );
}
