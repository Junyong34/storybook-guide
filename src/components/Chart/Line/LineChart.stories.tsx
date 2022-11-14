import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BaseLineChart } from '../index'
import { useState } from 'react'

export default {
  title: 'components/UI/LineChart',
  component: BaseLineChart,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BaseLineChart>

const Template: ComponentStory<typeof BaseLineChart> = (args) => {
  const { name, dataSet } = args

  const [data, setData] = useState<Array<number>>([])

  return <BaseLineChart name={'ddd'} dataSet={[1]} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'LineChart',
  dataSet: [150, 230, 224, 218, 135, 147, 260],
}
