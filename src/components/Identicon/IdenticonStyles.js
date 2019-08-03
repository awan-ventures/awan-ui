import styled from 'styled-components';

export const IdenticonContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: ${(props) => (props.height ? `${props.height}px` : '100%')};
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	background: ${(props) =>
		props.background ? `${props.background}` : '#daeeff'};
	position: relative;
	overflow: hidden;
`;

export const Rect = styled.rect`
	opacity: 0.6;
`;
export const Svg = styled.svg`
	position: relative;
	width: 100%;
	height: 100%;
	left: ${(props) => (props.offsetY ? `${props.offsetY}%` : 0)};
	top: ${(props) => (props.offsetX ? `${props.offsetX}%` : 0)};
	overflow: visible;
`;
