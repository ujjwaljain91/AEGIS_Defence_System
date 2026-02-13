"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "SYSTEMS", href: "#systems" },
    { label: "ENGINEERING", href: "#engineering" },
    { label: "TIERS", href: "#tiers" },
    { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "center",
                padding: scrolled ? "0" : "28px 24px 0",
                transition: "padding 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                pointerEvents: "none",
            }}
        >
            <motion.nav
                animate={{
                    width: scrolled ? "100%" : "auto",
                    borderRadius: scrolled ? 0 : 9999,
                    paddingTop: scrolled ? 14 : 12,
                    paddingBottom: scrolled ? 14 : 12,
                    paddingLeft: scrolled ? 48 : 32,
                    paddingRight: scrolled ? 48 : 32,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-strong"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    pointerEvents: "auto",
                    maxWidth: scrolled ? "100%" : undefined,
                }}
            >
                {/* Logo */}
                <a
                    href="#"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        textDecoration: "none",
                        flexShrink: 0,
                    }}
                >
                    <div
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            border: "1px solid rgba(0,122,255,0.5)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(0,122,255,0.05)",
                        }}
                    >
                        <div
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                background: "#3B9EFF",
                                boxShadow: "0 0 10px rgba(0,122,255,0.5)",
                            }}
                        />
                    </div>
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "0.25em",
                            color: "#fff",
                        }}
                    >
                        AEGIS
                    </span>
                </a>

                {/* Nav Links (centered) */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "32px",
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "11px",
                                letterSpacing: "0.25em",
                                color: "rgba(160,160,160,0.65)",
                                textDecoration: "none",
                                transition: "color 0.3s",
                                whiteSpace: "nowrap",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#3B9EFF";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "rgba(160,160,160,0.65)";
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA — INQUIRE button */}
                <a
                    href="#contact"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        color: "#000",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        padding: "10px 24px",
                        borderRadius: "9999px",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        transition: "all 0.3s",
                        border: "none",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(0,122,255,0.4)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                >
                    INQUIRE
                </a>
            </motion.nav>
        </header>
    );
}
