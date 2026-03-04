"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LayerHeader from "@/components/LayerHeader";
import GlassCard from "@/components/GlassCard";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

interface ContactLink {
    label: string;
    href: string;
    icon: React.ReactNode;
    color: string;
}

const contactLinks: ContactLink[] = [
    {
        label: "Gmail",
        href: "mailto:dhanasekaren2004@gmail.com",
        icon: <Mail size={20} />,
        color: "var(--accent-cyan)",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dhanasekarenb/",
        icon: <Linkedin size={20} />,
        color: "var(--accent-violet)",
    },
    {
        label: "GitHub",
        href: "https://github.com/dhanasekarenb",
        icon: <Github size={20} />,
        color: "var(--accent-emerald)",
    },
];

const classificationScores = [
    { label: "Deep Learning Expertise", score: 0.97 },
    { label: "Full-Stack Development", score: 0.89 },
    { label: "Research & Innovation", score: 0.95 },
    { label: "Problem Solving", score: 0.98 },
];

export default function OutputLayer() {
    const [copied, setCopied] = useState(false);

    const handleGmailClick = (e: React.MouseEvent, href: string) => {
        if (href.startsWith("mailto:")) {
            e.preventDefault();
            const email = href.replace("mailto:", "");
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <section
            id="output-layer"
            className="neural-layer relative overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)",
                }}
            />

            <LayerHeader
                layerNumber="04"
                title="Output Layer"
                subtitle="Softmax Classification // Final Prediction"
                accentColor="var(--accent-cyan)"
            />

            <div className="h-10 md:h-16" />

            <div className="relative z-10 w-full max-w-5xl">
                {/* Classification Result */}
                <GlassCard className="mb-16 text-center" glowColor="cyan">
                    <div style={{ padding: "clamp(40px, 5vw, 64px)" }}>
                        <p
                            className="text-xs tracking-[0.3em] uppercase mb-10"
                            style={{
                                color: "var(--text-muted)",
                                fontFamily: "var(--font-jetbrains)",
                            }}
                        >
                            model.predict(candidate) →
                        </p>

                        {/* Confidence Bars */}
                        <div className="space-y-7 mb-14 max-w-lg mx-auto">
                            {classificationScores.map((item, idx) => (
                                <div key={item.label} className="text-left">
                                    <div className="flex justify-between mb-3">
                                        <span
                                            className="text-xs"
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontFamily: "var(--font-jetbrains)",
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                        <span
                                            className="text-xs font-bold"
                                            style={{
                                                color: "var(--accent-cyan)",
                                                fontFamily: "var(--font-jetbrains)",
                                            }}
                                        >
                                            {(item.score * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                    <div
                                        className="h-3 rounded-full overflow-hidden"
                                        style={{ background: "rgba(255, 255, 255, 0.05)" }}
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.score * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.3 + idx * 0.15,
                                                duration: 1,
                                                ease: [0.4, 0, 0.2, 1],
                                            }}
                                            className="h-full rounded-full"
                                            style={{
                                                background: `linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="h-4" />

                        {/* Final Classification */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="pt-8"
                        >
                            <div
                                className="inline-block px-8 py-4 rounded-full mb-8"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(0,240,255,0.1), rgba(123,47,255,0.1))",
                                    border: "1px solid rgba(0, 240, 255, 0.3)",
                                    boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
                                }}
                            >
                                <p
                                    className="text-xs tracking-[0.2em] uppercase"
                                    style={{
                                        color: "var(--text-muted)",
                                        fontFamily: "var(--font-jetbrains)",
                                    }}
                                >
                                    classification_result:
                                </p>
                            </div>

                            <h3
                                className="text-3xl md:text-5xl font-bold gradient-text mt-4"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                &quot;The Ideal Candidate&quot;
                            </h3>

                            <p
                                className="mt-6 text-sm"
                                style={{
                                    color: "var(--text-muted)",
                                    fontFamily: "var(--font-jetbrains)",
                                }}
                            >
                                confidence: 99.7% | loss: 0.003
                            </p>
                        </motion.div>
                    </div>
                </GlassCard>

                <div className="h-6" />

                {/* Contact CTAs */}
                <div className="flex flex-col gap-5">
                    {contactLinks.map((link, idx) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            onClick={(e) => handleGmailClick(e, link.href)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass-card flex items-center justify-between group cursor-pointer"
                            style={{ padding: "clamp(24px, 3vw, 32px) clamp(32px, 4vw, 48px)" }}
                        >
                            <div className="flex items-center gap-5">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{
                                        background: `${link.color}15`,
                                        border: `1px solid ${link.color}30`,
                                        color: link.color,
                                    }}
                                >
                                    {link.icon}
                                </div>
                                <div className="flex flex-col text-left">
                                    <span
                                        className="text-base font-medium"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        {link.label === "Gmail" && copied ? "dhanasekaren2004@gmail.com" : link.label}
                                    </span>
                                    {link.label === "Gmail" && copied && (
                                        <span className="text-[10px] text-accent-cyan animate-pulse">
                                            Address Copied to Clipboard!
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {link.label === "Gmail" && copied && (
                                    <span style={{ color: "var(--accent-emerald)" }} className="text-xs font-bold font-mono">
                                        ✓
                                    </span>
                                )}
                                <ArrowUpRight
                                    size={18}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ color: link.color }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 pb-12 text-center"
                >
                    <p
                        className="text-xs"
                        style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-jetbrains)",
                        }}
                    >
                        model.summary() → Neural Portfolio v1.0
                    </p>
                    <p
                        className="text-[10px] mt-2"
                        style={{ color: "rgba(240, 240, 245, 0.2)" }}
                    >
                        Built with Next.js · Tailwind CSS · Framer Motion
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
