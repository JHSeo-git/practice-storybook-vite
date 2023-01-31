import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: {
    AvatarImage,
    AvatarFallback,
  },
} as ComponentMeta<typeof Avatar>;

export const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <StoryContainer>
      <Avatar {...args}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
          alt="Pedro Duarte"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function Fallback() {
  return (
    <StoryContainer>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </StoryContainer>
  );
}
