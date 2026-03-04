"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    glowColor?: "cyan" | "magenta" | "violet";
    delay?: number;
}

export default function GlassCard({
    children,
    className = "",
    glowColor,
    delay = 0,
}: GlassCardProps) {
    const glowClass = glowColor ? `glow-${glowColor}` : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.4, 0, 0.2, 1],
            }}
            className={`glass-card ${glowClass} ${className}`}
        >
            {children}
        </motion.div>
    );
}
