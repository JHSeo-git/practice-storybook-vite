import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { AspectRatio } from './AspectRatio';

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
} as ComponentMeta<typeof AspectRatio>;

export const Template: ComponentStory<typeof AspectRatio> = (args) => {
  return (
    <StoryContainer>
      <div className="w-[300px] overflow-hidden rounded-md shadow-md ">
        <AspectRatio {...args}>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </div>
    </StoryContainer>
  );
};
Template.args = {
  ratio: 16 / 9,
};
Template.storyName = 'Default';
