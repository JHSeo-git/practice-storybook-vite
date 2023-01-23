import * as typography from './Typography.contstants';
import { Box, TypographyRow } from './Typography.UI';

function Heading() {
  return (
    <Box>
      {Object.entries(typography.heading).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function Title() {
  return (
    <Box>
      {Object.entries(typography.title).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function Subtitle() {
  return (
    <Box>
      {Object.entries(typography.subtitle).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function Body() {
  return (
    <Box>
      {Object.entries(typography.body).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function Caption() {
  return (
    <Box>
      {Object.entries(typography.caption).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function Label() {
  return (
    <Box>
      {Object.entries(typography.label).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo.fontSize}
          lineHeight={typo.lineHeight}
          fontWeight={typo.fontWeight}
        />
      ))}
    </Box>
  );
}

function TypographySemantic() {
  return (
    <>
      <Heading />
      <Title />
      <Subtitle />
      <Body />
      <Caption />
      <Label />
    </>
  );
}

export default TypographySemantic;
