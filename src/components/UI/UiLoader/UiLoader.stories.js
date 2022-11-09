import UiLoader from "./UiLoader";
export default {
  title: 'UiElements/UiLoader',
  component: UiLoader,
}

const props = {
  shadow: false,
  theme: 'dark', 
  classes: ''
}

const Template = (args) => <UiLoader {...args} />;


export const Light = Template.bind({});

Light.args ={
  ...props,
  theme: 'light',
  shadow: true,
}
 
export const Dark = Template.bind({});

Dark.args ={
  ...props,
  theme: 'dark',
}