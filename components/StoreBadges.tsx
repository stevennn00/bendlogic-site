import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/id6780317167";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.bendlogic.app";

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a className="store-link" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download BendLogic on the App Store">
        <Image src="/app-store-badge.svg" alt="Download on the App Store" width={180} height={60} />
      </a>
      <a className="store-link" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get BendLogic on Google Play">
        <Image src="/google-play-badge.png" alt="Get it on Google Play" width={189} height={56} />
      </a>
    </div>
  );
}
