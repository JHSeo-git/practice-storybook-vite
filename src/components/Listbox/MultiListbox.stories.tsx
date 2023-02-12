import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { ListboxOption, MultiListbox } from './Listbox';
import { fruits } from './Listbox.sample';

export default {
  title: 'Components/MultiListbox',
  component: MultiListbox,
  subcomponents: {
    ListboxOption,
  },
} as ComponentMeta<typeof MultiListbox>;

export const Template: ComponentStory<typeof MultiListbox> = (args) => {
  return (
    <StoryContainer>
      <MultiListbox {...args} className="w-[180px]">
        {fruits.map((fruit, index) => (
          <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
            {fruit.textValue}
          </ListboxOption>
        ))}
      </MultiListbox>
    </StoryContainer>
  );
};
Template.args = {
  placeholder: 'Select fruits',
  disabled: false,
};
Template.storyName = 'Default';

export function Controlled() {
  const target = fruits.at(-1);
  const [value, setValue] = React.useState<string[] | undefined>(
    target ? [target.value] : undefined
  );

  return (
    <StoryContainer>
      <MultiListbox className="w-[180px]" value={value} onChange={(_, value) => setValue(value)}>
        {fruits.map((fruit, index) => (
          <ListboxOption key={index} value={fruit.value} disabled={fruit.disabled}>
            {fruit.textValue}
          </ListboxOption>
        ))}
      </MultiListbox>
    </StoryContainer>
  );
}
