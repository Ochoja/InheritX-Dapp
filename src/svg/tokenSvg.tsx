import type { FC } from "react";
export function BTCIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3851 15.2754C12.4961 15.2714 14.9251 15.2624 14.8971 13.7174C14.8701 12.1374 12.5371 12.2324 11.4001 12.2794C11.2721 12.2854 11.1614 12.2891 11.0681 12.2904L11.1201 15.2774C11.1961 15.2754 11.2844 15.2747 11.3851 15.2754ZM11.2671 10.9224C12.1941 10.9214 14.2171 10.9194 14.1931 9.5144C14.1671 8.0774 12.2241 8.1624 11.2751 8.2044C11.1684 8.20973 11.0757 8.21306 10.9971 8.2144L11.0441 10.9234L11.2671 10.9224Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.09616 23.6415C15.5262 25.2445 22.0382 21.3315 23.6412 14.9035C25.2442 8.47448 21.3302 1.96248 14.9002 0.360482C8.47416 -1.24352 1.96216 2.67048 0.360165 9.10048C-1.24284 15.5285 2.67017 22.0405 9.09717 23.6425M13.3792 6.62248C15.1332 6.74648 16.5292 7.26048 16.7122 8.86448C16.8482 10.0385 16.3682 10.7535 15.5892 11.1675C16.8892 11.4555 17.7142 12.2105 17.5842 13.9385C17.4232 16.0835 15.8362 16.6865 13.5582 16.8575L13.5962 19.1075L12.2402 19.1315L12.2012 16.9115C11.8505 16.9181 11.4892 16.9208 11.1172 16.9195L11.1572 19.1495L9.80116 19.1735L9.76116 16.9195L9.37817 16.9225C9.1835 16.9225 8.98816 16.9245 8.79216 16.9285L7.02617 16.9585L7.26717 15.3345C7.26717 15.3345 8.27116 15.3325 8.25317 15.3175C8.63717 15.3095 8.73417 15.0325 8.75517 14.8585L8.69316 11.3005L8.79016 11.2985H8.83617C8.7884 11.2927 8.74027 11.2903 8.69217 11.2915L8.64816 8.75148C8.59116 8.47748 8.40716 8.16148 7.85816 8.17148C7.87316 8.15148 6.87217 8.18848 6.87217 8.18848L6.84617 6.74048L8.71817 6.70848V6.71548C9.00016 6.71015 9.28783 6.70148 9.58117 6.68948L9.54317 4.46048L10.8992 4.43748L10.9372 6.62148C11.2992 6.60848 11.6632 6.59448 12.0202 6.58848L11.9822 4.41848L13.3392 4.39448L13.3792 6.62248Z"
        fill="white"
      />
    </svg>
  );
}

interface TokenIconProps {
  symbol: string;
  size?: "sm" | "md" | "lg";
}

export const TokenIcon: FC<TokenIconProps> = ({ symbol, size = "md" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 text-[10px]",
    md: "w-6 h-6 text-xs",
    lg: "w-8 h-8 text-sm",
  };

  const getIconColor = (symbol: string) => {
    switch (symbol.toUpperCase()) {
      case "STARK":
        return "bg-blue-600";
      case "USDC":
        return "bg-blue-400";
      case "ETH":
        return "bg-purple-500";
      case "USDT":
        return "bg-green-500";
      case "SOL":
        return "bg-green-400";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full ${getIconColor(
        symbol
      )} flex items-center justify-center flex-shrink-0`}
    >
      <span className="font-medium text-white">{symbol.charAt(0)}</span>
    </div>
  );
};
