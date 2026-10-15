import { DetailDataType } from "@/types/type";

export const onmaumDetail: DetailDataType = {
    title: "On마음",
    develop: "팀 프로젝트 · 프론트엔드 / 데이터 처리",
    description: "전력 사용 패턴으로 1인 가구의 이상 징후를 확인하는 돌봄 서비스",
    skills: ["react", "ts", "tanstack", "tailwind", "sse", "webPush", "pwa", "pyarrow", "spark", "hdfs", "tailscale"],
    motivation:
        "독거노인과 1인 가구의 전력 사용 데이터를 가전별로 분해하는 NILM 기술을 활용해 생활 패턴 변화와 위험 가전의 이상 사용 징후를 확인하는 서비스입니다. 고령층이 상태를 쉽게 알릴 수 있는 화면과, 제한된 장비에서 학습 데이터를 처리할 수 있는 환경을 함께 개선했습니다.",
    overview: [
        "가전별 전력 사용 패턴과 이상 징후 정보를 복지담당자·서비스 대상자에게 제공",
        "외출·귀가 상태 변경, 처리 중 안내와 서버 반영 결과 확인",
        "대규모 전력 시계열 데이터 정제·집계 및 HDFS·Spark 분산 처리",
    ],
    learned: [
        {
            title: "외출·귀가 조작을 단순화하고 처리 결과를 명확히 안내",
            content: [
                "시간 선택 후 시작 버튼을 누르던 흐름을 홈의 **버튼 한 번으로 상태를 변경**하도록 단순화하고, 현재 상태에 따라 ‘외출하기’와 ‘집에 돌아왔어요’를 표시했습니다.",
                "주요 버튼에 **최소 64px의 터치 영역**과 눌림 효과를 적용했습니다. TanStack Query의 isPending으로 ‘처리 중…’ 안내와 버튼 비활성화를 연결해 **처리 중 반복 입력과 중복 요청을 제한**했습니다.",
                "mutateAsync()로 요청 완료를 기다리고 invalidateQueries()로 서버 상태를 다시 조회한 뒤 완료 안내를 표시했습니다. 현재 상태와 처리 결과를 하단의 일정한 위치에서 확인하도록 구성해 **실제 반영 전에 완료됐다고 오해하는 상황을 줄였습니다.**",
            ],
        },
        {
            title: "저장공간 한계에 맞춰 데이터 처리·이동 방식 재설계",
            content: [
                "약 520GB의 압축 데이터가 해제 시 **약 5.8TB**로 늘어났지만, 개별 노트북의 가용 저장공간은 500GB 이하였습니다. 전체 해제와 변환을 동시에 진행하면 디스크 입출력 경합도 발생했습니다.",
                "필요한 데이터만 순차적으로 읽는 스트리밍 파이프라인에 **PyArrow 배치 처리·16개 프로세스 병렬화·내부 스레드 수 제한**을 적용했습니다. 32,395개 CSV의 최초 전체 변환을 **약 2시간 20분**에 수행했습니다.",
                "AI 학습에 필요한 해상도를 검토해 **30Hz 데이터를 1Hz로 집계**하고, 결측·오류·시간 연속성 정보를 별도로 보존했습니다. 그 결과 최종 데이터는 **36.60GB로 약 99.4% 축소**됐고, 소규모 파일 병합으로 파일 수는 약 96.8% 줄었습니다.",
                "오류 데이터를 격리·보정해 최종 미해결 오류 0건을 확인했습니다. 전체 변환과 별도로 Spark에서 **약 28억 행의 정제 데이터 검증을 4분 25초**에 수행했습니다.",
            ],
        },
        {
            title: "네트워크가 바뀌는 노트북 분산 클러스터의 연결 안정화",
            content: [
                "이동이 잦은 노트북 5대의 HDFS·Spark 클러스터에 **Tailscale 고정 가상 IP**를 도입했습니다. 동일 네트워크의 로컬 통신을 활용하면서 네트워크 변경 후에도 재접속할 수 있도록 구성했습니다.",
                "특정 작업 노드의 지연을 CPU·디스크·네트워크 지표로 비교하고 주소 설정과 통신 문제를 수정했습니다.",
                "**4개 작업 노드에 1,045개 Parquet 파일**을 분산 저장하고, 유실 블록과 복제 부족 블록 모두 0건을 확인했습니다.",
            ],
        },
    ],
    images: [
        {
            title: "On마음 - 대표 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/onMaeum/onMaeum_main.webp",
        },
        {
            title: "On마음 - 외출 중 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/onMaeum/onMaeum_1.webp",
        },
        {
            title: "On마음 - 재실 중 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/onMaeum/onMaeum_2.webp",
        },
    ],
    materialsPending: ["외출·귀가 동작 영상", "공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위", "데이터 변환·검증 결과 자료"],
};
