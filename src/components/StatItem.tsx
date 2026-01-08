import { memo } from "react";

const StatItem = memo(function StatItem({
  value,
  label,
  suffix = "",
}: {
  value: string;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl lg:text-4xl font-bold text-white">
        <span className="inline-block min-w-[5ch]">
          {value} {suffix}
        </span>
      </span>
      <span className="text-sm lg:text-md font-unbounded text-gray-300">
        {label}
      </span>
    </div>
  );
});

export default StatItem;
