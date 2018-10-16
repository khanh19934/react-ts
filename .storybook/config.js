import { configure } from '@storybook/react'

// automatically import all files ending in *.story.tsx
const req = require.context('../src', true, /.story.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
