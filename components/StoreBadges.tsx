import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6780317167";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.bendlogic.app";

export default function StoreBadges({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download BendLogic on the App Store"
        className="transition-transform duration-200 hover:-translate-y-1"
      >
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={180}
          height={60}
          className="h-[56px] w-auto"
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get BendLogic on Google Play"
        className="transition-transform duration-200 hover:-translate-y-1"
      >
        <Image
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={189}
          height={56}
          className="h-[56px] w-auto"
        />
      </a>
    </div>
  );
}
