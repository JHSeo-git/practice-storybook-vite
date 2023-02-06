import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Label } from '../Label';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <StoryContainer>
      <Input {...args} />
    </StoryContainer>
  );
};
Template.args = {
  placeholder: 'Email',
  disabled: false,
  type: 'email',
};
Template.storyName = 'Default';

export function Disabled() {
  return (
    <StoryContainer>
      <Input placeholder="Email" disabled />
    </StoryContainer>
  );
}

export function WithLabel() {
  return (
    <StoryContainer>
      <div className="w-full">
        <div className="mb-10 flex w-full items-center space-x-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="flex w-full flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
      </div>
    </StoryContainer>
  );
}

export function WithHelperText() {
  return (
    <StoryContainer>
      <div className="w-full">
        <div className="mb-10 flex w-full flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
          <p className="pl-2 text-label5Regular text-info-base">Enter your email address.</p>
        </div>
        <div className="flex w-full flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            defaultValue="incorrect email address"
          />
          <p className="pl-2 text-label5Regular text-danger-base">
            Please enter the correct email format.
          </p>
        </div>
      </div>
    </StoryContainer>
  );
}
