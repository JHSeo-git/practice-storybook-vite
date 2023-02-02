import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: {
    TabsContent,
    TabsList,
    TabsTrigger,
  },
} as ComponentMeta<typeof Tabs>;

export const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <StoryContainer>
      <Tabs {...args} className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-2">
          <p className="text-bodyNormal2Regular text-base-weak">
            Make changes to your account here. Click save when you&apos;re done.
          </p>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="peduarte@email.com" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="subtle" intent="success">
              Save changes
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="password" className="mt-2">
          <p className="text-bodyNormal2Regular text-base-weak">
            Change your password here. After saving, you&apos;ll be logged out.
          </p>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="subtle" intent="success">
              Change password
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </StoryContainer>
  );
};
Template.args = {
  defaultValue: 'account',
};
Template.storyName = 'Default';
