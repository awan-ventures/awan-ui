import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Identicon } from './Identicon';

import uuidv4 from 'uuid/v4';

storiesOf('Identicon').add('Identicon', () => {
	const [value, setValue] = React.useState(uuidv4);
	const [radius, setRadius] = React.useState(0);
	const [height, setHeight] = React.useState(50);
	const [width, setWidth] = React.useState(50);

	return (
		<div>
			<Identicon value={value} width={width} height={height} radius={radius} />
			<button
				onClick={() => {
					const hex = uuidv4;
					setValue(hex);
				}}
			>
				Randomize
			</button>
			<div>
				<label>Value</label>
				<input
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
			</div>
			<div>
				<label>Radius</label>
				<input
					value={radius}
					onChange={(e) => {
						setRadius(e.target.value);
					}}
					type="number"
				/>
			</div>
			<div>
				<label>Height</label>
				<input
					value={height}
					onChange={(e) => {
						setHeight(e.target.value);
					}}
					type="number"
				/>
			</div>
			<div>
				<label>Width</label>
				<input
					value={width}
					onChange={(e) => {
						setWidth(e.target.value);
					}}
					type="number"
				/>
			</div>
		</div>
	);
});
