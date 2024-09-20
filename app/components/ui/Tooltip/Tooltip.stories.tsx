import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Tooltip, TooltipProps } from "./Tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  args: {
    explainer: "This is a tooltip",
    withArrow: true,
    side: "top",
    intent: "primary",
    size: "md",
  },
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    withArrow: {
      control: { type: "boolean" },
    },
  },
}

export default meta

const Template: StoryFn<TooltipProps> = (args: TooltipProps) => (
  <Tooltip {...args}>
    <button>Hello</button>
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {}

export const WithoutArrow = Template.bind({})
WithoutArrow.args = {
  withArrow: false,
}

export const CustomExplainer = Template.bind({})
CustomExplainer.args = {
  explainer: "Custom explainer text",
}
