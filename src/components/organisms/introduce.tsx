import styles from "@/styles/me.module.scss";
import LinkBtn from "@/components/atoms/button/linkBtn";
import tistoryIcon from "@/public/icons/me/tistory.svg";
import githubIcon from "@/public/icons/github.svg";

export default function Introduce() {
    return (
        <section className="py-[100px] flex flex-col items-center gap-14 w-full">
            <div className={`p-2.5 text-center text-6xl font-bold max-md:text-5xl max-sm:text-4xl ${styles.introduce}`}>
                <p>안녕하세요.</p>
                <p>프론트엔드</p>
                <p>개발자</p>
                <p>박성수</p>
                <p>입니다.</p>
            </div>
            <p
                className="px-[80px] text-[20px] font-semibold text-[#aaaaaa]
                max-md:px-[40px] max-sm:px-0"
            >
                더 나은 사용자 경험을 고민하며, 최신 기술을 빠르게 습득해 지속적으로 성장하고자 노력합니다.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
                <LinkBtn url="https://cstelladev.tistory.com/" title="Tistory" logo={tistoryIcon} />
                <LinkBtn url="https://github.com/ghida5130" title="Github" logo={githubIcon} />
            </div>
        </section>
    );
}
