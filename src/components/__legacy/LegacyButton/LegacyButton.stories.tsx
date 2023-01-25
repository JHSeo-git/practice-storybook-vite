import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckCircle, Download, Heart, Link } from 'lucide-react';

import { LegacyButton } from './LegacyButton';

export default {
  title: 'Legacy/LegacyButton',
  component: LegacyButton,
} as ComponentMeta<typeof LegacyButton>;

export const Template: ComponentStory<typeof LegacyButton> = (args) => <LegacyButton {...args} />;
Template.args = {
  intent: 'neutral',
  variant: 'solid',
  size: 'medium',
  children: 'Label',
};
Template.storyName = 'Basic';

export function All() {
  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        <LegacyButton intent="primary" variant="solid">
          Primary
        </LegacyButton>
        <LegacyButton intent="neutral" variant="solid">
          Neutral
        </LegacyButton>
        <LegacyButton intent="primary" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="neutral" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="primary" variant="outline">
          Outline
        </LegacyButton>
        <LegacyButton intent="neutral" variant="outline">
          Outline
        </LegacyButton>
        <LegacyButton intent="primary" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="neutral" variant="ghost">
          Ghost
        </LegacyButton>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <LegacyButton intent="primary" variant="solid" rounded>
          Primary
        </LegacyButton>
        <LegacyButton intent="neutral" variant="solid" rounded>
          Neutral
        </LegacyButton>
        <LegacyButton intent="primary" variant="weak" rounded>
          Weak
        </LegacyButton>
        <LegacyButton intent="neutral" variant="weak" rounded>
          Weak
        </LegacyButton>
        <LegacyButton intent="primary" variant="outline" rounded>
          Outline
        </LegacyButton>
        <LegacyButton intent="neutral" variant="outline" rounded>
          Outline
        </LegacyButton>
        <LegacyButton intent="primary" variant="ghost" rounded>
          Ghost
        </LegacyButton>
        <LegacyButton intent="neutral" variant="ghost" rounded>
          Ghost
        </LegacyButton>
      </div>
    </>
  );
}

export function Intent() {
  return (
    <div className="flex flex-wrap gap-2">
      <LegacyButton intent="neutral">Neutral</LegacyButton>
      <LegacyButton intent="primary">Primary</LegacyButton>
      <LegacyButton intent="danger">Danger</LegacyButton>
      <LegacyButton intent="success">Success</LegacyButton>
      <LegacyButton intent="info">Info</LegacyButton>
      <LegacyButton intent="warning">Warning</LegacyButton>
    </div>
  );
}

export function Variant() {
  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="neutral" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="neutral" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="neutral" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="neutral" variant="outline">
          Outline
        </LegacyButton>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="primary" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="primary" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="primary" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="primary" variant="outline">
          Outline
        </LegacyButton>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="danger" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="danger" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="danger" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="danger" variant="outline">
          Outline
        </LegacyButton>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="success" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="success" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="success" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="success" variant="outline">
          Outline
        </LegacyButton>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="info" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="info" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="info" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="info" variant="outline">
          Outline
        </LegacyButton>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <LegacyButton intent="warning" variant="solid">
          Solid
        </LegacyButton>
        <LegacyButton intent="warning" variant="weak">
          Weak
        </LegacyButton>
        <LegacyButton intent="warning" variant="ghost">
          Ghost
        </LegacyButton>
        <LegacyButton intent="warning" variant="outline">
          Outline
        </LegacyButton>
      </div>
    </>
  );
}

export function Size() {
  return (
    <div className="flex items-start gap-2">
      <LegacyButton intent="primary" size="small">
        Small
      </LegacyButton>
      <LegacyButton intent="primary" size="medium">
        Medium
      </LegacyButton>
      <LegacyButton intent="primary" size="large">
        Large
      </LegacyButton>
    </div>
  );
}

export function ContainsSVG() {
  return (
    <>
      <div className="mb-5 flex items-start gap-2">
        <LegacyButton intent="primary" size="small">
          <Heart className="h-4 w-4" />
          <span>좋아요</span>
        </LegacyButton>
        <LegacyButton intent="primary" size="small">
          <span>다운로드</span>
          <Download className="h-4 w-4" />
        </LegacyButton>
      </div>
      <div className="mb-5 flex items-start gap-2">
        <LegacyButton intent="primary" size="medium">
          <Heart className="h-5 w-5" />
          <span>좋아요</span>
        </LegacyButton>
        <LegacyButton intent="primary" size="medium">
          <span>다운로드</span>
          <Download className="h-5 w-5" />
        </LegacyButton>
      </div>
      <div className="mb-5 flex items-start gap-2">
        <LegacyButton intent="primary" size="large">
          <Heart className="h-6 w-6" />
          <span>좋아요</span>
        </LegacyButton>
        <LegacyButton intent="primary" size="large">
          <span>다운로드</span>
          <Download className="h-6 w-6" />
        </LegacyButton>
      </div>
    </>
  );
}

export function ContainsIcon() {
  return (
    <>
      <div className="flex items-start gap-2">
        <LegacyButton variant="outline" circle size="small">
          <Link className="h-4 w-4" />
        </LegacyButton>
        <LegacyButton variant="outline" circle size="medium">
          <Link className="h-5 w-5" />
        </LegacyButton>
        <LegacyButton variant="outline" circle size="large">
          <Link className="h-6 w-6" />
        </LegacyButton>
      </div>
    </>
  );
}

export function Rounded() {
  return (
    <div className="flex items-start gap-2">
      <LegacyButton rounded>Neutral</LegacyButton>
      <LegacyButton rounded intent="primary">
        Primary
      </LegacyButton>
      <LegacyButton rounded intent="danger">
        Danger
      </LegacyButton>
      <LegacyButton rounded intent="success">
        Success
      </LegacyButton>
      <LegacyButton rounded intent="info">
        Info
      </LegacyButton>
      <LegacyButton rounded intent="warning">
        Warning
      </LegacyButton>
    </div>
  );
}

export function Loading() {
  return (
    <div className="flex flex-wrap items-start gap-2">
      <LegacyButton loading>Loading...</LegacyButton>
      <LegacyButton loading intent="primary">
        Loading...
      </LegacyButton>
      <LegacyButton loading intent="danger">
        Loading...
      </LegacyButton>
      <LegacyButton loading intent="success">
        Loading...
      </LegacyButton>
      <LegacyButton loading intent="info">
        Loading...
      </LegacyButton>
      <LegacyButton loading intent="warning">
        Loading...
      </LegacyButton>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="flex items-start gap-2">
      <LegacyButton disabled>Neutral</LegacyButton>
      <LegacyButton disabled intent="primary">
        Primary
      </LegacyButton>
      <LegacyButton disabled intent="danger">
        Danger
      </LegacyButton>
      <LegacyButton disabled intent="success">
        Success
      </LegacyButton>
      <LegacyButton disabled intent="info">
        Info
      </LegacyButton>
      <LegacyButton disabled intent="warning">
        Warning
      </LegacyButton>
    </div>
  );
}

export function ExtendsStyles() {
  return (
    <>
      <div className="mb-5 flex w-full gap-2">
        <LegacyButton className="w-full justify-between" intent="info" size="large" rounded>
          <span>Custom Class 1</span>
          <span className="flex items-center gap-2">
            <CheckCircle />
          </span>
        </LegacyButton>
      </div>
      <div className="mb-5 flex w-full gap-2">
        <LegacyButton
          className="hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:hover:shadow-sm"
          intent="neutral"
          variant="outline"
        >
          Custom Class 2
        </LegacyButton>
      </div>
    </>
  );
}
