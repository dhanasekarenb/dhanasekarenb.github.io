"use client";

import { motion } from "framer-motion";

export default function NeuralConnector() {
    return (
        <div className="relative w-full flex flex-col items-center py-8 md:py-12">
            {/* Vertical data-flow line */}
            <div className="relative h-24 md:h-32 w-px">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, transparent, var(--accent-cyan), transparent)",
                    }}
                />
                {/* Pulsing dot */}
                <motion.div
                    animate={{ y: [0, 96], opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{
                        background: "var(--accent-cyan)",
                        boxShadow: "0 0 12px rgba(0, 240, 255, 0.8)",
                    }}
                />
            </div>
            {/* Arrow */}
            <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="mt-1"
            >
                <path
                    d="M1 1L6 6L11 1"
                    stroke="var(--accent-cyan)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
