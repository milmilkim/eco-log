import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tag from '../components/Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: ['냠냠', '쩝쩝', '꿀꺽'] as String[],
};
