"use client";

import IntroduceCard from "../molecules/introduceCard";
import introduceData from "@/data/introduceData";

export default function Introduce() {
    const data3 = introduceData[3];
    const data5 = introduceData[5];

    return (
        <section className="flex flex-col gap-10 ml-4">
            <IntroduceCard title={data3.title} detail={data3.detail} content={data3.content} />
            <IntroduceCard title={data5.title} detail={data5.detail} content={data5.content} />
        </section>
    );
}
