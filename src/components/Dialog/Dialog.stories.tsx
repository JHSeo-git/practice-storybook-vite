import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  },
} as ComponentMeta<typeof Dialog>;

export const Template: ComponentStory<typeof Dialog> = (args) => {
  return (
    <StoryContainer>
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline" intent="primary">
            Open
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. It can be as long as you want, but it should be
              short and concise.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="John Doe" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function Controlled() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <StoryContainer>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" intent="primary">
            Open
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[420px]">
          <form
            className="grid gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                setLoading(true);
                await wait();
                setOpen(false);
              } finally {
                setLoading(false);
              }
            }}
          >
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                When submit, this dialog will close after 1 second.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="John Doe" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Submit'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </StoryContainer>
  );
}
