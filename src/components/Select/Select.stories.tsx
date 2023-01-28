import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Label } from '../Label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';
import { fruits, meats, vegitables } from './Select.sample';

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
  },
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <StoryContainer>
      <Select {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((fruit, index) => (
              <SelectItem key={index} value={fruit.value}>
                {fruit.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Vegitables</SelectLabel>
            {vegitables.map((vegitable, index) => (
              <SelectItem key={index} value={vegitable.value} disabled={vegitable.disabled}>
                {vegitable.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meats</SelectLabel>
            {meats.map((meat, index) => (
              <SelectItem key={index} value={meat.value}>
                {meat.textValue}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function WithLabel() {
  return (
    <StoryContainer className="space-x-2">
      <Label htmlFor="select-item">Label</Label>
      <Select>
        <SelectTrigger id="select-item" className="w-[180px]">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((fruit, index) => (
              <SelectItem key={index} value={fruit.value}>
                {fruit.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Vegitables</SelectLabel>
            {vegitables.map((vegitable, index) => (
              <SelectItem key={index} value={vegitable.value} disabled={vegitable.disabled}>
                {vegitable.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meats</SelectLabel>
            {meats.map((meat, index) => (
              <SelectItem key={index} value={meat.value}>
                {meat.textValue}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </StoryContainer>
  );
}

export function Disabled() {
  return (
    <StoryContainer className="space-x-2">
      <Label htmlFor="select-item">Label</Label>
      <Select defaultValue={fruits.at(-1)?.value} disabled>
        <SelectTrigger id="select-item" className="w-[180px]">
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {fruits.map((fruit, index) => (
              <SelectItem key={index} value={fruit.value}>
                {fruit.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Vegitables</SelectLabel>
            {vegitables.map((vegitable, index) => (
              <SelectItem key={index} value={vegitable.value} disabled={vegitable.disabled}>
                {vegitable.textValue}
              </SelectItem>
            ))}
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meats</SelectLabel>
            {meats.map((meat, index) => (
              <SelectItem key={index} value={meat.value}>
                {meat.textValue}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </StoryContainer>
  );
}
