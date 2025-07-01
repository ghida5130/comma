import { IntroduceDataType } from "@/types/type";
import IntroduceDetailT from "../atoms/text/introduceDetailT";

export default function CapabilityCard({ title, detail, content }: IntroduceDataType) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">▮ {title}</h3>
            {detail ? <p className="text-lg ml-9 font-semibold text-[#e4e4e4]">{detail}</p> : null}
            <ul className="ml-5 flex flex-col gap-2 my-2 text-[#e4e4e4]">
                {content.map((data) => (
                    <li key={data} className="text-lg">
                        <IntroduceDetailT data={data} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
