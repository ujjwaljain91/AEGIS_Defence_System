"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const assets = [
    {
        id: "fighter",
        video: "/videos/jet.mp4",
        label: "AIR SUPERIORITY",
        subtitle: "Fifth-generation stealth capability with beyond-visual-range engagement systems.",
        stat: "MACH 2.1",
        statLabel: "MAX VELOCITY",
    },
    {
        id: "tank",
        video: "/videos/tank.mp4",
        label: "GROUND DOMINANCE",
        subtitle: "Armored battlefield supremacy with active protection and autonomous targeting.",
        stat: "120MM",
        statLabel: "MAIN ARMAMENT",
    },
    {
        id: "destroyer",
        video: "/videos/warship.mp4",
        label: "NAVAL POWER",
        subtitle: "Strategic maritime projection with integrated missile defense architecture.",
        stat: "9,200 NM",
        statLabel: "COMBAT RANGE",
    },
    {
        id: "helicopter",
        video: "/videos/helicopter.mp4",
        label: "AERIAL ASSAULT",
        subtitle: "Tactical rapid deployment with precision strike and ISR capabilities.",
        stat: "16 HELLFIRE",
        statLabel: "PAYLOAD",
    },
];

/* ─── Parallax Asset Section ─── */
function AssetPanel({ asset, index }: { asset: typeof assets[number]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);
    const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -40]);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Video — scale parallax */}
            <motion.div style={{ scale: videoScale, position: "absolute", inset: 0 }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover" as const,
                        opacity: 0.45,
                    }}
                >
                    <source src={asset.video} type="video/mp4" />
                </video>
            </motion.div>

            {/* Gradient masks */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.35) 50%, transparent 100%)", zIndex: 10 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.35) 50%, transparent 100%)", zIndex: 10 }} />

            {/* Content — translate parallax */}
            <motion.div
                style={{
                    position: "relative",
                    zIndex: 20,
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    textAlign: "center" as const,
                    padding: "24px",
                    y: contentY,
                }}
            >
                {/* Section Number */}
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.5em",
                        color: "rgba(0,122,255,0.5)",
                        marginBottom: "28px",
                    }}
                >
                    0{index + 1} / 04
                </motion.p>

                {/* Headline — scale up entrance */}
                <motion.h3
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gradient"
                    style={{
                        fontSize: "clamp(32px, 8vw, 88px)",
                        fontWeight: 700,
                        lineHeight: 0.95,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "-0.02em",
                        textShadow: "0 4px 40px rgba(0,0,0,0.8)",
                    }}
                >
                    {asset.label}
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    style={{
                        marginTop: "28px",
                        fontSize: "16px",
                        lineHeight: 1.75,
                        color: "rgba(210,210,210,0.7)",
                        maxWidth: "440px",
                        textShadow: "0 2px 16px rgba(0,0,0,0.6)",
                    }}
                >
                    {asset.subtitle}
                </motion.p>

                {/* Stat Pill — slide in */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                    style={{ marginTop: "40px" }}
                >
                    <motion.div
                        className="glass"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "16px",
                            padding: "14px 28px",
                            borderRadius: "9999px",
                        }}
                    >
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 700, color: "#3B9EFF", letterSpacing: "0.05em" }}>
                            {asset.stat}
                        </span>
                        <span style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(160,160,160,0.4)" }}>
                            {asset.statLabel}
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function ScrollytellingSection() {
    return (
        <section id="systems">
            {/* ─── Section Intro ─── */}
            <div
                style={{
                    position: "relative",
                    paddingTop: "160px",
                    paddingBottom: "160px",
                    background: "#000",
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center" as const,
                    paddingLeft: "24px",
                    paddingRight: "24px",
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className="section-label"
                >
                    Strategic Superiority
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gradient"
                    style={{
                        marginTop: "28px",
                        fontSize: "clamp(36px, 6vw, 72px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        fontFamily: "var(--font-mono)",
                    }}
                >
                    Multi-Domain
                    <br />
                    Dominance.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.24 }}
                    style={{
                        marginTop: "24px",
                        fontSize: "17px",
                        lineHeight: 1.7,
                        color: "rgba(160,160,160,0.45)",
                        maxWidth: "460px",
                    }}
                >
                    Four platforms. One integrated command network. Absolute superiority.
                </motion.p>

                {/* Decorative animated line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        marginTop: "48px",
                        width: "80px",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, #3B9EFF, transparent)",
                        transformOrigin: "center",
                    }}
                />
            </div>

            {/* ─── Asset Sections ─── */}
            {assets.map((asset, index) => (
                <AssetPanel key={asset.id} asset={asset} index={index} />
            ))}
        </section>
    );
}
