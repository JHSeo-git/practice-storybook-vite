import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckCircle, Download, Heart, Link } from 'lucide-react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  intent: 'neutral',
  variant: 'solid',
  size: 'medium',
  children: 'Label',
};

Basic.argTypes = {
  onClick: { action: 'clicked' },
};

export function All() {
  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        <Button intent="primary" variant="solid">
          Primary
        </Button>
        <Button intent="neutral" variant="solid">
          Neutral
        </Button>
        <Button intent="primary" variant="weak">
          Weak
        </Button>
        <Button intent="neutral" variant="weak">
          Weak
        </Button>
        <Button intent="primary" variant="outline">
          Outline
        </Button>
        <Button intent="neutral" variant="outline">
          Outline
        </Button>
        <Button intent="primary" variant="ghost">
          Ghost
        </Button>
        <Button intent="neutral" variant="ghost">
          Ghost
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <Button intent="primary" variant="solid" rounded>
          Primary
        </Button>
        <Button intent="neutral" variant="solid" rounded>
          Neutral
        </Button>
        <Button intent="primary" variant="weak" rounded>
          Weak
        </Button>
        <Button intent="neutral" variant="weak" rounded>
          Weak
        </Button>
        <Button intent="primary" variant="outline" rounded>
          Outline
        </Button>
        <Button intent="neutral" variant="outline" rounded>
          Outline
        </Button>
        <Button intent="primary" variant="ghost" rounded>
          Ghost
        </Button>
        <Button intent="neutral" variant="ghost" rounded>
          Ghost
        </Button>
      </div>
    </>
  );
}

export function Intent() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button intent="neutral">Neutral</Button>
      <Button intent="primary">Primary</Button>
      <Button intent="danger">Danger</Button>
      <Button intent="success">Success</Button>
      <Button intent="info">Info</Button>
      <Button intent="warning">Warning</Button>
    </div>
  );
}

export function Variant() {
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="neutral" variant="solid">
          Solid
        </Button>
        <Button intent="neutral" variant="weak">
          Weak
        </Button>
        <Button intent="neutral" variant="ghost">
          Ghost
        </Button>
        <Button intent="neutral" variant="outline">
          Outline
        </Button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="primary" variant="solid">
          Solid
        </Button>
        <Button intent="primary" variant="weak">
          Weak
        </Button>
        <Button intent="primary" variant="ghost">
          Ghost
        </Button>
        <Button intent="primary" variant="outline">
          Outline
        </Button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="danger" variant="solid">
          Solid
        </Button>
        <Button intent="danger" variant="weak">
          Weak
        </Button>
        <Button intent="danger" variant="ghost">
          Ghost
        </Button>
        <Button intent="danger" variant="outline">
          Outline
        </Button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="success" variant="solid">
          Solid
        </Button>
        <Button intent="success" variant="weak">
          Weak
        </Button>
        <Button intent="success" variant="ghost">
          Ghost
        </Button>
        <Button intent="success" variant="outline">
          Outline
        </Button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="info" variant="solid">
          Solid
        </Button>
        <Button intent="info" variant="weak">
          Weak
        </Button>
        <Button intent="info" variant="ghost">
          Ghost
        </Button>
        <Button intent="info" variant="outline">
          Outline
        </Button>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button intent="warning" variant="solid">
          Solid
        </Button>
        <Button intent="warning" variant="weak">
          Weak
        </Button>
        <Button intent="warning" variant="ghost">
          Ghost
        </Button>
        <Button intent="warning" variant="outline">
          Outline
        </Button>
      </div>
    </>
  );
}

export function Size() {
  return (
    <div className="flex items-start gap-2">
      <Button intent="primary" size="small">
        Small
      </Button>
      <Button intent="primary" size="medium">
        Medium
      </Button>
      <Button intent="primary" size="large">
        Large
      </Button>
    </div>
  );
}

export function ContainsSVG() {
  return (
    <>
      <div className="mb-5 flex items-start gap-2">
        <Button intent="primary" size="small">
          <Heart className="h-4 w-4" />
          <span>좋아요</span>
        </Button>
        <Button intent="primary" size="small">
          <span>다운로드</span>
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="mb-5 flex items-start gap-2">
        <Button intent="primary" size="medium">
          <Heart className="h-5 w-5" />
          <span>좋아요</span>
        </Button>
        <Button intent="primary" size="medium">
          <span>다운로드</span>
          <Download className="h-5 w-5" />
        </Button>
      </div>
      <div className="mb-5 flex items-start gap-2">
        <Button intent="primary" size="large">
          <Heart className="h-6 w-6" />
          <span>좋아요</span>
        </Button>
        <Button intent="primary" size="large">
          <span>다운로드</span>
          <Download className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}

export function ContainsIcon() {
  return (
    <>
      <div className="flex items-start gap-2">
        <Button variant="outline" circle size="small">
          <Link className="h-4 w-4" />
        </Button>
        <Button variant="outline" circle size="medium">
          <Link className="h-5 w-5" />
        </Button>
        <Button variant="outline" circle size="large">
          <Link className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}

export function Rounded() {
  return (
    <div className="flex items-start gap-2">
      <Button rounded>Neutral</Button>
      <Button rounded intent="primary">
        Primary
      </Button>
      <Button rounded intent="danger">
        Danger
      </Button>
      <Button rounded intent="success">
        Success
      </Button>
      <Button rounded intent="info">
        Info
      </Button>
      <Button rounded intent="warning">
        Warning
      </Button>
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <Button loading>Loading...</Button>
      <Button loading intent="primary">
        Loading...
      </Button>
      <Button loading intent="danger">
        Loading...
      </Button>
      <Button loading intent="success">
        Loading...
      </Button>
      <Button loading intent="info">
        Loading...
      </Button>
      <Button loading intent="warning">
        Loading...
      </Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex items-start gap-2">
      <Button disabled>Neutral</Button>
      <Button disabled intent="primary">
        Primary
      </Button>
      <Button disabled intent="danger">
        Danger
      </Button>
      <Button disabled intent="success">
        Success
      </Button>
      <Button disabled intent="info">
        Info
      </Button>
      <Button disabled intent="warning">
        Warning
      </Button>
    </div>
  );
}

export function ExtendsStyles() {
  return (
    <>
      <div className="mb-5 flex w-full gap-2">
        <Button className="w-full justify-between" intent="info" size="large" rounded>
          <span>Custom Class 1</span>
          <span className="flex items-center gap-2">
            <CheckCircle />
          </span>
        </Button>
      </div>
      <div className="mb-5 flex w-full gap-2">
        <Button
          className="hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:hover:shadow-sm"
          intent="neutral"
          variant="outline"
        >
          Custom Class 2
        </Button>
      </div>
    </>
  );
}
