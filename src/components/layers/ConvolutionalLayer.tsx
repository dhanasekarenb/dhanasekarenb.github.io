"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LayerHeader from "@/components/LayerHeader";
import { X, Brain, Cpu, Eye, Layers, Repeat, Zap, Target, Box } from "lucide-react";

interface Skill {
    name: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    experience: string[];
}

// Simple SVG for Python - Bolder version
const PythonIcon = () => (
    <svg viewBox="0 0 110 110" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
        <path d="M55.1 2.1C44.3 2.1 34.6 3 28.5 4.6 18.2 7.3 12.8 11.2 9.9 17.4c-2.9 6.2-3.7 13.9-3.7 24.5v0.6c0 10.6 0.8 18.3 3.7 24.5 2.9 6.2 8.3 10.1 18.6 12.8 3.5 0.9 8.2 1.5 13.3 1.9l0.1-1.3c0-9.2 7.5-16.7 16.7-16.7h13.3c9.2 0 16.7-7.5 16.7-16.7V30.1c0-9.2-7.5-16.7-16.7-16.7H55.1c-1.1 0-2.1-0.1-3.2 0l-0.1-11.3zM39.9 13.4c2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6zM70.1 43.4c9.2 0 16.7 7.5 16.7 16.7v16.7c0 9.2-7.5 16.7-16.7 16.7h-13.3c-9.2 0-16.7 7.5-16.7 16.7V108.1l0.1 1.3c10.8-0.1 20.5-1 26.6-2.6 10.3-2.7 15.7-6.6 18.6-12.8 2.9-6.2 3.7-13.9 3.7-24.5v-0.6c0-10.6-0.8-18.3-3.7-24.5-2.9-6.2-8.3-10.1-18.6-12.8-3.5-0.9-8.2-1.5-13.3-1.9L70.1 43.4zM70.1 86.8c2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6z" />
    </svg>
);

const skills: Skill[] = [
    {
        name: "Python",
        icon: <PythonIcon />,
        color: "rgba(0, 240, 255, 0.15)",
        description:
            "Primary language for Deep Learning, Data Science, and automation. Strong proficiency in building end-to-end ML pipelines, scripting, and research prototyping.",
        experience: [
            "Built NeRF-based 3D reconstruction pipelines at Tech Jose",
            "Developed ML algorithms for production at Polenza",
            "Road Sign Detection with Mamba Transformer (98% accuracy)",
            "SRT-finder — intelligent text parsing & search tool",
        ],
    },
    {
        name: "C++",
        icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(123, 47, 255, 0.15)",
        description:
            "Used for performance-critical applications, systems programming, and optimized inference pipelines. Strong foundation in data structures and algorithms.",
        experience: [
            "Optimized inference pipelines for real-time processing",
            "Data structures & algorithms competitive programming",
            "Systems-level programming and memory management",
        ],
    },
    {
        name: "YOLO",
        icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(255, 0, 229, 0.15)",
        description:
            "Expertise in YOLO object detection models for real-time visual recognition. Applied across robotics and traffic sign detection use cases.",
        experience: [
            "Real-time object detection for robotics at Forsche",
            "Integrated YOLO with OpenCV pipelines",
            "Custom training on domain-specific datasets",
        ],
    },
    {
        name: "ML",
        icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(0, 255, 136, 0.15)",
        description:
            "Strong foundation in classical and modern Machine Learning algorithms — from regression and classification to ensemble methods and feature engineering.",
        experience: [
            "ML algorithm design & deployment at Polenza",
            "Data pipeline architecture for production systems",
            "Feature engineering and model evaluation",
        ],
    },
    {
        name: "Deep Learning",
        icon: <Cpu className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(0, 240, 255, 0.15)",
        description:
            "Core expertise in neural network architectures, training strategies, loss functions, and optimization. Hands-on with PyTorch and TensorFlow.",
        experience: [
            "AI & ML Engineer at Forsche — DL algorithm development",
            "NeRF & 3D reconstruction at Tech Jose",
            "Road Sign Detection with Mamba Transformer",
            "Teaching DL concepts through community initiatives",
        ],
    },
    {
        name: "OpenCV",
        icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(123, 47, 255, 0.15)",
        description:
            "Proficient in computer vision with OpenCV for image processing, feature extraction, and real-time video analytics in robotics applications.",
        experience: [
            "OpenCV + YOLO for robotics at Forsche",
            "Image preprocessing for Deep Learning pipelines",
            "Real-time video stream processing",
        ],
    },
    {
        name: "CNN",
        icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(255, 0, 229, 0.15)",
        description:
            "Deep expertise in Convolutional Neural Networks for image classification, object detection, and visual feature extraction.",
        experience: [
            "Road Sign Detection — custom CNN architectures",
            "Feature extraction for 3D reconstruction pipelines",
            "Transfer learning with pretrained backbones",
        ],
    },
    {
        name: "RNN",
        icon: <Repeat className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(0, 255, 136, 0.15)",
        description:
            "Experience with Recurrent Neural Networks and sequence models including LSTM and GRU for temporal and sequential data processing.",
        experience: [
            "Sequential data modeling and time-series analysis",
            "Text processing and NLP applications",
            "Sequence-to-sequence model architectures",
        ],
    },
    {
        name: "Transformers",
        icon: <Box className="w-8 h-8 md:w-10 md:h-10" />,
        color: "rgba(0, 240, 255, 0.15)",
        description:
            "Working knowledge of Transformer architectures including attention mechanisms, applied through the Mamba Transformer for state-of-the-art results.",
        experience: [
            "Mamba Transformer for Road Sign Detection (98% accuracy)",
            "Attention mechanism implementations",
            "State-space model exploration",
        ],
    },
];

export default function ConvolutionalLayer() {
    const [selected, setSelected] = useState<Skill | null>(null);

    return (
        <section
            id="conv-layer"
            className="neural-layer relative overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%)",
                }}
            />

            <LayerHeader
                layerNumber="01"
                title="Convolutional Layer"
                subtitle="Feature Mapping // Skill Kernels & Activation Functions"
                accentColor="var(--accent-violet)"
            />

            <div className="h-8 md:h-12" />

            <div className="relative z-10 w-full max-w-6xl">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-sm tracking-[0.2em] uppercase mb-12 text-center"
                    style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-jetbrains)",
                    }}
                >
                    ── Convolutional Kernels (3×3) ──
                </motion.h3>

                <div className="h-4" />

                {/* Main layout: Grid + Detail Panel */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* 3x3 Skill Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                            {skills.map((skill, idx) => {
                                const isActive = selected?.name === skill.name;
                                return (
                                    <motion.button
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setSelected(isActive ? null : skill)}
                                        className="glass-card cursor-pointer flex flex-col items-center justify-center transition-all duration-300"
                                        style={{
                                            padding: "clamp(20px, 3vw, 32px) clamp(12px, 2vw, 20px)",
                                            background: isActive
                                                ? skill.color
                                                : "var(--glass-bg)",
                                            borderColor: isActive
                                                ? "rgba(0, 240, 255, 0.4)"
                                                : "var(--glass-border)",
                                            boxShadow: isActive
                                                ? "0 0 30px rgba(0, 240, 255, 0.15)"
                                                : "none",
                                        }}
                                    >
                                        <div className="mb-2 md:mb-3 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 transition-colors duration-300" style={{ color: isActive ? 'var(--accent-cyan)' : 'white', opacity: isActive ? 1 : 0.9 }}>
                                            {skill.icon}
                                        </div>
                                        <span
                                            className="text-xs md:text-sm font-medium block"
                                            style={{
                                                fontFamily: "var(--font-outfit)",
                                                color: isActive
                                                    ? "var(--accent-cyan)"
                                                    : "var(--text-primary)",
                                            }}
                                        >
                                            {skill.name}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Hint text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-[11px] tracking-widest uppercase mt-6"
                            style={{
                                color: "var(--text-muted)",
                                fontFamily: "var(--font-jetbrains)",
                            }}
                        >
                            click a kernel to inspect →
                        </motion.p>
                    </div>

                    {/* Detail Panel */}
                    <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[420px]">
                        <AnimatePresence mode="wait">
                            {selected ? (
                                <motion.div
                                    key={selected.name}
                                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="glass-card relative h-full"
                                    style={{
                                        padding: "clamp(32px, 4vw, 48px)",
                                        background: selected.color,
                                        borderColor: "rgba(0, 240, 255, 0.2)",
                                    }}
                                >
                                    {/* Close button */}
                                    <button
                                        onClick={() => setSelected(null)}
                                        className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        <X size={14} />
                                    </button>

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 flex items-center justify-center" style={{ color: 'white' }}>
                                            {selected.icon}
                                        </div>
                                        <div>
                                            <h4
                                                className="text-2xl font-bold"
                                                style={{ fontFamily: "var(--font-outfit)" }}
                                            >
                                                {selected.name}
                                            </h4>
                                            <p
                                                className="text-[10px] tracking-widest uppercase mt-1"
                                                style={{
                                                    color: "var(--accent-cyan)",
                                                    fontFamily: "var(--font-jetbrains)",
                                                }}
                                            >
                                                kernel.inspect()
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed mb-8"
                                        style={{
                                            color: "var(--text-secondary)",
                                            borderLeft: "2px solid rgba(0, 240, 255, 0.2)",
                                            paddingLeft: "16px",
                                        }}
                                    >
                                        {selected.description}
                                    </p>

                                    {/* Experience */}
                                    <div>
                                        <p
                                            className="text-[10px] tracking-[0.2em] uppercase mb-4"
                                            style={{
                                                color: "var(--text-muted)",
                                                fontFamily: "var(--font-jetbrains)",
                                            }}
                                        >
                                            applied_in:
                                        </p>
                                        <div className="space-y-4">
                                            {selected.experience.map((exp, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.08 }}
                                                    className="flex items-start gap-4 text-xs"
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                        fontFamily: "var(--font-jetbrains)",
                                                    }}
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-[5px] flex-shrink-0"
                                                        style={{ background: "var(--accent-cyan)" }}
                                                    />
                                                    <span className="leading-relaxed">{exp}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="glass-card h-full flex flex-col items-center justify-center text-center"
                                    style={{
                                        padding: "clamp(32px, 4vw, 48px)",
                                        minHeight: "420px",
                                    }}
                                >
                                    <div
                                        className="text-5xl mb-6 opacity-20"
                                    >
                                        🔍
                                    </div>
                                    <p
                                        className="text-sm mb-2"
                                        style={{
                                            color: "var(--text-muted)",
                                            fontFamily: "var(--font-outfit)",
                                        }}
                                    >
                                        Select a skill kernel
                                    </p>
                                    <p
                                        className="text-[11px]"
                                        style={{
                                            color: "rgba(240, 240, 245, 0.2)",
                                            fontFamily: "var(--font-jetbrains)",
                                        }}
                                    >
                                        kernel_output = None
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
