import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Input } from '../Input';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const Template: ComponentStory<typeof Label> = (args) => {
  return (
    <StoryContainer>
      <Label {...args} />
    </StoryContainer>
  );
};
Template.args = {
  children: 'Label',
};
Template.storyName = 'Default';

export function WithInput() {
  return (
    <StoryContainer>
      <div className="flex w-full items-center space-x-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email" />
      </div>
    </StoryContainer>
  );
}
