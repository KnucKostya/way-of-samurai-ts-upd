import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const ButtonMode = Template.bind({})

ButtonMode.args = {
  name: 'ButtonStorybook',
  status: true,
  callback: () => {
    alert('OK')
  },
}
