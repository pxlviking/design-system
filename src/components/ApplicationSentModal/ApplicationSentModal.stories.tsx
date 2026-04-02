import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ApplicationSentModal } from './ApplicationSentModal';

const meta: Meta<typeof ApplicationSentModal> = {
  title: 'Components/ApplicationSentModal',
  component: ApplicationSentModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A confirmation bottom-sheet modal shown after an influencer successfully submits an application to a brand offer.

---

**Anatomy**
- **Backdrop:** Full-screen dark overlay with blur — tapping outside does not dismiss (use \`onConfirm\` or \`onCollaborations\` to close)
- **Featured icon:** Green circle with a send icon, indicating a successful action
- **Title:** Fixed label "Application sent!"
- **Description:** Contextual message referencing the brand name
- **Primary button:** "Got it!" — dismisses the modal
- **Secondary button:** "Go to Collaborations" — navigates to the collaborations tab

---

**Props**
- \`isOpen\` — Controls visibility; defaults to \`true\`
- \`brandName\` — Brand name referenced in the description
- \`onConfirm\` — Handler for the "Got it!" button
- \`onCollaborations\` — Handler for the "Go to Collaborations" button

---

**States**
- **Default:** Modal visible with backdrop and sheet
- **Closed:** \`isOpen={false}\` — nothing is rendered

---

**Usage guidelines**
- Trigger this modal immediately after a successful application submission API call
- Always provide both action handlers — do not omit either button
- The modal is not dismissible by tapping the backdrop
        `,
      },
    },
  },
  args: {
    isOpen: true,
    brandName: 'SpaceOffice',
    onConfirm: fn(),
    onCollaborations: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ApplicationSentModal>;

export const Default: Story = {};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'When `isOpen` is false the modal unmounts entirely — nothing is rendered.',
      },
    },
  },
};

export const LongBrandName: Story = {
  args: {
    brandName: 'The Luxury Copenhagen Cultural Magazine',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests description wrapping when the brand name is unusually long.',
      },
    },
  },
};
