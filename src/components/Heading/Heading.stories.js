import React from 'react'

import Heading from './index'

export default {
  title: 'Example/Heading',
  component: Heading,
  argTypes: {},
}

const Template = args => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'anything inside of heading',
}
