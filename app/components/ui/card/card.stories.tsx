import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../card/card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    className: {
      control: { type: "text" },
    },
  },
}

export default meta

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>This is a description of the card content.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Here is some content inside the card. You can customize this as needed.</p>
    </CardContent>
    <CardFooter>
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">Action</button>
    </CardFooter>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  className: "bg-gray-100",
  children: (
    <>
      <CardHeader>
        <CardTitle>Custom Card Title</CardTitle>
        <CardDescription>Custom description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has custom content and styling.</p>
      </CardContent>
      <CardFooter>
        <button className="rounded-md bg-green-500 px-4 py-2 text-white">Custom Action</button>
      </CardFooter>
    </>
  ),
}

export const WithoutFooter = Template.bind({})
WithoutFooter.args = {
  children: (
    <>
      <CardHeader>
        <CardTitle>No Footer Card</CardTitle>
        <CardDescription>Description without a footer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content but no footer at the bottom.</p>
      </CardContent>
    </>
  ),
}
