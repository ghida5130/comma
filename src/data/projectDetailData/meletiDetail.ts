import { DetailDataType } from "@/types/type";

export const meletiDetail: DetailDataType = {
    title: "Meλeti",
    develop: "(1인 개발, 제작중중)",
    description: "모바일 독서 기록 사이트",
    skills: ["next", "ts", "scss", "firebase", "tanstack", "three"],
    motivation:
        "책에서 봤던 인상깊은 표현이나 문구들이 기록되고 공유되면 좋겠다는 생각에서 만들게 되었습니다. 긴 텀을 두고 읽은 책이나 완독한지 오래된 책은 언제 읽었는지나 읽으면서 느낀점, 인상깊은 내용들을 잊어버리기 쉽다는게 아쉬워서 이를 기록하고 공유할수 있는 플랫폼이 있으면 좋겠다고 생각했습니다.",
    overview: [
        "베스트셀러 등의 도서 정보 조회 및 검색 기능",
        "개인 독서 기록 및 단어/문구 공유 커뮤니티 (구현중)",
        "Next.js와 TypeScript를 이용하여 개발",
        "Tanstack-Query와 Firebase firestore를 활용하여 API 요청 및 유저 데이터 처리",
    ],
    learned: [
        {
            title: "Next.js 및 SEO",
            content:
                "Next.js의 SSR을 활용하여 SEO를 학습하고 적용했으며 시맨틱 태그와 메타데이터, JSON-LD 등 SEO에 중요한 요소들을 학습했습니다.",
        },
        {
            title: "Three.js를 통한 도서 3D 구현",
            content:
                "책을 구매하기전 입체로 책을 돌려보며 두께나 크기를 짐작할할 수 있으면 좋겠다는 생각에서 Three.js를 활용했습니다. 모양과 질감을 정의하고 이미지를 덮어 씌우거나 조명을 통한 그림자를 만드는 Three.js의 기본 사용법을 익힐 수 있었습니다.",
        },
        {
            title: "Tanstack Query와 Firebase firestore",
            content:
                "알라딘 API를 통해 도서데이터를 가져왔고 Tanstack Query로 API 요청을 관리했습니다. 반복작성되는 코드를 많이 줄이고 캐싱 및 리페치 등의 기능들을 상황에 맞게 빠르게 적용할 수 있어 편리했습니다. 유저 데이터는 Firebase의 Firestore DB에서 관리했습니다.",
        },
    ],
    images: [
        {
            title: "meleti - 메인 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_1.webp",
        },
        {
            title: "meleti - 도서 상세 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_2.webp",
        },
        {
            title: "meleti - 마이페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_3.webp",
        },
        {
            title: "meleti - 도서 상세 페이지 : 3D로 책 둘러보기 (모바일)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_4.webp",
        },
    ],
};
