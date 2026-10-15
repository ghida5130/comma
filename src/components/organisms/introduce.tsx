"use client";

import IntroduceDetailT from "../atoms/text/introduceDetailT";
import styles from "@/styles/content.module.css";

export default function Introduce() {
    return (
        <section>
            <div className={styles.introduceSummary}>
                <h3 className={styles.copyHeading}>팀 개발 환경과 사용자 경험을 함께 개선하는 개발자가 되고 싶습니다.</h3>
                <p className={styles.detailText}>
                    팀이 기능을 쉽게 검증하고 개선할 수 있어야 사용자의 불편에도 빠르게 대응할 수 있다고 생각합니다.
                </p>
            </div>
            <ul className={`${styles.detailList} ${styles.introduceEvidence}`}>
                <li>
                    <IntroduceDetailT data="팀의 개발 대기를 줄이기 위해 **빵범대·Lumos에서 MSW를 활용**했습니다. 백엔드 구현 전 화면·API 연동을 진행하고, 빵범대에서는 정상 응답과 인증·서버 오류를 재현해 **화면과 오류 처리를 검증할 수 있는 환경을 구성**했습니다." />
                </li>
                <li>
                    <IntroduceDetailT data="**코끼리공장 B2B 대시보드**에서 기업 담당자와 직접 소통하며 자료 취합과 제안 준비의 불편을 파악했습니다. **자료 검색·조회 화면을 구현하고 UI 개선을 주도**했으며, 팀이 만든 서비스는 프로젝트 종료 후 기업 내부 사용으로 이어졌습니다." />
                </li>
            </ul>
        </section>
    );
}
