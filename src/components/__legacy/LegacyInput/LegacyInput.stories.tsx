import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Command, Search } from 'lucide-react';

import { LegacyInput } from './LegacyInput';

export default {
  title: 'Legacy/LegacyInput',
  component: LegacyInput,
} as ComponentMeta<typeof LegacyInput>;

export const Template: ComponentStory<typeof LegacyInput> = (args) => <LegacyInput {...args} />;
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
        <LegacyInput placeholder="text with no label" />
        <LegacyInput label="Focus" placeholder="text" startFocused />
        <LegacyInput label="Text" placeholder="text" />
        <LegacyInput label="Password" type="password" placeholder="password" />
        <LegacyInput
          label="Text with Icon"
          placeholder="text"
          icon={<Command className="h-4 w-4" />}
        />
        <LegacyInput
          label="Password with Icon"
          type="password"
          placeholder="password"
          icon={<Command className="h-4 w-4" />}
        />
      </div>
      <div className="mb-10 flex gap-4">
        <LegacyInput label="Horizontal" placeholder="text" orientation="horizontal" />
        <LegacyInput
          label="Horizontal"
          type="password"
          placeholder="password"
          orientation="horizontal"
        />
      </div>
    </>
  );
}

export function Label() {
  return (
    <div className="space-y-4">
      <LegacyInput placeholder="text with no label" />
      <LegacyInput label="With label" placeholder="text" />
    </div>
  );
}

export function Orientation() {
  return (
    <>
      <div className="mb-12 space-y-4">
        <h2 className="mb-5 font-bold">* Vertical</h2>
        <LegacyInput placeholder="text with no label" />
        <LegacyInput label="With label" placeholder="text" />
      </div>
      <div className="mb-12 space-y-4">
        <h2 className="mb-5 font-bold">* Horizontal</h2>
        <LegacyInput orientation="horizontal" placeholder="text with no label" />
        <LegacyInput orientation="horizontal" label="With label" placeholder="text" />
      </div>
    </>
  );
}

export function Icon() {
  return (
    <div className="space-y-4">
      <LegacyInput placeholder="search" icon={<Search className="h-4 w-4" />} fullWidth />
      <LegacyInput
        placeholder="disabled"
        icon={<Search className="h-4 w-4" />}
        fullWidth
        disabled
      />
    </div>
  );
}

export function Focused() {
  return (
    <div className="space-y-4">
      <LegacyInput label="Label" placeholder="text" />
      <LegacyInput label="Label" placeholder="text" />
      <LegacyInput label="Start Focused" placeholder="text" startFocused />
      <LegacyInput label="Label" placeholder="text" />
    </div>
  );
}

export function FullWidth() {
  return (
    <div className="space-y-4">
      <LegacyInput placeholder="full width with no label" fullWidth />
      <LegacyInput label="Label" placeholder="full width with label" fullWidth />
    </div>
  );
}

export function Error() {
  return (
    <div className="space-y-4">
      <LegacyInput placeholder="text with no label" error="This is an error" />
      <LegacyInput
        label="Text"
        placeholder="text"
        error="This is an error"
        defaultValue="error text"
      />
      <LegacyInput
        label="Password"
        type="password"
        placeholder="password"
        error="This is an error"
        defaultValue="error password"
      />
      <LegacyInput
        label="Text with Icon"
        placeholder="text"
        icon={<Command className="h-4 w-4" />}
        error="This is an error"
        defaultValue="error text with icon"
      />
      <LegacyInput
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
      <LegacyInput placeholder="text with no label" disabled defaultValue="No Label" />
      <LegacyInput label="Text" placeholder="text" disabled defaultValue="Text" />
      <LegacyInput
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
        <LegacyInput label="Contrast" placeholder="text" className="bg-base-hi text-base-lo" />
      </div>
      <div className="mb-10">
        <LegacyInput
          label="Underline"
          placeholder="text"
          className="border-b-base-weak rounded-none border-x-0 border-t-0 border-b-2"
        />
      </div>
      <div className="mb-10">
        <LegacyInput
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
