// const SAMPLE_TEXT_EN = 'Was he a beast if music could move him so?';
const SAMPLE_TEXT_KO = '모든 인류 구성원의 천부의 존엄성과 동등하고 양도할 수 없는 권리를 인정하는';

export function Box({ children }: { children: React.ReactNode }) {
  return <div className="mt-7 mb-10 space-y-4 rounded border py-7 px-5 shadow">{children}</div>;
}

export function TypographyRow({
  label,
  fontSize,
  lineHeight,
  fontWeight,
}: {
  label: string;
  fontSize: string | number;
  lineHeight: string | number;
  fontWeight: string | number;
}) {
  return (
    <div className="flex flex-nowrap items-center gap-2">
      <p className="w-36 text-xs font-bold text-base-hi">{label}</p>
      <div className="min-w-0 flex-1">
        <p
          className="min-w-0 truncate bg-gray-100"
          style={{
            fontSize,
            lineHeight,
            fontWeight,
          }}
        >
          {SAMPLE_TEXT_KO}
        </p>
      </div>
    </div>
  );
}
