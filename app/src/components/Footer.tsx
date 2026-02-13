"use client";

import { motion } from "framer-motion";

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
    return (
        <footer
            style={{
                background: "#080b12",
                borderTop: "1px solid rgba(100,140,200,0.08)",
                position: "relative",
                overflow: "hidden",
            }}
            className="pt-24 pb-12 px-8 md:px-12"
        >
            {/* Subtle top glow */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "800px", height: "200px", background: "radial-gradient(ellipse, rgba(59,158,255,0.025) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
                {/* ─── Footer Grid ─── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20"
                >
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="col-span-2 md:col-span-1">
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{
                                    width: "36px", height: "36px", borderRadius: "50%",
                                    border: "1px solid rgba(0,122,255,0.5)", display: "flex",
                                    alignItems: "center", justifyContent: "center",
                                    background: "rgba(0,122,255,0.05)",
                                }}
                            >
                                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#3B9EFF", boxShadow: "0 0 10px rgba(59,158,255,0.5)" }} />
                            </motion.div>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 700, letterSpacing: "0.25em", color: "#fff" }}>
                                AEGIS
                            </span>
                        </div>
                        <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(160,175,200,0.6)", maxWidth: "280px" }}>
                            Multi-domain defense systems engineered for strategic superiority across air, land, and sea operations.
                        </p>
                    </motion.div>

                    {/* Systems */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, marginBottom: "24px" }}>
                            Systems
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {["Air Superiority", "Ground Dominance", "Naval Power", "Aerial Assault"].map((link) => (
                                <li key={link} style={{ marginBottom: "14px" }}>
                                    <motion.a
                                        href="#systems"
                                        whileHover={{ x: 4, color: "#3B9EFF" }}
                                        transition={{ duration: 0.2 }}
                                        style={{ fontSize: "14px", color: "rgba(160,175,200,0.6)", textDecoration: "none", display: "inline-block" }}
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, marginBottom: "24px" }}>
                            Company
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {["About", "Careers", "Partners", "Press"].map((link) => (
                                <li key={link} style={{ marginBottom: "14px" }}>
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 4, color: "#3B9EFF" }}
                                        transition={{ duration: 0.2 }}
                                        style={{ fontSize: "14px", color: "rgba(160,175,200,0.6)", textDecoration: "none", display: "inline-block" }}
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal */}
                    <motion.div variants={staggerItem}>
                        <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" as const, marginBottom: "24px" }}>
                            Legal
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {["Privacy Policy", "Terms of Service", "Export Compliance", "Security"].map((link) => (
                                <li key={link} style={{ marginBottom: "14px" }}>
                                    <motion.a
                                        href="#"
                                        whileHover={{ x: 4, color: "#3B9EFF" }}
                                        transition={{ duration: 0.2 }}
                                        style={{ fontSize: "14px", color: "rgba(160,175,200,0.6)", textDecoration: "none", display: "inline-block" }}
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* ─── Bottom Bar ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    style={{
                        borderTop: "1px solid rgba(100,140,200,0.06)",
                        paddingTop: "32px",
                        display: "flex",
                        flexWrap: "wrap" as const,
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "16px",
                    }}
                >
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(140,155,180,0.5)" }}>
                        © 2026 AEGIS DEFENSE SYSTEMS. ALL RIGHTS RESERVED.
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em", color: "rgba(140,155,180,0.4)" }}>
                        CLASSIFIED • DISTRIBUTION RESTRICTED
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
