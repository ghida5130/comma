import localFont from "next/font/local";

export const myFont = localFont({
    src: [
        {
            path: "../public/fonts/Freesentation-1Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-2ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-3Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-4Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-5Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-6SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-7Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-8ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/Freesentation-9Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-myfont", // CSS 변수로 지정
});
