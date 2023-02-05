import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Settings2, X } from 'lucide-react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverContent,
    PopoverTrigger,
    PopoverClose,
  },
} as ComponentMeta<typeof Popover>;

export const Template: ComponentStory<typeof Popover> = (args) => {
  return (
    <StoryContainer>
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-10 rounded-full p-0">
            <Settings2 className="h-4 w-4" />
            <span className="sr-only">Update dimensions</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <h4 className="text-subtitle1Bold">Dimensions</h4>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width" className="text-label5Bold">
                  Width
                </Label>
                <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth" className="text-label5Bold">
                  Max. width
                </Label>
                <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height" className="text-label5Bold">
                  Height
                </Label>
                <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight" className="text-label5Bold">
                  Max. height
                </Label>
                <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
              </div>
            </div>
          </div>
          <PopoverClose className="hover:bg-base-3 absolute top-4 right-4 rounded-full p-1">
            <X className="h-4 w-4" />
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';
