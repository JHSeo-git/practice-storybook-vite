export function ScaleLabel({ length, hasEmptyHead }: { length: number; hasEmptyHead?: boolean }) {
  return (
    <div className="flex flex-nowrap items-center gap-0.5">
      {hasEmptyHead && <ColorBlockTitle />}
      {Array.from({ length }).map((_, index) => (
        <div key={index + 1} className="flex-1">
          <p className="my-1 text-center text-sm tabular-nums text-base-weak">{index + 1}</p>
        </div>
      ))}
    </div>
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 mb-1 text-lg text-base-hi">{children}</h3>;
}

export function ColorBlockWrapper({ children }: { children: React.ReactNode }) {
  return <div className="mb-0.5 flex flex-nowrap items-center gap-0.5">{children}</div>;
}

export function ColorBlockTitle({ text }: { text?: string }) {
  return (
    <div className="flex w-20 items-center">
      {text && <p className="text-sm text-base-weak">{text}</p>}
    </div>
  );
}

export function ColorBlock({ color }: { color: string }) {
  return (
    <div className="flex-1">
      <div title={color} className="h-10" style={{ backgroundColor: color }} />
    </div>
  );
}
