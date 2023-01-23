import * as typography from './Typography.contstants';
import { Box, TypographyRow } from './Typography.UI';

function FontSizes() {
  return (
    <Box>
      {Object.entries(typography.fontSizes).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typo}
          lineHeight={typography.body.bodyNormal1Bold.lineHeight}
          fontWeight={typography.body.bodyNormal1Bold.fontWeight}
        />
      ))}
    </Box>
  );
}

function LineHeights() {
  return (
    <Box>
      {Object.entries(typography.lineHeights).map(([key, typo]) => (
        <TypographyRow
          key={key}
          label={key}
          fontSize={typography.body.bodyNormal1Bold.fontSize}
          lineHeight={typo}
          fontWeight={typography.body.bodyNormal1Bold.fontWeight}
        />
      ))}
    </Box>
  );
}

function TypographyScale() {
  return (
    <>
      <FontSizes />
      <LineHeights />
    </>
  );
}

export default TypographyScale;
