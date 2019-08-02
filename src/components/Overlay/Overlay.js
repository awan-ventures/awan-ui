import React from 'react';

import styled from 'styled-components';

const OverlayStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.overlayColor};
	z-index: ${(props) => props.zIndex};
`;

export const Overlay = ({
	children,
	onOverlayClick,
	overlayColor = 'rgba(0, 0, 0, 0.8)',
	zIndex = 1000,
}) => {
	const handleClick = () => {
		onOverlayClick && onOverlayClick();
	};

	const style = children
		? {
				...children.props.style,

				zIndex,
		  }
		: {
				zIndex,
		  };

	return (
		<>
			<OverlayStyle
				onClick={handleClick}
				overlayColor={overlayColor}
				zIndex={1000 - 1}
			/>
			{children &&
				React.cloneElement(React.Children.only(children), {
					style,
				})}
		</>
	);
};
