"use client";

import { useEffect, useRef } from "react";

export default function UniverseBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<{ x: number; y: number; size: number; flicker: number }[]>([]);
    const offsetRef = useRef<number>(200);
    const fadeRef = useRef<number>(0); // 별 fade-in

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = window.innerWidth;
        let h = window.innerHeight;

        const setCanvasSize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // 별 생성 (밀도)
        const makeStars = (count: number) => {
            const out = [];
            for (let i = 0; i < count; i++) {
                out.push({
                    x: Math.random() * 3000 - 1000, // 넓은 범위에 생성 (움직일 수 있게)
                    y: Math.random() * h, // 화면 높이에 맞춰 생성
                    size: Math.random() * 0.5 + 0.5,
                    flicker: Math.random() * Math.PI * 2,
                });
            }
            return out;
        };

        starsRef.current = makeStars(200);

        const draw = () => {
            ctx.fillStyle = "#080b14";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const stars = starsRef.current;
            const offsetX = offsetRef.current;
            const fade = Math.min(fadeRef.current, 1);

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                // 좌우로 천천히 이동하는 효과
                const x = ((s.x + offsetX) % (w + 1000)) - 500;
                const y = s.y;

                // 반짝임 (sine 기반)
                s.flicker += 0.02;
                const baseAlpha = 0.4 + Math.sin(s.flicker) * 0.3;
                const alpha = baseAlpha * fade;

                ctx.beginPath();
                ctx.arc(x, y, s.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }
        };

        const tick = () => {
            if (fadeRef.current < 1) {
                fadeRef.current += 0.01; // 느릴수록 서서히 나타남
            }
            offsetRef.current += 0.1; // 하늘이 천천히 흐르는 속도
            draw();
            requestAnimationFrame(tick);
        };

        tick();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1] w-full h-full" />;
}
