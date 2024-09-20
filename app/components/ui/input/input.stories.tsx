import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Input } from "../input/input" // Adjust the import path as necessary

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "Enter text here",
    className: "",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
    },
    placeholder: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
}

export default meta

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  type: "text",
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: "password",
  placeholder: "Enter your password",
}

export const EmailInput = Template.bind({})
EmailInput.args = {
  type: "email",
  placeholder: "Enter your email",
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  type: "number",
  placeholder: "Enter a number",
}
