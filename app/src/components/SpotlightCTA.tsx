"use client";

import { motion } from "framer-motion";

export default function SpotlightCTA() {
    return (
        <section
            id="contact"
            className="angled-divider-top"
            style={{
                position: "relative",
                background: "radial-gradient(ellipse at center, #0e1520 0%, #080b12 70%)",
                padding: "200px 24px 180px",
                overflow: "hidden",
            }}
        >
            {/* Tactical grid */}
            <div className="tactical-grid animate-grid" style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }} />

            {/* Scan line */}
            <div className="animate-scan" style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(59,158,255,0.1) 20%, rgba(59,158,255,0.18) 50%, rgba(59,158,255,0.1) 80%, transparent 100%)", pointerEvents: "none", zIndex: 5 }} />

            {/* Ambient glow — centered */}
            <motion.div
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.96, 1.04, 0.96],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px",
                    height: "600px",
                    background: "radial-gradient(ellipse, rgba(59,158,255,0.07) 0%, transparent 55%)",
                    pointerEvents: "none",
                    filter: "blur(60px)",
                }}
            />

            {/* Corner accents */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 100, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ position: "absolute", top: "12%", left: "6%", width: "1px", background: "linear-gradient(to bottom, rgba(59,158,255,0.35), transparent)", pointerEvents: "none" }}
            />
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ position: "absolute", top: "12%", left: "6%", height: "1px", background: "linear-gradient(to right, rgba(59,158,255,0.35), transparent)", pointerEvents: "none" }}
            />
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: 100, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ position: "absolute", bottom: "12%", right: "6%", width: "1px", background: "linear-gradient(to top, rgba(59,158,255,0.35), transparent)", pointerEvents: "none" }}
            />
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ position: "absolute", bottom: "12%", right: "6%", height: "1px", background: "linear-gradient(to left, rgba(59,158,255,0.35), transparent)", pointerEvents: "none" }}
            />

            {/* Top / bottom fades */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, #080b12, transparent)", pointerEvents: "none", zIndex: 5 }} />

            <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.96, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        borderRadius: "4px",
                        padding: "100px 48px",
                        textAlign: "center" as const,
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column" as const,
                        alignItems: "center",
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        boxShadow: "0 0 80px rgba(0,122,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                >
                    {/* Inner top glow */}
                    <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "300px", background: "radial-gradient(ellipse, rgba(59,158,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

                    {/* Breathing ring */}
                    <motion.div
                        animate={{ scale: [1, 1.04, 1], opacity: [0.25, 0.45, 0.25] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "450px", height: "450px", borderRadius: "50%", border: "1px solid rgba(59,158,255,0.04)", pointerEvents: "none" }}
                    />

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 10 }}>
                        {/* Accent line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #3B9EFF, transparent)", margin: "0 auto 40px", transformOrigin: "center" }}
                        />

                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotateZ: -45 }}
                            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                            style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid rgba(59,158,255,0.25)", background: "rgba(59,158,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B9EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="section-label"
                            style={{ marginBottom: "28px" }}
                        >
                            Deployment Ready
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-gradient"
                            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.15, fontFamily: "var(--font-mono)", marginBottom: "24px", textAlign: "center" as const }}
                        >
                            Ready for Strategic
                            <br />
                            Deployment.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(180,190,210,0.7)", maxWidth: "420px", textAlign: "center" as const, margin: "0 auto 48px" }}
                        >
                            Schedule a classified briefing with our strategic defense team. Direct access to command-level consultation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            style={{ display: "flex", gap: "16px", flexWrap: "wrap" as const, justifyContent: "center" }}
                        >
                            {/* Primary CTA — sharp, glitch hover */}
                            <motion.a
                                href="#"
                                className="btn-glitch"
                                whileHover={{ scale: 1.03, boxShadow: "0 0 60px rgba(0,122,255,0.45)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                style={{
                                    display: "inline-block",
                                    background: "#3B9EFF",
                                    color: "#fff",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.25em",
                                    padding: "18px 48px",
                                    borderRadius: "0px",
                                    textDecoration: "none",
                                    boxShadow: "0 0 30px rgba(59,158,255,0.25)",
                                }}
                            >
                                REQUEST BRIEFING
                            </motion.a>

                            {/* Secondary CTA — sharp */}
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                style={{
                                    display: "inline-block",
                                    color: "rgba(255,255,255,0.6)",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.25em",
                                    padding: "18px 40px",
                                    borderRadius: "0px",
                                    textDecoration: "none",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    background: "rgba(120,160,220,0.04)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                VIEW SYSTEMS
                            </motion.a>
                        </motion.div>

                        {/* Bottom accent */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, rgba(59,158,255,0.4), transparent)", margin: "48px auto 0", transformOrigin: "center" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
