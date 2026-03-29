export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div
      role="img"
      aria-label="DataLock"
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        background: "linear-gradient(135deg, #34d399, #10B981)",
        WebkitMaskImage: "url(/logo.png), linear-gradient(#fff 0 0)",
        WebkitMaskSize: "contain, cover",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskComposite: "xor",
        maskImage: "url(/logo.png), linear-gradient(#fff 0 0)",
        maskSize: "contain, cover",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskComposite: "exclude",
      }}
    />
  );
}
