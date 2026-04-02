# Design system — Claude Code instructions

## Project structure
- Components live in src/components/ComponentName/
- Each component needs: ComponentName.tsx, ComponentName.css, ComponentName.stories.tsx
- Design tokens are in src/index.css

## When given a Figma URL
1. Use the Figma MCP to read the component or screen
2. Extract all design tokens, spacing, colors, and typography
3. Generate the React TypeScript component
4. Generate the CSS using existing token variables from src/index.css
5. Generate Storybook stories with all variants and states visible in Figma
6. Add transitions where states differ visually
7. Push to GitHub with a descriptive commit message

## Code rules
- Always use TypeScript
- Always use CSS files, no inline styles
- Always use existing token variables from src/index.css, never hardcode colors or spacing
- Always make props dynamic, never hardcode content
- Always include these stories: Default, all visible states, LongContent, Disabled
- Commit message format: "feat: add ComponentName component"

## Design tokens
src/index.css contains all CSS variables for colors, spacing, radius and typography.
Always check this file before adding new variables.

## Git
After generating a component always run:
git add . && git commit -m "feat: add ComponentName" && git push