import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button, ButtonProps } from "../button/button"
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
}

export default meta

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Destructive = Template.bind({})
Destructive.args = {
  variant: "destructive",
  children: "Delete",
}

export const Outline = Template.bind({})
Outline.args = {
  variant: "outline",
  children: "Outline",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  children: "Secondary",
}

export const Ghost = Template.bind({})
Ghost.args = {
  variant: "ghost",
  children: "Ghost",
}

export const Link = Template.bind({})
Link.args = {
  variant: "link",
  children: "Link",
}

export const Small = Template.bind({})
Small.args = {
  size: "sm",
  children: "Small Button",
}

export const Large = Template.bind({})
Large.args = {
  size: "lg",
  children: "Large Button",
}

export const Icon = Template.bind({})
Icon.args = {
  size: "icon",
  children: "🔍", // An icon or emoji can be used here.
}
