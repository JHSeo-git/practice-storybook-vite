import * as colors from './Color.constants';
import { ColorBlock, ColorBlockTitle, ColorBlockWrapper, ScaleLabel, Title } from './Color.UI';

function GrayScale() {
  return (
    <div className="mb-10">
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
    </div>
  );
}

function RedScale() {
  return (
    <div className="mb-10">
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
    </div>
  );
}

function GreenScale() {
  return (
    <div className="mb-10">
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
    </div>
  );
}

function BlueScale() {
  return (
    <div className="mb-10">
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
    </div>
  );
}

function YellowScale() {
  return (
    <div className="mb-10">
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
    </div>
  );
}

function VioletScale() {
  return (
    <div className="mb-10">
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
    </div>
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
