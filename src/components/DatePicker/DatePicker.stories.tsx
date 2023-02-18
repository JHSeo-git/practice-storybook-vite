import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  subcomponents: {},
} as ComponentMeta<typeof DatePicker>;

export const Template: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <StoryContainer>
      <DatePicker style={{ width: '300px' }} {...args} />
    </StoryContainer>
  );
};
Template.args = {
  config: {
    dates: {
      mode: 'range',
    },
  },
};
Template.storyName = 'DateRangePicker';
