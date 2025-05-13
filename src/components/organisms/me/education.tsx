import Image from "next/image";
import graduationIcon from "@/public/icons/me/graduation2.svg";

export default function Education() {
    return (
        <section className="flex flex-wrap gap-3">
            <div className="w-[300px] max-sm:w-full flex flex-col items-center p-6 gap-1 rounded-2xl text-xl bg-secondary">
                <Image src={graduationIcon} alt="" width={60} />
                <p className="text-sm">2020.03 ~ 2024.02</p>
                <p>대구대학교</p>
                <p>전기공학전공</p>
            </div>
            <div className="w-[300px] max-sm:w-full flex flex-col items-center p-6 gap-1 rounded-2xl text-xl bg-secondary">
                <Image src={graduationIcon} alt="" width={60} />
                <p className="text-sm">2020.03 ~ 2024.02</p>
                <p>대구대학교</p>
                <p>AI응용 복수전공</p>
            </div>
        </section>
    );
}
