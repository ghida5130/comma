import { IntroduceDataType } from "@/types/type";
import IntroduceDetailT from "../atoms/text/introduceDetailT";

export default function IntroduceCard({ title, detail, content }: IntroduceDataType) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-3xl">▮ {title}</h3>
            <p className="text-lg ml-9 font-semibold">{detail}</p>
            <ul className="ml-5 flex flex-col gap-2 my-2">
                {content.map((data) => (
                    <li key={data} className="text-lg">
                        <IntroduceDetailT data={data} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
