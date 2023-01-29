import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  subcomponents: {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  },
} as ComponentMeta<typeof AlertDialog>;

export const Template: ComponentStory<typeof AlertDialog> = (args) => {
  return (
    <StoryContainer>
      <AlertDialog {...args}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" intent="primary">
            Open
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" intent="primary">
            Open
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
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
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure controlled?</AlertDialogTitle>
              <AlertDialogDescription>
                When submit, this will close the dialog after 1 second.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Button type="submit">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Submit'}
              </Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </StoryContainer>
  );
}

export function WithContainer() {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  return (
    <StoryContainer>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" intent="primary">
            Open
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent container={container}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div ref={setContainer} />
    </StoryContainer>
  );
}
