import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import { Listbox, ListboxOption } from './Listbox';
import { fruits } from './Listbox.sample';

export default {
  title: 'Components/Listbox',
  component: Listbox,
  subcomponents: {
    ListboxOption,
  },
} as ComponentMeta<typeof Listbox>;

export const Template: ComponentStory<typeof Listbox> = (args) => {
  return (
    <StoryContainer>
      <Listbox {...args} className="w-[180px]">
        {fruits.map((fruit, index) => (
          <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
            {fruit.textValue}
          </ListboxOption>
        ))}
      </Listbox>
    </StoryContainer>
  );
};
Template.args = {
  placeholder: 'Select a fruit',
  disabled: false,
};
Template.storyName = 'Default';

export function OptionAppearance() {
  return (
    <StoryContainer>
      <Listbox className="w-[180px]">
        {fruits.map((fruit, index) => (
          <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
            <div className="flex items-center space-x-2">
              <span>{fruit.emoji}</span>
              <span className="flex-1 truncate">{fruit.textValue}</span>
            </div>
          </ListboxOption>
        ))}
      </Listbox>
    </StoryContainer>
  );
}

export function ControlledValue() {
  const [value, setValue] = React.useState<string | null>(fruits.at(-1)?.value ?? null);

  return (
    <StoryContainer>
      <Listbox className="w-[180px]" value={value} onChange={(_, newValue) => setValue(newValue)}>
        {fruits.map((fruit, index) => (
          <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
            {fruit.textValue}
          </ListboxOption>
        ))}
      </Listbox>
    </StoryContainer>
  );
}

export function ControlledOpen() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <StoryContainer>
      <div className="space-y-4">
        <Button onClick={() => setIsOpen((prev) => !prev)}>Open</Button>
        <Listbox className="w-[180px]" open={isOpen} onOpenChange={setIsOpen}>
          {fruits.map((fruit, index) => (
            <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
              {fruit.textValue}
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    </StoryContainer>
  );
}
