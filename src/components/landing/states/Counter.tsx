// components/Counter.tsx
"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  value: string;
};

function Counter({ value }: CounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const formatCount = (count: string) => {
    const cleanValue = count.replace(/,/g, "");

    if (cleanValue.includes("M")) {
      return {
        end: parseFloat(cleanValue.replace("M", "")),
        suffix: "M",
        decimals: 2,
      };
    }

    if (cleanValue.includes("K")) {
      return {
        end: parseFloat(cleanValue.replace("K", "")),
        suffix: "K",
        decimals: 1,
      };
    }

    return {
      end: parseInt(cleanValue, 10),
      suffix: "",
      decimals: 0,
    };
  };

  const { end, suffix, decimals } = formatCount(value);

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={3}
          decimals={decimals}
          separator=","
          suffix={suffix+"+"}
        />
      ) : (
        "0"
      )}
    </div>
  );
}

export default Counter;
