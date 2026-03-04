"use client";

import { motion } from "framer-motion";
import LayerHeader from "@/components/LayerHeader";
import GlassCard from "@/components/GlassCard";

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    poolValue: number;
}

const experiences: Experience[] = [
    {
        title: "AI & ML Engineer",
        company: "Forsche Technology Solutions",
        period: "Dec 2025 — Present",
        description:
            "Development and training of various Deep Learning algorithms. Working with OpenCV and YOLO for robotics applications.",
        highlights: [
            "Deep Learning algorithms",
            "OpenCV & YOLO for robotics",
            "Model development & training",
            "Production deployment",
        ],
        poolValue: 0.99,
    },
    {
        title: "Deep Learning Intern",
        company: "Tech Jose",
        period: "March 2025 — May 2025",
        description:
            "Focused on Neural Radiance Fields (NeRF) and 3D reconstruction pipeline development.",
        highlights: [
            "NeRF-based 3D reconstruction",
            "Novel view synthesis",
            "Deep learning model optimization",
            "Research & prototyping",
        ],
        poolValue: 0.98,
    },
    {
        title: "ML Engineer",
        company: "Polenza",
        period: "2024",
        description:
            "Designed and implemented machine learning algorithms for production systems.",
        highlights: [
            "ML algorithm design",
            "Data pipeline architecture",
            "Model deployment",
            "Performance optimization",
        ],
        poolValue: 0.94,
    },
];

export default function PoolingLayer() {
    return (
        <section
            id="pooling-layer"
            className="neural-layer relative overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,0,229,0.06) 0%, transparent 70%)",
                }}
            />

            <LayerHeader
                layerNumber="02"
                title="Pooling Layer"
                subtitle="Max-Pooling // Extracting Career Highlights"
                accentColor="var(--accent-magenta)"
            />

            <div className="h-10 md:h-16" />

            <div className="relative z-10 w-full max-w-5xl">
                {/* Max-Pool Visualization Label */}
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm tracking-[0.2em] uppercase mb-14 text-center"
                    style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-jetbrains)",
                    }}
                >
                    ── MaxPool2D(kernel_size=2, stride=2) ──
                </motion.h3>

                <div className="h-4" />

                {/* Experience Cards — stacked with generous gap */}
                <div className="flex flex-col gap-14">
                    {experiences.map((exp, idx) => (
                        <GlassCard
                            key={exp.company}
                            delay={idx * 0.2}
                            glowColor="magenta"
                            className="relative overflow-hidden"
                        >
                            {/* Inner container with generous padding */}
                            <div style={{ padding: "clamp(40px, 5vw, 56px)" }}>
                                {/* Pool Value Badge — anchored with equal padding */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 + 0.3, type: "spring" }}
                                    className="absolute top-10 right-8 md:top-12 md:right-10 lg:right-12 w-16 h-16 rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgba(255, 0, 229, 0.1)",
                                        border: "1px solid rgba(255, 0, 229, 0.3)",
                                    }}
                                >
                                    <span
                                        className="text-sm font-bold"
                                        style={{
                                            color: "var(--accent-magenta)",
                                            fontFamily: "var(--font-jetbrains)",
                                        }}
                                    >
                                        {exp.poolValue.toFixed(2)}
                                    </span>
                                </motion.div>

                                {/* Company tag — aligned left */}
                                <div
                                    className="inline-block px-4 py-2 rounded-full text-xs"
                                    style={{
                                        background: "rgba(255, 0, 229, 0.1)",
                                        border: "1px solid rgba(255, 0, 229, 0.2)",
                                        color: "var(--accent-magenta)",
                                        fontFamily: "var(--font-jetbrains)",
                                    }}
                                >
                                    @ {exp.company}
                                </div>

                                <div className="h-6" />

                                {/* Title — aligned with company tag */}
                                <h3
                                    className="text-2xl md:text-3xl font-bold"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {exp.title}
                                </h3>

                                <div className="h-2" />

                                <p
                                    className="text-xs"
                                    style={{
                                        color: "var(--text-muted)",
                                        fontFamily: "var(--font-jetbrains)",
                                    }}
                                >
                                    {exp.period}
                                </p>

                                <div className="h-7" />

                                {/* Description — indented for nested look */}
                                <p
                                    className="text-sm md:text-base leading-relaxed max-w-2xl pl-4 md:pl-5"
                                    style={{
                                        color: "var(--text-secondary)",
                                        borderLeft: "2px solid rgba(255, 0, 229, 0.15)",
                                    }}
                                >
                                    {exp.description}
                                </p>

                                <div className="h-10" />

                                {/* Max-Pool Grid Visualization */}
                                <div className="grid grid-cols-2 gap-4 max-w-xl">
                                    {exp.highlights.map((h, i) => {
                                        const isMax = i === 0;
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.2 + i * 0.1 }}
                                                className="p-5 rounded-lg text-xs text-center"
                                                style={{
                                                    background: isMax
                                                        ? "rgba(255, 0, 229, 0.12)"
                                                        : "rgba(255, 255, 255, 0.02)",
                                                    border: `1px solid ${isMax
                                                        ? "rgba(255, 0, 229, 0.3)"
                                                        : "rgba(255, 255, 255, 0.05)"
                                                        }`,
                                                    color: isMax
                                                        ? "var(--accent-magenta)"
                                                        : "var(--text-secondary)",
                                                    fontFamily: "var(--font-jetbrains)",
                                                }}
                                            >
                                                {isMax && (
                                                    <span className="block text-[10px] mb-2 opacity-60">
                                                        MAX ↑
                                                    </span>
                                                )}
                                                {h}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
