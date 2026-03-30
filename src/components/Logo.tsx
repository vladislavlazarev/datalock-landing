/* eslint-disable @next/next/no-img-element */

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/icon.png"
      alt="DataLock"
      width={size}
      height={size}
      style={{ mixBlendMode: "screen" }}
      draggable={false}
    />
  );
}
