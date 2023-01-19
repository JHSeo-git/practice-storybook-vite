import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
  intent: 'primary',
  size: 'medium',
  label: 'Button',
};

Basic.argTypes = {
  onClick: { action: 'clicked' },
};

export function Intent() {
  return (
    <div className="flex gap-2">
      <Button intent="primary" label="Primary" />
      <Button intent="secondary" label="Secondary" />
    </div>
  );
}

export function Size() {
  return (
    <div className="flex gap-2">
      <Button intent="primary" size="small" label="Small" />
      <Button intent="primary" size="medium" label="Medium" />
      <Button intent="primary" size="large" label="Large" />
    </div>
  );
}
