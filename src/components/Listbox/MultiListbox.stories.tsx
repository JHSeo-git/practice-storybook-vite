import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
  listboxOpen: true,
  disabled: false,
};
Template.storyName = 'Default';
