import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Identicon } from './Identicon';

import uuidv4 from 'uuid/v4';

storiesOf('Identicon').add('Identicon', () => {
	const [value, setValue] = React.useState(uuidv4);
	const [radius, setRadius] = React.useState(200);
	const [height, setHeight] = React.useState(200);
	const [width, setWidth] = React.useState(200);
	const [scale, setScale] = React.useState(50);
	const [offsetY, setOffsetY] = React.useState(50);
	const [offsetX, setOffsetX] = React.useState(50);

	return (
		<div>
			<Identicon
				value={value}
				width={width}
				height={height}
				radius={radius}
				scale={scale}
				offsetY={offsetY}
				offsetX={offsetX}
			/>
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
					type="range"
					min="0"
					max="500"
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
			<div>
				<label>Scale</label>
				<input
					value={scale}
					onChange={(e) => {
						setScale(e.target.value);
					}}
					type="range"
					min="-100"
					max="100"
				/>
			</div>
			<div>
				<label>Offset Y</label>
				<input
					value={offsetY}
					onChange={(e) => {
						setOffsetY(e.target.value);
					}}
					type="range"
					min="-100"
					max="100"
				/>
			</div>
			<div>
				<label>Offset X</label>
				<input
					value={offsetX}
					onChange={(e) => {
						setOffsetX(e.target.value);
					}}
					type="range"
					min="-100"
					max="100"
				/>
			</div>
		</div>
	);
});
