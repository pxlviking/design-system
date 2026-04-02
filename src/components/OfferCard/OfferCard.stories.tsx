import type { Meta, StoryObj } from '@storybook/react';
import { OfferCard } from './OfferCard';

const meta: Meta<typeof OfferCard> = {
  title: 'Components/OfferCard',
  component: OfferCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A card component used to display a brand offer in a feed. Shows brand identity,
offer title, description, required delivery platforms, publication date, and remaining time.
Tapping the card leads to the Offer Details screen.

---

**Anatomy**
- **Header row:** Brand avatar, brand name, and arrow icon
- **Image:** Required featured image, always visible, aspect ratio 1:1
- **Title:** Offer name, semibold 14px, max 3 lines
- **Description:** Short offer brief, regular 12px, max 3 lines
- **Platforms:** Icons representing required social media deliverables
- **Footer row:** Publication date on the left, days remaining on the right

---

**Props**
- \`brandName\` — Name of the brand publishing the offer
- \`imageSrc\` — URL of the featured image, always required
- \`title\` — Title of the offer
- \`description\` — Short description of what the influencer needs to do
- \`publishedDate\` — Formatted publication date string, e.g. "Published on Jan 28"
- \`daysLeft\` — Number of days remaining to apply
- \`platforms\` — Array of required delivery platforms: instagram, youtube, tiktok, snapchat

---

**States**
- **Default:** Background is #FDFDFD
- **Pressed:** Background changes to #F5F5F5 on tap — mobile only
- **Disabled:** Reduced opacity, not interactive

---

**Usage guidelines**
- Always provide a featured image — there is no imageless variant
- Keep descriptions concise — maximum 3 lines
- Always include at least one platform
- The entire card is tappable — do not add separate tap targets inside it

---

**Placeholders**
- Avatar is currently a placeholder — will be replaced with the Avatar component
- Calendar icon is exported from Figma
- Arrow icon uses a text character — will be replaced with the Icon component
        `,
      },
    },
  },
  args: {
    brandName: 'SpaceOffice',
    title: 'Premium Spa Weekend for Two',
    description:
      'Create and share authentic social media content showcasing our spa experience before, during, and after your stay.',
    publishedDate: 'Published on Jan 28',
    daysLeft: 4,
    platforms: ['instagram', 'youtube', 'tiktok', 'snapchat'],
    imageSrc: 'https://picsum.photos/seed/spa/160/160',
  },
};

export default meta;
type Story = StoryObj<typeof OfferCard>;

export const Default: Story = {};

export const Pressed: Story = {
  render: (args) => (
    <div style={{ width: 'fit-content' }}>
      <style>{`.offer-card-pressed .offer-card { background-color: #F5F5F5; }`}</style>
      <div className="offer-card-pressed">
        <OfferCard {...args} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Triggered on tap on mobile. Background shifts from #FDFDFD to #F5F5F5.',
      },
    },
  },
};

export const SinglePlatform: Story = {
  args: {
    platforms: ['instagram'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with only one required delivery platform.',
      },
    },
  },
};

export const AllPlatforms: Story = {
  args: {
    platforms: ['instagram', 'youtube', 'tiktok', 'snapchat'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Card showing all four supported delivery platforms.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    title: 'A much longer offer title that might wrap onto two lines in smaller containers',
    description:
      'This is a longer description to test how the card handles overflow content and whether the layout stays intact when text runs longer than usual than usual than usual.',
    daysLeft: 12,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests how the card handles longer text. Title and description are clamped at 3 lines.',
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ opacity: 0.4, pointerEvents: 'none', width: 'fit-content' }}>
      <OfferCard {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use when the offer is unavailable or expired.',
      },
    },
  },
};