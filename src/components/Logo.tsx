import Image from "next/image";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="DataLock"
      width={size}
      height={size}
      className="object-contain"
      style={{
        filter: "invert(1) hue-rotate(10deg) brightness(1.3) saturate(1.6)",
        mixBlendMode: "screen",
      }}
      priority
    />
  );
}
