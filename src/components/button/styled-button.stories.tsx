import { Meta, Story } from "@storybook/react";
import StyledButton, { StyledButtonProps } from "./styled-button.component"; // Adjust the import path accordingly

export default {
  title: "Components/StyledButton",
  component: StyledButton,
  argTypes: {
    size: {
      control: {type:  "select"},
      options: ["small", "medium", "large"],
    },
  },
} as Meta;

const Template: Story<StyledButtonProps> = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  size: "medium",
  onClick: () => console.log("Primary button clicked"),
  disabled: false,
};

export const Submit = Template.bind({});
Submit.args = {
  children: "Submit Button",
  variant: "submit",
  size: "medium",
  onClick: () => console.log("Submit button clicked"),
  disabled: false,
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  size: "medium",
  onClick: () => console.log("Default button clicked"),
  disabled: false,
};
