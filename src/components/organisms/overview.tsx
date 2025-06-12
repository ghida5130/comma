import styles from "@/styles/me.module.scss";
import LinkBtn from "@/components/atoms/button/linkBtn";
import tistoryIcon from "@/public/icons/me/tistory.svg";
import githubIcon from "@/public/icons/me/github.svg";

export default function Overview() {
    return (
        <section className="py-[100px] flex flex-col items-center gap-14 w-full">
            <div className={`p-2.5 text-center text-6xl font-bold max-md:text-5xl max-sm:text-4xl ${styles.introduce}`}>
                <h1 className="sr-only">프론트엔드 개발자 박성수 포트폴리오</h1>
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
                {/* 더 나은 사용자 경험을 고민하며, 최신 기술을 빠르게 습득해 지속적으로 성장하고자 노력합니다. */}
                유연한 팀워크와 커뮤니케이션, 더 나은 UX·DX를 위해 고민하고 노력하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
                <LinkBtn url="https://cstelladev.tistory.com/" title="Tistory" logo={tistoryIcon} />
                <LinkBtn url="https://github.com/ghida5130" title="Github" logo={githubIcon} />
            </div>
        </section>
    );
}
