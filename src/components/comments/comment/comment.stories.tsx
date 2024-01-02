import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Comment, { CommentProps } from "./comment.component";

export default {
  title: "Components/Comment",
  component: Comment,
} as Meta;

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

const sampleComment = {
  id: 1,
  author: "John Doe",
  text: "This is a comment.",
  replies: [
    {
      id: 2,
      author: "Jane Doe",
      text: "This is a reply.",
      replies: [],
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  comment: sampleComment,
  onReply: action("onReply"),
  replyable: true,
};
