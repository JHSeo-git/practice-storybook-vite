import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Separator } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

export const Template: ComponentStory<typeof Separator> = (args) => {
  return (
    <StoryContainer>
      <div>
        <div className="space-y-1">
          <h4 className="text-subtitle2Bold">Radix Primitives</h4>
          <p className="text-label5Regular text-base-weak">An open-source UI component library.</p>
        </div>
        <Separator className="my-4" {...args} />
        <div className="flex h-5 items-center space-x-4 text-bodyNormal2Regular">
          <span>Blog</span>
          <Separator orientation="vertical" />
          <span>Docs</span>
          <Separator orientation="vertical" />
          <span>Source</span>
        </div>
      </div>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';
