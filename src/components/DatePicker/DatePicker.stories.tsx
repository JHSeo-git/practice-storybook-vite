import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Calendar, DatePicker, DatePickerBaseInput, DatePickerContent } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  subcomponents: {},
} as ComponentMeta<typeof DatePicker>;

export const Template: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <StoryContainer>
      <DatePicker
        {...args}
        config={{
          locale: {
            weekday: 'short',
            monthName: '2-digit',
          },
          years: {
            mode: 'decade',
            step: 10,
          },
        }}
      >
        <div className="relative">
          <DatePickerBaseInput />
        </div>
        <DatePickerContent>
          <Calendar />
        </DatePickerContent>
      </DatePicker>
    </StoryContainer>
  );
};
Template.args = {
  defaultOpen: true,
};
Template.storyName = 'Default';
