import { addParameters, configure } from '@storybook/react';

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

// Option defaults:
addParameters({
	options: {
		name: 'awan ui',
	},
});

configure(loadStories, module);
