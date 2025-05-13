"use client";

import useScrollToTarget from "@/hooks/useScrollToTarget";

export default function Test() {
    const { targetRef, scrollToTarget, isTarget } = useScrollToTarget("section2");
    const firstSection = useScrollToTarget("section1");
    const secondSection = useScrollToTarget("section2");
    const thirdSection = useScrollToTarget("section3");

    return (
        <>
            <button onClick={firstSection.scrollToTarget}>Go to Section 1</button>
            <button onClick={secondSection.scrollToTarget}>Go to Section 2</button>
            <button onClick={thirdSection.scrollToTarget}>Go to Section 3</button>
            <div id="section0" style={{ height: "100vh", background: "#6b6b6b" }}>
                Section 1
            </div>

            <div
                id="section1"
                ref={firstSection.targetRef}
                style={{
                    height: "100vh",
                    background: firstSection.isTarget ? "#a966c9" : "#ccc",
                    transition: "background 0.3s",
                }}
            >
                Section 1
            </div>

            <div
                id="section2"
                ref={secondSection.targetRef}
                style={{
                    height: "100vh",
                    background: secondSection.isTarget ? "#cfc" : "#ccc",
                    transition: "background 0.3s",
                }}
            >
                Section 2 (Watch for color change)
            </div>

            <div
                id="section3"
                ref={thirdSection.targetRef}
                style={{
                    height: "100vh",
                    background: thirdSection.isTarget ? "#48bcc0" : "#ccc",
                    transition: "background 0.3s",
                }}
            >
                Section 2 (Watch for color change)
            </div>
        </>
    );
}
