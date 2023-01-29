import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Label } from '../Label';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { decisions, fruits } from './RadioGroup.sample';

const ContentBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  subcomponents: { RadioGroupItem },
} as ComponentMeta<typeof RadioGroup>;

export const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <StoryContainer>
      <RadioGroup defaultValue={fruits.at(0)?.value} {...args}>
        {fruits.map((fruit, index) => (
          <ContentBox key={index}>
            <RadioGroupItem value={fruit.value} id={fruit.value} disabled={fruit.disabled} />
            <Label htmlFor={fruit.value}>{fruit.textValue}</Label>
          </ContentBox>
        ))}
      </RadioGroup>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function Horizontal() {
  return (
    <StoryContainer>
      <RadioGroup defaultValue={decisions.at(0)?.value} orientation="horizontal">
        {decisions.map((decision, index) => (
          <ContentBox key={index}>
            <RadioGroupItem value={decision.value} id={decision.value} />
            <Label htmlFor={decision.value}>{decision.textValue}</Label>
          </ContentBox>
        ))}
      </RadioGroup>
    </StoryContainer>
  );
}

export function Disabled() {
  return (
    <StoryContainer>
      <RadioGroup defaultValue={fruits.at(0)?.value} disabled>
        {fruits.map((fruit, index) => (
          <ContentBox key={index}>
            <RadioGroupItem value={fruit.value} id={fruit.value} />
            <Label htmlFor={fruit.value}>{fruit.textValue}</Label>
          </ContentBox>
        ))}
      </RadioGroup>
    </StoryContainer>
  );
}
