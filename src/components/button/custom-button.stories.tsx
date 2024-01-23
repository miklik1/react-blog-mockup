import { Meta, Story } from "@storybook/react";
import { CustomButton, ButtonProps } from "./custom-button.component";

export default {
  title: "Components/Button",
  component: CustomButton,
  argTypes: {
    text: { control: "text" },
    isDisabled: { control: "boolean" },
    shadow: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    type: {
      control: { type: "select", options: ["filled", "outline", "text"] },
    },
    textColor: {
      control: { type: "select", options: ["default", "white", "primary"] },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  type: "filled",
  text: "Default",
  backgroundColor: "default",
  textColor: "default",
  shadow: true,
};

export const DefaultDisabledButton = Template.bind({});
DefaultDisabledButton.args = {
  text: "Disabled",
  backgroundColor: "default",
  textColor: "default",
  shadow: false,
  isDisabled: true,
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  text: "Default",
  textColor: "primary",
  type: "outline",
};

export const TextButton = Template.bind({});
TextButton.args = {
  text: "Default",
  backgroundColor: "transparent",
  textColor: "primary",
  shadow: false,
  type: "text",
};

export const TextDisabledButton = Template.bind({});
TextDisabledButton.args = {
  text: "Disabled",
  shadow: false,
  isDisabled: true,
  textColor: "default",
  type: "text",
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
  text: "Default",
  backgroundColor: "primary",
  type: "filled",
  textColor: "white",
  shadow: true,
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Default",
  backgroundColor: "primary",
  textColor: "white",
  shadow: true,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Secondary",
  backgroundColor: "secondary",
  textColor: "white",
  shadow: true,
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  text: "Danger",
  backgroundColor: "danger",
  textColor: "white",
  shadow: true,
};
