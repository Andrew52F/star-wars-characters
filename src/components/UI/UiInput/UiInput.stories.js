import { useState } from 'react';
import UiInput from "./UiInput";
export default {
  title: 'UiElements/UiInput',
  component: UiInput,
}

const props = {
  value: '',
  handleInputChange: console.log('Input change'),
  placeholder: 'Enter your text',
  classes: '',
}

const Template = (args) => {
  const [ value, setValue ] = useState('');
  const handleInputChange = setValue;

  return (
    <UiInput
      {...args}
      value={value}
      handleInputChange={handleInputChange}
      />
  )
};


export const Default = Template.bind({});

Default.args = { ...props };