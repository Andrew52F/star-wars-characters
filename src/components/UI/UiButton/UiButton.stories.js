import UiButton from "./UiButton";
export default {
  title: 'UiElements/UiButton',
  component: UiButton,
}

const props = {
  onClick: () => console.log('clicked'),
  text: 'Text',
  disabled: false, 
  theme: 'dark', 
  classes: ''
}

const Template = (args) => <UiButton {...args} />;


export const Light = Template.bind({});

Light.args ={
  ...props,
  theme: 'light',
}
 
export const Dark = Template.bind({});

Dark.args ={
  ...props,
  theme: 'dark',
}

export const Disabled = Template.bind({});

Disabled.args ={
  ...props,
  disabled: true
}