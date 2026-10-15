"use client";

import CapabilityCard from "../molecules/capabilityCard";
import styles from "@/styles/content.module.css";

export default function Capability() {
    return (
        <section className={styles.rows}>
            <CapabilityCard
                title="저장공간 한계를 해결한 데이터 처리 설계"
                detail="On마음 · 전력 데이터 파이프라인"
                summary="압축 해제 시 약 **5.8TB**로 늘어나는 데이터를 **36.60GB로 축소**해, 가용 저장공간이 500GB 이하인 노트북에서도 학습 데이터를 준비할 수 있게 했습니다."
                content={[
                    "원본을 한꺼번에 압축 해제하는 대신 **필요한 데이터만 순차적으로 읽고 변환**하도록 처리 흐름을 바꿨습니다.",
                    "학습에 필요한 해상도를 검토해 **30Hz → 1Hz 집계**를 적용하고, 결측·오류·시간 연속성 정보는 별도로 보존했습니다.",
                ]}
            />
            <CapabilityCard
                title="측정으로 병목을 찾고 화면 성능 개선"
                detail="빵범대 · 상세 페이지 최적화"
                summary="동일 상세 페이지의 Lighthouse 측정에서 **LCP 2.8초 → 2.1초** 개선을 확인했고, 렌더링·폰트·이미지 최적화로 **전체 전송량을 약 37% 줄였습니다.**"
                content={[
                    "느린 API 하나가 화면 전체를 지연시키는 구조를 찾아, **데이터가 준비된 영역부터 표시**하도록 바꿨습니다.",
                    "전체 전송량의 **약 55.7%를 차지하던 폰트**를 서브셋으로 나누고, 리뷰·추천 이미지는 필요한 시점에 불러오도록 조정했습니다.",
                ]}
            />
        </section>
    );
}
