"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration: number = 2, decimals: number = 1) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const startTime = Date.now();
        const timer = setInterval(() => {
            const progress = Math.min((Date.now() - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Number((eased * end).toFixed(decimals)));
            if (progress >= 1) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [started, end, duration, decimals]);

    return { count, ref };
}

export default function HeroSection() {
    const [heading, setHeading] = useState(182);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Parallax transforms
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const hudOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeading((prev) => {
                const delta = (Math.random() - 0.5) * 1.5;
                return Math.round((prev + delta) * 10) / 10;
            });
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                background: "#000",
            }}
        >
            {/* Video Background — parallax */}
            <motion.div style={{ y: videoY, position: "absolute", inset: "-10% 0", width: "100%", height: "120%" }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover" as const,
                        opacity: 0.5,
                    }}
                >
                    <source src="/videos/jet.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Gradient overlays */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.7) 100%)",
                }}
            />

            {/* ─── Top Strip: LIVE FEED (left) + Commander (right) ─── */}
            <motion.div
                className="absolute top-[80px] md:top-[100px] left-0 right-0 z-20 flex flex-col md:flex-row items-start justify-between px-8 md:px-12 pointer-events-none md:pointer-events-auto"
                style={{
                    opacity: hudOpacity,
                }}
            >
                {/* LIVE FEED */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-4 md:mb-0 pointer-events-auto"
                >
                    <div
                        className="glass"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "8px 16px",
                            borderRadius: "9999px",
                        }}
                    >
                        <div
                            className="animate-pulse-dot"
                            style={{ width: "6px", height: "6px", background: "#4ade80", borderRadius: "50%" }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "10px",
                                letterSpacing: "0.35em",
                                color: "rgba(229,229,229,0.8)",
                            }}
                        >
                            LIVE FEED
                        </span>
                    </div>
                </motion.div>

                {/* Commander Badge */}
                <motion.div
                    initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="hidden md:block pointer-events-auto"
                >
                    <div
                        className="glass"
                        style={{ padding: "16px 24px", borderRadius: "16px", textAlign: "right" as const }}
                    >
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(160,160,160,0.5)", textTransform: "uppercase" as const, marginBottom: "6px" }}>
                            Commander
                        </p>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                            ADM. R. SINCLAIR
                        </p>
                        <p style={{ fontSize: "12px", color: "rgba(160,160,160,0.4)", marginTop: "4px" }}>
                            Strategic Command Division
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* ─── Center Content: Main Typography ─── */}
            <motion.div
                className="absolute inset-0 z-15 flex flex-col items-center justify-center text-center px-8 md:px-0"
                style={{
                    y: textY,
                    opacity: textOpacity,
                }}
            >
                {/* Eyebrow Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="section-label"
                    style={{ marginBottom: "16px" }}
                >
                    AEGIS Defense Systems
                </motion.p>

                {/* Main Headline — word-by-word stagger */}
                <motion.h1
                    className="text-gradient"
                    style={{
                        fontSize: "clamp(40px, 9vw, 120px)",
                        fontWeight: 700,
                        lineHeight: 0.9,
                        letterSpacing: "-0.04em",
                        fontFamily: "var(--font-mono)",
                        textShadow: "0 4px 40px rgba(0,0,0,0.7)",
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 60, rotateX: 45 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: "block" }}
                    >
                        DEFENSE
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 60, rotateX: 45 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: "block" }}
                    >
                        REDEFINED
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        marginTop: "24px",
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: "rgba(210,210,210,0.75)",
                        letterSpacing: "0.04em",
                        textShadow: "0 2px 20px rgba(0,0,0,0.6)",
                    }}
                    className="max-w-[320px] md:max-w-[440px] text-lg"
                >
                    Integrated Air. Land. Sea. Tactical Systems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                    style={{
                        marginTop: "40px",
                        display: "flex",
                        gap: "16px",
                        flexWrap: "wrap" as const,
                        justifyContent: "center",
                    }}
                    className="flex-col md:flex-row w-full md:w-auto px-8 md:px-0"
                >
                    <motion.a
                        href="#systems"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,122,255,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            display: "inline-block",
                            background: "#3B9EFF",
                            color: "#fff",
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.25em",
                            padding: "16px 40px",
                            borderRadius: "9999px",
                            textDecoration: "none",
                        }}
                    >
                        INITIATE
                    </motion.a>
                    <motion.a
                        href="#engineering"
                        className="glass"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            display: "inline-block",
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.25em",
                            padding: "16px 40px",
                            borderRadius: "9999px",
                            textDecoration: "none",
                        }}
                    >
                        SYSTEMS
                    </motion.a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    style={{
                        marginTop: "32px",
                    }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12"
                >
                    {[
                        { value: 47, suffix: "+", label: "ALLIED NATIONS" },
                        { value: 99.7, suffix: "%", label: "UPTIME" },
                        { value: 340, suffix: "k", label: "UNITS DEPLOYED" },
                    ].map((stat) => {
                        const counter = useCounter(stat.value, 2.5, stat.value % 1 === 0 ? 0 : 1);
                        return (
                            <div key={stat.label} ref={counter.ref} style={{ textAlign: "center" as const }}>
                                <p
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        color: "#fff",
                                        lineHeight: 1,
                                        fontVariantNumeric: "tabular-nums",
                                    }}
                                    className="md:text-[28px]"
                                >
                                    {counter.count}{stat.suffix}
                                </p>
                                <p
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "9px",
                                        letterSpacing: "0.3em",
                                        color: "rgba(160,160,160,0.4)",
                                        marginTop: "8px",
                                    }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* ─── Bottom Left: Floating Tag ─── */}
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 hidden md:block"
                style={{ opacity: hudOpacity as unknown as number }}
            >
                <div
                    className="glass"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 20px",
                        borderRadius: "9999px",
                    }}
                >
                    <div
                        className="animate-pulse-blue"
                        style={{ width: "8px", height: "8px", background: "#3B9EFF", borderRadius: "50%" }}
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            color: "rgba(229,229,229,0.6)",
                        }}
                    >
                        INTEGRATED DEFENSE SYSTEMS
                    </span>
                </div>
            </motion.div>

            {/* ─── Bottom Right: Telemetry Card ─── */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 hidden md:block" // Hidden on mobile
            >
                <motion.div
                    className="glass"
                    whileHover={{ scale: 1.03, borderColor: "rgba(0,122,255,0.2)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{
                        borderRadius: "20px",
                        padding: "28px",
                        width: "200px",
                        textAlign: "center" as const,
                    }}
                >
                    {/* Compass SVG */}
                    <div style={{ position: "relative", width: "72px", height: "72px", margin: "0 auto 16px" }}>
                        <svg viewBox="0 0 72 72" style={{ width: "100%", height: "100%" }} className="animate-spin-slow">
                            <circle cx="36" cy="36" r="32" fill="none" stroke="rgba(0,122,255,0.2)" strokeWidth="1" />
                            <circle cx="36" cy="36" r="26" fill="none" stroke="rgba(0,122,255,0.1)" strokeWidth="0.5" strokeDasharray="4 4" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                                <line
                                    key={deg}
                                    x1="36" y1="6"
                                    x2="36" y2={deg % 90 === 0 ? "12" : "9"}
                                    stroke={deg % 90 === 0 ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.15)"}
                                    strokeWidth={deg % 90 === 0 ? "1.5" : "0.75"}
                                    transform={`rotate(${deg} 36 36)`}
                                />
                            ))}
                        </svg>
                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "6px", height: "6px", background: "#3B9EFF", borderRadius: "50%", boxShadow: "0 0 8px rgba(0,122,255,0.6)" }} />
                        </div>
                    </div>

                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "28px", fontWeight: 700, color: "#fff", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
                        {heading.toFixed(1)}°
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.4em", color: "rgba(160,160,160,0.4)", marginTop: "6px" }}>
                        HEADING
                    </p>

                    <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, color: "#3B9EFF", letterSpacing: "0.25em" }}>
                            ● LOCKED
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* ─── Scroll indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <motion.span
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        color: "rgba(160,160,160,0.3)",
                    }}
                >
                    SCROLL
                </motion.span>
                <motion.div
                    animate={{ height: ["32px", "24px", "32px"], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        width: "1px",
                        background: "linear-gradient(to bottom, rgba(0,122,255,0.4), transparent)",
                    }}
                />
            </motion.div>
        </section>
    );
}
