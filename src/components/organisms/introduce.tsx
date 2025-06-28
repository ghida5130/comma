"use client";

import { useState } from "react";
import ExtendBtn from "../atoms/button/extendBtn";
import IntroduceCard from "../molecules/introduceCard";
import introduceData from "@/data/introduceData";
import { prizeData } from "@/data/prizeData";
import Prize from "../molecules/activityCards/prize";
import LinkBtn from "../atoms/button/linkBtn";

export default function Introduce() {
    const [isOpenPrize, setIsOpenPrize] = useState(false);
    const data0 = introduceData[0];
    // const data1 = introduceData[1];
    const data2 = introduceData[2];

    return (
        <section className="flex flex-col gap-10 ml-4">
            <IntroduceCard title={data2.title} detail={data2.detail} content={data2.content} />
            <div>
                <IntroduceCard title={data0.title} detail={data0.detail} content={data0.content} />
                <ExtendBtn name="수상 내역" state={isOpenPrize} setState={setIsOpenPrize} />
                {isOpenPrize ? (
                    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {prizeData.map((data) => (
                            <Prize key={data.title} title={data.title} detail={data.detail} award={data.award} />
                        ))}
                    </div>
                ) : null}
            </div>
            {/* <IntroduceCard title={data1.title} detail={data1.detail} content={data1.content} /> */}
        </section>
    );
}
