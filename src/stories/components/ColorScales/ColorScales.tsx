import * as colors from './ColorScales.constants';

function ScaleLabel({ length, hasEmptyHead }: { length: number; hasEmptyHead?: boolean }) {
  return (
    <div className="flex flex-nowrap items-center gap-0.5">
      {hasEmptyHead && <ColorBlockTitle />}
      {Array.from({ length }).map((_, index) => (
        <div key={index + 1} className="flex-1">
          <p className="text-base-weak my-1 text-center text-sm tabular-nums">{index + 1}</p>
        </div>
      ))}
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 mb-1 text-lg text-base-hi">{children}</h3>;
}

function ColorBlockWrapper({ children }: { children: React.ReactNode }) {
  return <div className="mb-0.5 flex flex-nowrap items-center gap-0.5">{children}</div>;
}

function ColorBlockTitle({ text }: { text?: string }) {
  return (
    <div className="flex w-20 items-center">
      {text && <p className="text-base-weak text-sm">{text}</p>}
    </div>
  );
}

function ColorBlock({ color }: { color: string }) {
  return (
    <div className="flex-1">
      <div title={color} className="h-10" style={{ backgroundColor: color }} />
    </div>
  );
}

function GrayScale() {
  return (
    <>
      <Title>Gray</Title>
      <ScaleLabel length={Object.keys(colors.gray).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="gray" />
        {Object.values(colors.gray).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="grayDark" />
        {Object.values(colors.grayDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function RedScale() {
  return (
    <>
      <Title>Red</Title>
      <ScaleLabel length={Object.keys(colors.red).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="red" />
        {Object.values(colors.red).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="redDark" />
        {Object.values(colors.redDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function GreenScale() {
  return (
    <>
      <Title>Green</Title>
      <ScaleLabel length={Object.keys(colors.green).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="green" />
        {Object.values(colors.green).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="greenDark" />
        {Object.values(colors.greenDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function BlueScale() {
  return (
    <>
      <Title>Blue</Title>
      <ScaleLabel length={Object.keys(colors.blue).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="blue" />
        {Object.values(colors.blue).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="blueDark" />
        {Object.values(colors.blueDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function YellowScale() {
  return (
    <>
      <Title>Yellow</Title>
      <ScaleLabel length={Object.keys(colors.yellow).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="yellow" />
        {Object.values(colors.yellow).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="yellowDark" />
        {Object.values(colors.yellowDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function VioletScale() {
  return (
    <>
      <Title>Violet</Title>
      <ScaleLabel length={Object.keys(colors.violet).length} hasEmptyHead />
      <ColorBlockWrapper>
        <ColorBlockTitle text="violet" />
        {Object.values(colors.violet).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
      <ColorBlockWrapper>
        <ColorBlockTitle text="violetDark" />
        {Object.values(colors.violetDark).map((color) => (
          <ColorBlock key={color} color={color} />
        ))}
      </ColorBlockWrapper>
    </>
  );
}

function ColorScales() {
  return (
    <>
      <GrayScale />
      <RedScale />
      <GreenScale />
      <BlueScale />
      <YellowScale />
      <VioletScale />
    </>
  );
}

export default ColorScales;
