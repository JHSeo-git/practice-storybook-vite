import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Separator } from '../Separator';
import { ScrollArea, ScrollBar } from './ScrollArea';

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  subcomponents: { ScrollBar },
} as ComponentMeta<typeof ScrollArea>;

export const Template: ComponentStory<typeof ScrollArea> = (args) => {
  return (
    <StoryContainer>
      <ScrollArea {...args} className="h-72 w-48 rounded-md border border-base-7 shadow-sm">
        <div className="p-4">
          <h4 className="mb-4 text-subtitle2Bold">Tags</h4>
          {TAGS.map((tag) => (
            <>
              <div key={tag} className="text-bodyNormal2Regular">
                {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';
