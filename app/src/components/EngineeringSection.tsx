"use client";

import { motion } from "framer-motion";

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

const capabilities = [
    {
        title: "Advanced Targeting Systems",
        description:
            "Multi-spectral sensor fusion with AI-driven target identification and tracking across all operational domains.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <circle cx="14" cy="14" r="12" />
                <circle cx="14" cy="14" r="7" />
                <circle cx="14" cy="14" r="2" />
                <line x1="14" y1="0" x2="14" y2="5" />
                <line x1="14" y1="23" x2="14" y2="28" />
                <line x1="0" y1="14" x2="5" y2="14" />
                <line x1="23" y1="14" x2="28" y2="14" />
            </svg>
        ),
    },
    {
        title: "Autonomous AI Coordination",
        description:
            "Neural network-powered swarm intelligence enabling real-time tactical coordination between autonomous units.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2L2 8.5L14 15L26 8.5L14 2Z" />
                <path d="M2 19.5L14 26L26 19.5" />
                <path d="M2 14L14 20.5L26 14" />
            </svg>
        ),
    },
    {
        title: "Hybrid Energy Platforms",
        description:
            "Next-generation propulsion combining conventional and electric powertrains for extended operational range.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="16 2 4 16 14 16 12 26 24 12 14 12 16 2" />
            </svg>
        ),
    },
    {
        title: "Multi-Domain Command Network",
        description:
            "Encrypted mesh communications linking air, land, sea, and space assets into a unified command framework.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <circle cx="14" cy="5" r="3" />
                <circle cx="5" cy="22" r="3" />
                <circle cx="23" cy="22" r="3" />
                <line x1="14" y1="8" x2="5" y2="19" />
                <line x1="14" y1="8" x2="23" y2="19" />
                <line x1="8" y1="22" x2="20" y2="22" />
            </svg>
        ),
    },
];

export default function EngineeringSection() {
    return (
        <section
            id="engineering"
            style={{
                position: "relative",
                background: "linear-gradient(180deg, #080b12 0%, #0e1520 50%, #080b12 100%)",
                overflow: "hidden",
            }}
        >
            {/* Tactical grid */}
            <div className="tactical-grid animate-grid" style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none" }} />

            {/* Atmospheric glow orbs */}
            <div style={{ position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,158,255,0.09) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(60px)" }} />
            <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,158,255,0.07) 0%, transparent 70%)", pointerEvents: "none", filter: "blur(50px)" }} />

            {/* Scan line */}
            <div className="animate-scan" style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(59,158,255,0.12) 20%, rgba(59,158,255,0.22) 50%, rgba(59,158,255,0.12) 80%, transparent 100%)", pointerEvents: "none", zIndex: 5 }} />

            {/* Top/bottom fades */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />

            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "160px 24px 180px",
                }}
            >
                {/* ─── Section Header ─── */}
                <div
                    style={{
                        textAlign: "center" as const,
                        marginBottom: "100px",
                        display: "flex",
                        flexDirection: "column" as const,
                        alignItems: "center",
                    }}
                >
                    {/* Radar dot */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0,122,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "28px",
                        }}
                    >
                        <motion.div
                            animate={{ boxShadow: ["0 0 12px rgba(0,122,255,0.3)", "0 0 24px rgba(0,122,255,0.6)", "0 0 12px rgba(0,122,255,0.3)"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#007AFF" }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="section-label"
                    >
                        Engineering Mastery
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gradient"
                        style={{ marginTop: "24px", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, fontFamily: "var(--font-mono)", textAlign: "center" as const }}
                    >
                        Forged from Precision.
                        <br />
                        Powered by Intelligence.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ marginTop: "20px", maxWidth: "520px", fontSize: "17px", lineHeight: 1.7, color: "rgba(180,190,210,0.7)", textAlign: "center" as const }}
                    >
                        Four pillars of technological superiority driving the future of integrated defense.
                    </motion.p>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ marginTop: "36px", width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #3B9EFF, transparent)", transformOrigin: "center" }}
                    />
                </div>

                {/* ─── Cards Grid — stagger ─── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{ gap: "20px" }}
                >
                    {capabilities.map((cap) => (
                        <motion.div
                            key={cap.title}
                            variants={staggerItem}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }}
                            className="glass-card"
                            style={{
                                borderRadius: "20px",
                                padding: "44px",
                                display: "flex",
                                flexDirection: "column" as const,
                                alignItems: "center",
                                textAlign: "center" as const,
                                position: "relative",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            {/* Card subtle top glow */}
                            <div style={{ position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)", width: "200px", height: "120px", background: "radial-gradient(ellipse, rgba(0,122,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    width: "60px", height: "60px", borderRadius: "16px",
                                    background: "rgba(0,122,255,0.07)", border: "1px solid rgba(0,122,255,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#3B9EFF", marginBottom: "28px", position: "relative", zIndex: 2,
                                }}
                            >
                                {cap.icon}
                            </motion.div>

                            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "18px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "14px", letterSpacing: "0.02em", position: "relative", zIndex: 2 }}>
                                {cap.title}
                            </h3>

                            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(180,190,210,0.7)", maxWidth: "360px", position: "relative", zIndex: 2 }}>
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
