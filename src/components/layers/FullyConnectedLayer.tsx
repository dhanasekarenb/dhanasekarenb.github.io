"use client";

import { motion } from "framer-motion";
import LayerHeader from "@/components/LayerHeader";
import GlassCard from "@/components/GlassCard";
import { ExternalLink, Star } from "lucide-react";

interface Project {
    title: string;
    tech: string;
    description: string;
    highlights: string[];
    accuracy?: string;
    tags: string[];
}

const projects: Project[] = [
    {
        title: "Road Sign Detection",
        tech: "Mamba Transformer",
        description:
            "State-of-the-art road sign detection system leveraging the Mamba Transformer architecture for real-time visual recognition with exceptional precision.",
        highlights: [
            "Mamba Transformer architecture",
            "Real-time inference pipeline",
            "Custom dataset curation",
            "Edge-deployment optimized",
        ],
        accuracy: "98%",
        tags: ["Deep Learning", "Computer Vision", "Transformer"],
    },
    {
        title: "Online Learning Platform",
        tech: "MERN Stack",
        description:
            "Full-stack online learning platform built with MongoDB, Express, React, and Node.js — enabling interactive course delivery and user management.",
        highlights: [
            "MongoDB + Express backend",
            "React SPA frontend",
            "User authentication & roles",
            "Course management system",
        ],
        tags: ["Full Stack", "MERN", "Web Development"],
    },
    {
        title: "SRT-finder",
        tech: "Research Tool",
        description:
            "Specialized search and retrieval tool designed for efficient subtitle/text file parsing and intelligent content discovery.",
        highlights: [
            "Text parsing engine",
            "Intelligent search algorithms",
            "File format handling",
            "Performance optimization",
        ],
        tags: ["Python", "Algorithms", "NLP"],
    },
];

export default function FullyConnectedLayer() {
    return (
        <section
            id="fc-layer"
            className="neural-layer relative overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)",
                }}
            />

            <LayerHeader
                layerNumber="03"
                title="Fully Connected Layer"
                subtitle="Dense Weights // Connecting All Technical Nodes"
                accentColor="var(--accent-emerald)"
            />

            <div className="h-8 md:h-12" />

            <div className="relative z-10 w-full max-w-5xl">
                {/* Dense Network Viz */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <svg
                        viewBox="0 0 800 80"
                        className="w-full h-16 md:h-20"
                        style={{ opacity: 0.3 }}
                    >
                        {[15, 30, 45, 60, 75].map((y, i) => (
                            <g key={`l-${i}`}>
                                <circle cx="50" cy={y} r="3" fill="var(--accent-emerald)" />
                                {[25, 40, 55].map((my, j) => (
                                    <motion.line
                                        key={`l-${i}-m-${j}`}
                                        x1="50"
                                        y1={y}
                                        x2="400"
                                        y2={my}
                                        stroke="var(--accent-emerald)"
                                        strokeWidth="0.5"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: i * 0.1 + j * 0.05,
                                            duration: 0.8,
                                        }}
                                    />
                                ))}
                            </g>
                        ))}
                        {[25, 40, 55].map((y, i) => (
                            <g key={`m-${i}`}>
                                <circle cx="400" cy={y} r="4" fill="var(--accent-cyan)" />
                                <motion.line
                                    x1="400"
                                    y1={y}
                                    x2="750"
                                    y2="40"
                                    stroke="var(--accent-cyan)"
                                    strokeWidth="0.5"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                />
                            </g>
                        ))}
                        <circle cx="750" cy="40" r="5" fill="var(--accent-magenta)" />
                    </svg>
                </motion.div>

                <div className="h-12 md:h-16" />

                {/* Project Cards — stacked vertically with generous gap */}
                <div className="flex flex-col gap-14">
                    {projects.map((proj, idx) => (
                        <GlassCard
                            key={proj.title}
                            delay={idx * 0.15}
                            glowColor={idx === 0 ? "cyan" : undefined}
                            className="relative group overflow-hidden"
                        >
                            {/* Inner container with generous padding */}
                            <div style={{ padding: "clamp(40px, 5vw, 56px)" }}>
                                {/* Accuracy Badge */}
                                {proj.accuracy && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="absolute top-8 right-8 md:top-10 md:right-10 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(0,240,255,0.2), rgba(0,255,136,0.2))",
                                            border: "1px solid rgba(0, 240, 255, 0.4)",
                                            color: "var(--accent-cyan)",
                                            fontFamily: "var(--font-jetbrains)",
                                            boxShadow: "0 0 20px rgba(0, 240, 255, 0.2)",
                                        }}
                                    >
                                        <Star size={12} />
                                        {proj.accuracy} Accuracy
                                    </motion.div>
                                )}

                                {/* Tech tag */}
                                <div
                                    className="inline-block px-4 py-2 rounded-full text-xs w-fit"
                                    style={{
                                        background: "rgba(0, 255, 136, 0.08)",
                                        border: "1px solid rgba(0, 255, 136, 0.2)",
                                        color: "var(--accent-emerald)",
                                        fontFamily: "var(--font-jetbrains)",
                                    }}
                                >
                                    {proj.tech}
                                </div>

                                <div className="h-6" />

                                <h3
                                    className="text-2xl md:text-3xl font-bold"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {proj.title}
                                </h3>

                                <div className="h-6" />

                                <p
                                    className="text-sm md:text-base leading-relaxed max-w-2xl pl-4 md:pl-5"
                                    style={{
                                        color: "var(--text-secondary)",
                                        borderLeft: "2px solid rgba(0, 255, 136, 0.15)",
                                    }}
                                >
                                    {proj.description}
                                </p>

                                <div className="h-8" />

                                {/* Highlights */}
                                <div className="space-y-4">
                                    {proj.highlights.map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 text-sm"
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontFamily: "var(--font-jetbrains)",
                                            }}
                                        >
                                            <div
                                                className="w-2 h-2 rounded-full flex-shrink-0"
                                                style={{ background: "var(--accent-emerald)" }}
                                            />
                                            {h}
                                        </div>
                                    ))}
                                </div>

                                <div className="h-8" />

                                {/* Tags */}
                                <div
                                    className="flex flex-wrap gap-3 pt-6"
                                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
                                >
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded text-[10px] uppercase tracking-wider"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.04)",
                                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                                color: "var(--text-muted)",
                                                fontFamily: "var(--font-jetbrains)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover link */}
                                <motion.div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink
                                        size={16}
                                        style={{ color: "var(--accent-emerald)" }}
                                    />
                                </motion.div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
