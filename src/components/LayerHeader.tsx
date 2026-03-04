"use client";

import { motion } from "framer-motion";

interface LayerHeaderProps {
    layerNumber: string;
    title: string;
    subtitle: string;
    accentColor?: string;
}

export default function LayerHeader({
    layerNumber,
    title,
    subtitle,
    accentColor = "var(--accent-cyan)",
}: LayerHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center md:text-left w-full max-w-6xl"
        >
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <span
                    className="font-mono text-xs tracking-[0.3em] uppercase"
                    style={{ color: accentColor, fontFamily: "var(--font-jetbrains)" }}
                >
                    LAYER {layerNumber}
                </span>
                <div
                    className="h-px w-16 md:w-24"
                    style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                />
            </div>
            <h2
                className="text-3xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-outfit)" }}
            >
                {title}
            </h2>
            <p
                className="text-sm md:text-base"
                style={{
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-jetbrains)",
                }}
            >
                {subtitle}
            </p>
        </motion.div>
    );
}
