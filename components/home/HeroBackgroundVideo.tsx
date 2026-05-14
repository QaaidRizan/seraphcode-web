"use client";

import { useCallback, useEffect, useRef } from "react";

/** Below 1 = slower than recorded (e.g. 0.7 ≈ 70% speed). Above 1 = faster. */
const HERO_VIDEO_PLAYBACK_RATE = 0.65;

export function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  const applyPlaybackRate = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.defaultPlaybackRate = HERO_VIDEO_PLAYBACK_RATE;
    el.playbackRate = HERO_VIDEO_PLAYBACK_RATE;
  }, []);

  useEffect(() => {
    applyPlaybackRate();
  }, [applyPlaybackRate]);

  return (
    <video
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full min-h-full min-w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={applyPlaybackRate}
      onPlaying={applyPlaybackRate}
      onRateChange={applyPlaybackRate}
      aria-hidden
    >
      <source src="/assets/images/herobg.mp4" type="video/mp4" />
    </video>
  );
}
