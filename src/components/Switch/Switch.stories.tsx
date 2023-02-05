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

export function Size() {
  return (
    <StoryContainer>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Switch id="small-switch" size="small" />
          <Label htmlFor="small-switch" className="text-label5Bold">
            Small Switch
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="medium-switch" size="medium" />
          <Label htmlFor="medium-switch">Medium Switch</Label>
        </div>
      </div>
    </StoryContainer>
  );
}

export function Disabled() {
  return (
    <StoryContainer className="space-x-2">
      <Switch id="disabled-switch" disabled defaultChecked />
      <Label htmlFor="disabled-switch">Disabled Switch</Label>
    </StoryContainer>
  );
}
