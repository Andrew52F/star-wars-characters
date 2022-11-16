import { useState } from 'react';
import UiSelect from "./UiSelect";
export default {
  title: 'UiElements/UiSelect',
  component: UiSelect,
}

const props = {
  options: ['val 1', 'val 2', 'val 3'],
  classes: '',
}

const Template = (args) => {
  const [ value, setValue ] = useState('');
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log('Select changed on ', newValue)
  }
  return (
    <UiSelect
      {...args}
      value={value}
      onChange={handleChange}
      />
  )
};


export const Default = Template.bind({});

Default.args = { ...props };