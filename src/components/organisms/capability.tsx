"use client";

import { useState } from "react";
import ExtendBtn from "../atoms/button/extendBtn";
import introduceData from "@/data/introduceData";
import { prizeData } from "@/data/prizeData";
import Prize from "../molecules/activityCards/prize";
import CapabilityCard from "../molecules/capabilityCard";

export default function Capability() {
    const [isOpenPrize, setIsOpenPrize] = useState(false);
    const data0 = introduceData[0];
    const data2 = introduceData[2];
    const data4 = introduceData[4];

    return (
        <section className="flex flex-col gap-10 ml-4">
            <CapabilityCard title={data4.title} detail={data4.detail} content={data4.content} />
            <CapabilityCard title={data2.title} detail={data2.detail} content={data2.content} />
            <div>
                <CapabilityCard title={data0.title} detail={data0.detail} content={data0.content} />
                <ExtendBtn name="수상 내역" state={isOpenPrize} setState={setIsOpenPrize} />
                {isOpenPrize ? (
                    <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {prizeData.map((data) => (
                            <Prize key={data.title} title={data.title} detail={data.detail} award={data.award} />
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    );
}
