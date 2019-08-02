import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Overlay } from './Overlay';

storiesOf('Overlay').add('floating component', () => (
	<Overlay onOverlayClick={action('clicked overlay')}>
		<div
			style={{
				padding: 20,
				background: '#0f0',
				position: 'absolute',
			}}
		>
			Text 123
		</div>
	</Overlay>
));
storiesOf('Overlay').add('overlay color', () => (
	<Overlay onOverlayClick={action('clicked overlay')} overlayColor="#f0f">
		<div
			style={{
				padding: 20,
				background: '#0f0',
				position: 'absolute',
			}}
		>
			Text 123
		</div>
	</Overlay>
));
storiesOf('Overlay').add('alone', () => (
	<Overlay onOverlayClick={action('clicked overlay')} overlayColor="#f0f" />
));
