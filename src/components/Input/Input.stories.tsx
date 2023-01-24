import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Command, Search } from 'lucide-react';

import { Input } from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
Template.args = {
  label: 'Label',
  orientation: 'vertical',
  icon: null,
  startFocused: false,
  error: '',
  disabled: false,
  type: 'text',
  placeholder: 'placeholder',
};
Template.storyName = 'Basic';

export function All() {
  return (
    <>
      <div className="mb-10 space-y-4">
        <Input placeholder="text with no label" />
        <Input label="Focus" placeholder="text" startFocused />
        <Input label="Text" placeholder="text" />
        <Input label="Password" type="password" placeholder="password" />
        <Input label="Text with Icon" placeholder="text" icon={<Command className="h-4 w-4" />} />
        <Input
          label="Password with Icon"
          type="password"
          placeholder="password"
          icon={<Command className="h-4 w-4" />}
        />
      </div>
      <div className="mb-10 flex gap-4">
        <Input label="Horizontal" placeholder="text" orientation="horizontal" />
        <Input label="Horizontal" type="password" placeholder="password" orientation="horizontal" />
      </div>
    </>
  );
}

export function Label() {
  return (
    <div className="space-y-4">
      <Input placeholder="text with no label" />
      <Input label="With label" placeholder="text" />
    </div>
  );
}

export function Orientation() {
  return (
    <>
      <div className="mb-12 space-y-4">
        <h2 className="mb-5 font-bold">* Vertical</h2>
        <Input placeholder="text with no label" />
        <Input label="With label" placeholder="text" />
      </div>
      <div className="mb-12 space-y-4">
        <h2 className="mb-5 font-bold">* Horizontal</h2>
        <Input orientation="horizontal" placeholder="text with no label" />
        <Input orientation="horizontal" label="With label" placeholder="text" />
      </div>
    </>
  );
}

export function Icon() {
  return (
    <div className="space-y-4">
      <Input placeholder="search" icon={<Search className="h-4 w-4" />} fullWidth />
      <Input placeholder="disabled" icon={<Search className="h-4 w-4" />} fullWidth disabled />
    </div>
  );
}

export function Focused() {
  return (
    <div className="space-y-4">
      <Input label="Label" placeholder="text" />
      <Input label="Label" placeholder="text" />
      <Input label="Start Focused" placeholder="text" startFocused />
      <Input label="Label" placeholder="text" />
    </div>
  );
}

export function FullWidth() {
  return (
    <div className="space-y-4">
      <Input placeholder="full width with no label" fullWidth />
      <Input label="Label" placeholder="full width with label" fullWidth />
    </div>
  );
}

export function Error() {
  return (
    <div className="space-y-4">
      <Input placeholder="text with no label" error="This is an error" />
      <Input label="Text" placeholder="text" error="This is an error" defaultValue="error text" />
      <Input
        label="Password"
        type="password"
        placeholder="password"
        error="This is an error"
        defaultValue="error password"
      />
      <Input
        label="Text with Icon"
        placeholder="text"
        icon={<Command className="h-4 w-4" />}
        error="This is an error"
        defaultValue="error text with icon"
      />
      <Input
        label="Password with Icon"
        type="password"
        placeholder="password"
        icon={<Command className="h-4 w-4" />}
        error="This is an error"
        defaultValue="error password with icon"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div className="space-y-4">
      <Input placeholder="text with no label" disabled defaultValue="No Label" />
      <Input label="Text" placeholder="text" disabled defaultValue="Text" />
      <Input
        label="Password"
        type="password"
        placeholder="password"
        disabled
        defaultValue="password"
      />
    </div>
  );
}

export function ExtendsStyles() {
  return (
    <>
      <div className="mb-10">
        <Input label="Contrast" placeholder="text" className="bg-base-hi text-base-lo" />
      </div>
      <div className="mb-10">
        <Input
          label="Underline"
          placeholder="text"
          className="border-b-base-weak rounded-none border-x-0 border-t-0 border-b-2"
        />
      </div>
      <div className="mb-10">
        <Input
          orientation="horizontal"
          label="Smaller"
          placeholder="text"
          className="text-label6Regular p-1"
          labelClassName="text-label6Regular"
        />
      </div>
    </>
  );
}
