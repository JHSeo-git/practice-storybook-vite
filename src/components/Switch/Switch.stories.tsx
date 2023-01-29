import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Label } from '../Label';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Template: ComponentStory<typeof Switch> = (args) => {
  return (
    <StoryContainer className="space-x-2">
      <Switch id="default-switch" {...args} />
      <Label htmlFor="default-switch">Switch</Label>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function Disabled() {
  return (
    <StoryContainer className="space-x-2">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch">Disabled Switch</Label>
    </StoryContainer>
  );
}
