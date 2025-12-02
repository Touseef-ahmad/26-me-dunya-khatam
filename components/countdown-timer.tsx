"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date(2026, 0, 1).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  const SegmentDisplay = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center gap-2 md:gap-4">
      <div className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-400 bg-black bg-opacity-40 px-4 md:px-6 py-2 md:py-4 rounded-lg border-2 border-cyan-400 shadow-lg shadow-cyan-400 tracking-wider">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-sm sm:text-base md:text-lg font-semibold text-cyan-300 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      {/* Countdown display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <SegmentDisplay value={timeLeft.days} label="Days" />
        <SegmentDisplay value={timeLeft.hours} label="Hours" />
        <SegmentDisplay value={timeLeft.minutes} label="Minutes" />
        <SegmentDisplay value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="w-full max-w-md md:max-w-2xl h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-lg shadow-cyan-400" />
    </div>
  );
}
