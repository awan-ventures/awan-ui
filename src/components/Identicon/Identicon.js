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
}) => {
	const RECT_NUM = colors.length;

	return (
		<IdenticonContainer width={width} height={height}>
			{images.map((img, i) => {
				const x = parseInt(value.substr(20 + i).slice(0, 1), 16);
				const y = parseInt(value.substr(36 + i).slice(0, 1), 16);

				const positiveX = x > y ? -1 : 1;
				const positiveY =
					x - parseInt(value.substr(16).slice(0, 1), 16) > 0 ? -1 : 1;
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
					const x = parseInt(value.substr(i + 1).slice(0, 1), 16);
					const y = parseInt(value.substr(i + 6).slice(0, 1), 16);

					const RANDOM_NUMBER =
						(parseInt(value.substr(i + 6).slice(0, 1), 16) /
							parseInt(value.substr(i + 4).slice(0, 1), 16)) |
						1;
					const rectWidth = RANDOM_NUMBER * width * (1 / (i + 1));
					const rectHeight = rectWidth;

					const fill = colors[i];
					const transform = `rotate(${(x - y) * i}deg)`;
					return (
						<Rect
							key={i}
							x={x}
							y={y}
							width={rectWidth}
							height={rectHeight}
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
