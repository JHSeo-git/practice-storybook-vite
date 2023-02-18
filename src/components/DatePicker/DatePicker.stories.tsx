import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { DatePicker } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  subcomponents: {},
} as ComponentMeta<typeof DatePicker>;

export const SingleTemplate: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <StoryContainer>
      <DatePicker style={{ width: '200px' }} {...args} />
    </StoryContainer>
  );
};
SingleTemplate.args = {
  mode: 'single',
};
SingleTemplate.storyName = 'DatePicker';

export const RangeTemplate: ComponentStory<typeof DatePicker> = (args) => {
  return (
    <StoryContainer>
      <DatePicker style={{ width: '300px' }} {...args} />
    </StoryContainer>
  );
};
RangeTemplate.args = {
  mode: 'range',
};
RangeTemplate.storyName = 'DateRangePicker';
