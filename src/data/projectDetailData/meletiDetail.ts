import { DetailDataType } from "@/types/type";

export const meletiDetail: DetailDataType = {
    title: "Meλeti",
    develop: "(1인 개발, 제작중)",
    description: "모바일 독서 기록 사이트",
    skills: ["next", "ts", "scss", "firebase", "tanstack", "three"],
    motivation:
        "책에서 봤던 인상깊은 표현이나 문구들이 기록되고 공유되면 좋겠다는 생각에서 만들게 되었습니다. 긴 텀을 두고 읽은 책이나 완독한지 오래된 책은 언제 읽었는지나 읽으면서 느낀점, 인상깊은 내용들을 잊어버리기 쉽다는게 아쉬워서 이를 기록하고 공유할수 있는 플랫폼이 있으면 좋겠다고 생각했습니다.",
    overview: [
        "베스트셀러 등의 도서 정보 조회 및 검색 기능",
        "개인 독서 기록 및 단어/문구 공유 커뮤니티 (구현중)",
        "3D로 구현한 도서 미리보기 기능",
        "구글, 깃허브 로그인 기능",
    ],
    // learned: [
    //     {
    //         title: "Next.js 및 SEO",
    //         content:
    //             "Next.js의 SSR을 활용하여 SEO를 학습하고 적용했으며 시맨틱 태그와 메타데이터, JSON-LD 등 SEO에 중요한 요소들을 학습했습니다.",
    //     },
    //     {
    //         title: "Three.js를 통한 도서 3D 구현",
    //         content:
    //             "책을 구매하기전 입체로 책을 돌려보며 두께나 크기를 짐작할 수 있으면 좋겠다는 생각에서 Three.js를 활용했습니다. 모양과 질감을 정의하고 이미지를 덮어 씌우거나 조명을 통한 그림자를 만드는 Three.js의 기본 사용법을 익힐 수 있었습니다.",
    //     },
    //     {
    //         title: "Tanstack Query와 Firebase firestore",
    //         content:
    //             "알라딘 API를 통해 도서데이터를 가져왔고 Tanstack Query로 API 요청을 관리했습니다. 반복작성되는 코드를 많이 줄이고 캐싱 및 리페치 등의 기능들을 상황에 맞게 빠르게 적용할 수 있어 편리했습니다. 유저 데이터는 Firebase의 Firestore DB에서 관리했습니다.",
    //     },
    // ],
    learned: [
        {
            title: "3D 도서 구현 및 성능 최적화",
            content: [
                "Three.js로 **3D 도서 구현**",
                "canvas의 frameloop demand와 Three.js의 invalidate로 **CPU 및 GPU 부하 평균 47% 감소**",
            ],
            link: [
                { title: "Three.js로 3D 도서 구현하기", url: "https://cstelladev.tistory.com/66" },
                {
                    title: "Three.js 성능 개선하기",
                    url: "https://cstelladev.tistory.com/76",
                },
            ],
        },
        {
            title: "React-Query를 통한 도서 API 활용",
            content: ["캐싱, 리페치 전략을 적용하여 **API 호출 최적화**", "Aladin 도서 정보 API 활용"],
        },
        {
            title: "유저데이터 및 회원 관리 (구현중)",
            content: [
                "Firebase **Firestore**를 통한 **유저 개인 데이터 관리**",
                "Firebase Authentication을 통한 **oAuth 기능** 구현",
                "Next의 Route Handler를 통해 jwt를 발급하여 자체 회원 관리 및 로그인 기능 (구현중)",
            ],
        },
        {
            title: "SSR을 활용한 SEO 관리",
            content: [
                "시맨틱태그를 통한 **구조화된 데이터 학습 및 적용**",
                "**JSON-LD, 메타데이터** 적용",
                "**Open Graph** 적용으로 공유링크 미리보기 최적화 및 역링크 유도",
            ],
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
