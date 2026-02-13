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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

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
                    paddingLeft: scrolled ? 24 : 32,
                    paddingRight: scrolled ? 24 : 32,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-strong"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    pointerEvents: "auto",
                    maxWidth: scrolled ? "100%" : undefined,
                    justifyContent: "space-between", // Ensure space-between for mobile layout
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
                        zIndex: 60, // Ensure logo is above mobile menu
                        position: "relative",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
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

                {/* Desktop Nav Links (centered) */}
                <div
                    className="hidden md:flex"
                    style={{
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

                {/* CTA — INQUIRE button (Desktop) */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex"
                    style={{
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

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden block"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        zIndex: 60,
                        position: "relative",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "transparent",
                        border: "none",
                        color: "#fff",
                        padding: 0,
                    }}
                    aria-label="Toggle menu"
                >
                    <div style={{ width: "24px", height: "18px", position: "relative" }}>
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "white", transformOrigin: "center" }}
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            style={{ position: "absolute", top: "8px", left: 0, width: "100%", height: "2px", background: "white" }}
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", background: "white", transformOrigin: "center" }}
                        />
                    </div>
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "#080b12",
                    zIndex: 55,
                    padding: "120px 24px 40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    pointerEvents: mobileMenuOpen ? "auto" : "none",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", width: "100%" }}>
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "16px",
                                letterSpacing: "0.25em",
                                color: "#fff",
                                textDecoration: "none",
                                padding: "12px",
                                width: "100%",
                                textAlign: "center",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            {link.label}
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#3B9EFF",
                            color: "#fff",
                            fontFamily: "var(--font-mono)",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            padding: "16px 40px",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            marginTop: "24px",
                            width: "100%",
                            maxWidth: "280px",
                        }}
                    >
                        INQUIRE
                    </motion.a>
                </div>
            </motion.div>
        </header>
    );
}
