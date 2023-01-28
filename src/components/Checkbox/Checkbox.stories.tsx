import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Label } from '../Label';
import { Checkbox } from './Checkbox';

function CheckboxLabel({
  htmlFor,
  children,
  ...props
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...props}
    >
      {children}
    </Label>
  );
}

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Template: ComponentStory<typeof Checkbox> = (args) => {
  return (
    <StoryContainer className="space-x-2">
      <Checkbox id="default-checkbox" {...args} />
      <CheckboxLabel htmlFor="default-checkbox">Checkbox</CheckboxLabel>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function WithText() {
  return (
    <StoryContainer>
      <div className="flex items-start justify-center space-x-2">
        <Checkbox id="with-text-checkbox" />
        <div className="flex flex-col gap-1.5">
          <CheckboxLabel htmlFor="with-text-checkbox">Checkbox</CheckboxLabel>
          <p className="text-bodyNormal2Regular text-base-weak">
            You can add some text to describe the checkbox.
          </p>
        </div>
      </div>
    </StoryContainer>
  );
}

export function Disabled() {
  return (
    <StoryContainer className="space-x-2">
      <Checkbox id="disabled-checkbox" disabled />
      <CheckboxLabel htmlFor="disabled-checkbox">Disabled Checkbox</CheckboxLabel>
    </StoryContainer>
  );
}
