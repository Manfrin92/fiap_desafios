// TODO: REMOVE and add shadcn/ui
type SkeletonBoxProps = {
  height: React.CSSProperties["height"];
};

export default function SkeletonBox({ height }: SkeletonBoxProps) {
  return (
    <div
      style={{
        width: "100%",
        height: height,
        backgroundColor: "rgb(151, 151, 151)",
        borderRadius: "0.5rem",
        animation: "pulse 1.5s infinite",
      }}
    />
  );
}
