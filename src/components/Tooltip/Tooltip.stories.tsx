import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heart, Plus, Skull } from 'lucide-react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: { TooltipProvider, TooltipTrigger, TooltipContent },
} as ComponentMeta<typeof Tooltip>;

export const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <StoryContainer>
      <TooltipProvider>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="h-8 w-8 rounded-full p-0">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to list</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function ShowInstantly() {
  return (
    <StoryContainer>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="h-8 w-8 rounded-full p-0">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Like!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StoryContainer>
  );
}

export function WhenDisabledTrigger() {
  return (
    <StoryContainer>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="h-8 w-8 rounded-full p-0" disabled>
              <Skull className="h-4 w-4" />
              <span className="sr-only">Danger</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Danger!!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StoryContainer>
  );
}

export function WhenCollision() {
  return (
    <StoryContainer>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="h-8 w-8 rounded-full p-0">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
            <p>top collision</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StoryContainer>
  );
}
