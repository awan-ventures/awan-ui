import React from 'react';
import { IdenticonContainer, Rect, Svg } from './IdenticonStyles';

export const Identicon = ({
	classes = {},
	value,
	images = [],
	colors = ['#06b0ff', '#569aef', '#4fca80', '#f2b040', '#ff6947'],
	width,
	height,
	rectProps,
	radius,
	scale = 50,
	seed = 2,
}) => {
	const cleanedValue = value.replace(/[^a-zA-Z0-9]/g, '');
	const values = new TextEncoder().encode(cleanedValue);
	const valuesPercentage = values.map((val) => {
		const max = Math.max.apply(Math, values);
		const min = Math.min.apply(Math, values);
		return ((val - min) / (max - min)) * scale;
	});

	const COLORS = [].concat(...Array(seed).fill(colors));
	const RECT_NUM = COLORS.length;
	const VALUES = [].concat(...Array(seed + RECT_NUM).fill(Array.from(values)));

	const VALUES_PERCENTAGE = [].concat(
		...Array(seed + RECT_NUM).fill(Array.from(valuesPercentage))
	);

	return (
		<IdenticonContainer width={width} height={height}>
			{images.map((img, i) => {
				const x = VALUES[i];
				const y = VALUES[VALUES.length - i];

				const positiveX = x > y ? -1 : 1;
				const positiveY = x - VALUES[i + 16] > 0 ? -1 : 1;
				return (
					<img
						src={img}
						style={{
							height: '150%',
							width: '150%',
							position: 'absolute',
							transform: `translate(${positiveX * x * 2}px, ${positiveY *
								y *
								2}px)`,
						}}
						alt={value}
					/>
				);
			})}

			<Svg>
				{[...Array(RECT_NUM)].map((rect, i) => {
					const x = VALUES_PERCENTAGE[VALUES.length - i] - 2 * (i + 1);
					const y = VALUES_PERCENTAGE[i] + (i + 1) * 2;

					const RANDOM_NUMBER = VALUES[i];

					const rectWidth = VALUES_PERCENTAGE[i];
					const rectHeight = VALUES_PERCENTAGE[i];

					const positive = x > y ? -1 : 1;

					const fill = COLORS[i];

					const transform_no = ((positive * x) / y) * RANDOM_NUMBER;

					const transform_multiple = Math.abs((transform_no / 45).toFixed(0));

					const translate =
						transform_multiple > 5
							? width - (transform_no * 1) / transform_multiple
							: (transform_no * transform_multiple) / width;

					const transform = `rotate(${rectWidth * x -
						transform_no *
							transform_multiple *
							i}deg) translate(${translate}px, ${translate}px)`;

					return (
						<Rect
							key={i}
							x={`${x}%`}
							y={`${y}%`}
							width={`${50 + rectWidth}%`}
							height={`${50 + rectHeight}%`}
							fill={fill}
							rx={radius}
							ry={radius}
							stroke="none"
							className={classes.rect}
							style={{
								transform,
							}}
							{...rectProps}
						/>
					);
				})}
			</Svg>
		</IdenticonContainer>
	);
};
