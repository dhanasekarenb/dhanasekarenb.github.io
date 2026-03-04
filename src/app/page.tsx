"use client";

import dynamic from "next/dynamic";
import NeuralConnector from "@/components/NeuralConnector";
import InputLayer from "@/components/layers/InputLayer";
import ConvolutionalLayer from "@/components/layers/ConvolutionalLayer";
import PoolingLayer from "@/components/layers/PoolingLayer";
import FullyConnectedLayer from "@/components/layers/FullyConnectedLayer";
import OutputLayer from "@/components/layers/OutputLayer";

// Dynamic import for canvas-based background (client only)
const NeuralBackground = dynamic(
  () => import("@/components/NeuralBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <NeuralBackground />

      <main className="relative z-10">
        {/* LAYER 00 — INPUT (Hero) */}
        <InputLayer />

        <NeuralConnector />

        {/* LAYER 01 — CONVOLUTIONAL (Skills) */}
        <ConvolutionalLayer />

        <NeuralConnector />

        {/* LAYER 02 — POOLING (Experience) */}
        <PoolingLayer />

        <NeuralConnector />

        {/* LAYER 03 — FULLY CONNECTED (Projects) */}
        <FullyConnectedLayer />

        <NeuralConnector />

        {/* LAYER 04 — OUTPUT (Contact) */}
        <OutputLayer />
      </main>
    </>
  );
}
