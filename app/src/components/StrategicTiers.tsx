"use client";

import { motion } from "framer-motion";

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

const tiers = [
    {
        name: "Research Division",
        description: "For academic and R&D institutions exploring defense innovation.",
        clearance: "Level III",
        features: [
            "Simulation sandbox access",
            "Technical documentation library",
            "Quarterly defense briefings",
            "Research collaboration portal",
            "Non-classified datasets",
        ],
        featured: false,
        cta: "APPLY FOR ACCESS",
    },
    {
        name: "Defense Contractor",
        description: "For certified defense contractors and system integrators.",
        clearance: "Level II",
        features: [
            "Full platform integration APIs",
            "Real-time telemetry dashboards",
            "Priority engineering support",
            "Joint development programs",
            "Secure communications channel",
            "Annual strategic summit access",
        ],
        featured: true,
        cta: "REQUEST CLEARANCE",
    },
    {
        name: "Enterprise Security",
        description: "For sovereign defense programs requiring full-spectrum access.",
        clearance: "Level I",
        features: [
            "Complete system architecture access",
            "Custom deployment configurations",
            "Dedicated defense liaison team",
            "Classified intelligence integration",
            "24/7 strategic operations center",
        ],
        featured: false,
        cta: "CONTACT COMMAND",
    },
];

export default function StrategicTiers() {
    return (
        <section
            id="tiers"
            style={{
                position: "relative",
                background: "linear-gradient(180deg, #080b12 0%, #101828 40%, #101828 60%, #080b12 100%)",
                overflow: "hidden",
            }}
            className="py-24 px-8 md:py-40 md:px-12"
        >
            {/* Atmospheric elements */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,158,255,0.08) 0%, transparent 60%)", pointerEvents: "none", filter: "blur(40px)" }} />

            {/* Decorative horizontal lines */}
            <div style={{ position: "absolute", top: "25%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,158,255,0.1), transparent)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "75%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,158,255,0.07), transparent)", pointerEvents: "none" }} />

            {/* Top/bottom fades */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to bottom, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to top, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                {/* ─── Header ─── */}
                <div style={{ textAlign: "center" as const, marginBottom: "80px", display: "flex", flexDirection: "column" as const, alignItems: "center" }}>
                    {/* Decorative icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                        style={{ width: "48px", height: "48px", borderRadius: "12px", border: "1px solid rgba(0,122,255,0.15)", background: "rgba(0,122,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px" }}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#3B9EFF" strokeWidth="1.2" strokeLinecap="round">
                            <path d="M10 1L1 5.5L10 10L19 5.5L10 1Z" />
                            <path d="M1 14.5L10 19L19 14.5" />
                            <path d="M1 10L10 14.5L19 10" />
                        </svg>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="section-label"
                    >
                        Engagement Protocols
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-gradient"
                        style={{ marginTop: "24px", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.15, fontFamily: "var(--font-mono)", textAlign: "center" as const }}
                    >
                        Strategic Access Tiers
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ marginTop: "20px", fontSize: "17px", lineHeight: 1.7, color: "rgba(180,190,210,0.7)", maxWidth: "520px", textAlign: "center" as const }}
                    >
                        Select your engagement level based on organizational clearance and operational requirements.
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

                {/* ─── Cards — stagger ─── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start"
                >
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.name}
                            variants={cardVariant}
                            whileHover={
                                !tier.featured
                                    ? { y: -6, borderColor: "rgba(0,122,255,0.15)", boxShadow: "0 16px 40px rgba(0,0,0,0.3)" }
                                    : { y: -6, boxShadow: "0 0 100px rgba(0,122,255,0.1), 0 16px 40px rgba(0,0,0,0.3)" }
                            }
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            style={{
                                borderRadius: "24px",
                                padding: "44px 36px 36px",
                                display: "flex",
                                flexDirection: "column" as const,
                                position: "relative" as const,
                                overflow: "visible",
                                cursor: "default",
                                ...(tier.featured
                                    ? {
                                        background: "rgba(0,122,255,0.04)",
                                        backdropFilter: "blur(40px)",
                                        border: "1px solid rgba(0,122,255,0.2)",
                                        boxShadow: "0 0 80px rgba(0,122,255,0.06), inset 0 1px 0 rgba(0,122,255,0.1)",
                                    }
                                    : {
                                        background: "rgba(255,255,255,0.02)",
                                        backdropFilter: "blur(20px)",
                                        border: "1px solid rgba(100,140,200,0.1)",
                                    }),
                            }}
                        >
                            {/* Featured card top glow */}
                            {tier.featured && (
                                <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "300px", height: "200px", background: "radial-gradient(ellipse, rgba(59,158,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                            )}

                            {/* Featured badge */}
                            {tier.featured && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
                                    style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#3B9EFF", color: "#fff", fontFamily: "var(--font-mono)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", padding: "6px 20px", borderRadius: "9999px", whiteSpace: "nowrap" as const, boxShadow: "0 4px 20px rgba(59,158,255,0.3)" }}
                                >
                                    RECOMMENDED
                                </motion.div>
                            )}

                            {/* Clearance */}
                            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.4em", color: tier.featured ? "rgba(59,158,255,0.7)" : "rgba(59,158,255,0.45)", marginBottom: "16px" }}>
                                CLEARANCE {tier.clearance}
                            </p>

                            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "22px", fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: "10px" }}>
                                {tier.name}
                            </h3>

                            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(180,190,210,0.65)", marginBottom: "28px" }}>
                                {tier.description}
                            </p>

                            <div style={{ width: "100%", height: "1px", background: tier.featured ? "linear-gradient(90deg, transparent, rgba(59,158,255,0.2), transparent)" : "rgba(100,140,200,0.08)", marginBottom: "28px" }} />

                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", flex: 1 }}>
                                {tier.features.map((feature, fi) => (
                                    <motion.li
                                        key={feature}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.6 + fi * 0.06 }}
                                        style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}
                                    >
                                        <span style={{ color: "#3B9EFF", fontSize: "13px", lineHeight: "22px", flexShrink: 0 }}>✓</span>
                                        <span style={{ fontSize: "14px", lineHeight: "22px", color: "rgba(200,210,225,0.75)" }}>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "center" as const,
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    letterSpacing: "0.2em",
                                    padding: "16px 24px",
                                    borderRadius: "9999px",
                                    textDecoration: "none",
                                    ...(tier.featured
                                        ? { background: "#3B9EFF", color: "#fff", boxShadow: "0 4px 20px rgba(59,158,255,0.25)" }
                                        : { background: "rgba(120,160,220,0.04)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(100,140,200,0.1)" }),
                                }}
                            >
                                {tier.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


        </section>
    );
}
