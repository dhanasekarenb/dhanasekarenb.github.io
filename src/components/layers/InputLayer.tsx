"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import LayerHeader from "@/components/LayerHeader";

export default function InputLayer() {
    const tensorGrid = [
        [0.92, 0.15, 0.78, 0.44, 0.61],
        [0.33, 0.87, 0.12, 0.95, 0.28],
        [0.56, 0.41, 0.73, 0.19, 0.84],
        [0.67, 0.23, 0.58, 0.36, 0.91],
        [0.14, 0.82, 0.47, 0.69, 0.53],
    ];

    return (
        <section id="input-layer" className="neural-layer relative overflow-hidden">
            {/* Ambient glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
                }}
            />

            {/* Section Label */}
            <LayerHeader
                layerNumber="00"
                title="Input Layer"
                subtitle="Feature Extraction // High-Level Persona"
                accentColor="var(--accent-cyan)"
            />

            <div className="h-8 md:h-12" />

            <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
                {/* Input Tensor Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    className="relative"
                >
                    <div className="grid grid-cols-5 gap-1.5">
                        {tensorGrid.flat().map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: i * 0.04,
                                    duration: 0.4,
                                    ease: "backOut",
                                }}
                                className="kernel-cell"
                                style={{
                                    background: `rgba(0, 240, 255, ${val * 0.15})`,
                                    width: "clamp(32px, 5vw, 44px)",
                                    height: "clamp(32px, 5vw, 44px)",
                                }}
                            >
                                <span style={{ fontSize: "clamp(9px, 1.2vw, 11px)" }}>
                                    {val.toFixed(2)}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center text-xs tracking-widest uppercase mt-4"
                        style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-jetbrains)",
                        }}
                    >
                        input_tensor.shape = [1, 5, 5, 3]
                    </motion.p>
                </motion.div>

                <div className="h-12 md:h-16" />

                {/* Profile Photo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2"
                    style={{
                        borderColor: "rgba(0, 240, 255, 0.3)",
                        boxShadow: "0 0 40px rgba(0, 240, 255, 0.15)",
                    }}
                >
                    <Image
                        src="/profile.jpg"
                        alt="Dhanasekaren Balasubramanian"
                        width={176}
                        height={176}
                        className="w-full h-full object-cover object-top"
                        priority
                    />
                </motion.div>

                <div className="h-10 md:h-12" />

                {/* Name & Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center flex flex-col items-center"
                >
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        Dhanasekaren
                        <br />
                        <span className="text-3xl md:text-5xl lg:text-6xl">
                            Balasubramanian
                        </span>
                    </h1>

                    <div className="h-6" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div
                            className="h-px w-10"
                            style={{ background: "rgba(0, 240, 255, 0.4)" }}
                        />
                        <p
                            className="text-sm md:text-base tracking-[0.12em] uppercase"
                            style={{
                                color: "var(--accent-cyan)",
                                fontFamily: "var(--font-jetbrains)",
                            }}
                        >
                            Machine Learning & Deep Learning
                        </p>
                        <div
                            className="h-px w-10"
                            style={{ background: "rgba(0, 240, 255, 0.4)" }}
                        />
                    </motion.div>
                </motion.div>

                <div className="h-10 md:h-14" />

                {/* About Me */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.7 }}
                    className="glass-card p-8 md:p-10 max-w-2xl w-full text-center"
                >
                    <p
                        className="text-xs tracking-[0.25em] uppercase mb-4"
                        style={{
                            color: "var(--accent-cyan)",
                            fontFamily: "var(--font-jetbrains)",
                        }}
                    >
                        feature_vector.about()
                    </p>
                    <p
                        className="text-sm md:text-base leading-relaxed"
                        style={{
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-outfit)",
                        }}
                    >
                        Passionate about Deep Learning and Data Science, with strong
                        proficiency in Python. Skilled in solving complex problems, actively
                        contributing to the community through teaching initiatives, and
                        engaging in collaborative learning.
                    </p>
                </motion.div>

                <div className="h-12 md:h-16" />

                {/* Scroll CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span
                        className="text-xs uppercase tracking-widest"
                        style={{
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-jetbrains)",
                        }}
                    >
                        feed forward
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown size={20} style={{ color: "var(--accent-cyan)" }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
