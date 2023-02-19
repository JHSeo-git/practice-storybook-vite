import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Demo } from './Combobox';

export default {
  title: 'Components/Combobox',
  component: Demo,
} as ComponentMeta<typeof Demo>;

export const Template: ComponentStory<typeof Demo> = () => {
  return (
    <StoryContainer>
      <div className="w-[180px]">
        <Demo />
      </div>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';
