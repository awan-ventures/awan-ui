import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Overlay } from './Overlay';

storiesOf('Overlay').add('Overlay w/ Children', () => (
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
storiesOf('Overlay').add('Overlay w/o Children', () => (
	<Overlay onOverlayClick={action('clicked overlay')} overlayColor="#f0f" />
));

storiesOf('Overlay').add('Overlay Custom Color', () => (
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
