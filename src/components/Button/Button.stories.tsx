import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckCircle, Loader2, Mail } from 'lucide-react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <StoryContainer>
      <Button {...args} />
    </StoryContainer>
  );
};
Template.args = {
  children: 'Button',
};
Template.storyName = 'Default';

export function Solid() {
  return (
    <StoryContainer className="gap-x-2">
      <Button variant="solid" intent="neutral">
        Neutral
      </Button>
      <Button variant="solid" intent="primary">
        Primary
      </Button>
      <Button variant="solid" intent="danger">
        Danger
      </Button>
      <Button variant="solid" intent="success">
        Success
      </Button>
      <Button variant="solid" intent="info">
        Info
      </Button>
      <Button variant="solid" intent="warning">
        Warning
      </Button>
    </StoryContainer>
  );
}

export function Subtle() {
  return (
    <StoryContainer className="gap-x-2">
      <Button variant="subtle" intent="neutral">
        Neutral
      </Button>
      <Button variant="subtle" intent="primary">
        Primary
      </Button>
      <Button variant="subtle" intent="danger">
        Danger
      </Button>
      <Button variant="subtle" intent="success">
        Success
      </Button>
      <Button variant="subtle" intent="info">
        Info
      </Button>
      <Button variant="subtle" intent="warning">
        Warning
      </Button>
    </StoryContainer>
  );
}

export function Ghost() {
  return (
    <StoryContainer className="gap-x-2">
      <Button variant="ghost" intent="neutral">
        Neutral
      </Button>
      <Button variant="ghost" intent="primary">
        Primary
      </Button>
      <Button variant="ghost" intent="danger">
        Danger
      </Button>
      <Button variant="ghost" intent="success">
        Success
      </Button>
      <Button variant="ghost" intent="info">
        Info
      </Button>
      <Button variant="ghost" intent="warning">
        Warning
      </Button>
    </StoryContainer>
  );
}

export function Outline() {
  return (
    <StoryContainer className="gap-x-2">
      <Button variant="outline" intent="neutral">
        Neutral
      </Button>
      <Button variant="outline" intent="primary">
        Primary
      </Button>
      <Button variant="outline" intent="danger">
        Danger
      </Button>
      <Button variant="outline" intent="success">
        Success
      </Button>
      <Button variant="outline" intent="info">
        Info
      </Button>
      <Button variant="outline" intent="warning">
        Warning
      </Button>
    </StoryContainer>
  );
}

export function Disabled() {
  return (
    <StoryContainer>
      <div className="space-y-4">
        <div className="flex gap-x-2">
          <Button variant="solid" intent="neutral" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="neutral" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="neutral" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="neutral" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="solid" intent="primary" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="primary" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="primary" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="primary" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="solid" intent="danger" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="danger" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="danger" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="danger" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="solid" intent="success" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="success" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="success" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="success" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="solid" intent="info" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="info" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="info" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="info" disabled>
            Disabled
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button variant="solid" intent="warning" disabled>
            Disabled
          </Button>
          <Button variant="subtle" intent="warning" disabled>
            Disabled
          </Button>
          <Button variant="ghost" intent="warning" disabled>
            Disabled
          </Button>
          <Button variant="outline" intent="warning" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </StoryContainer>
  );
}

export function WithIcon() {
  return (
    <StoryContainer>
      <div className="flex flex-col space-y-4">
        <Button variant="solid" intent="neutral">
          <Mail className="mr-2 h-4 w-4" />
          Login with Email
        </Button>
        <Button variant="solid" intent="neutral">
          Confirm
          <CheckCircle className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </StoryContainer>
  );
}

export function Loading() {
  return (
    <StoryContainer>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </StoryContainer>
  );
}
