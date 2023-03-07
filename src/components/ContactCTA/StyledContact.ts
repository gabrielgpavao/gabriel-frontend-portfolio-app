import styled, { css } from 'styled-components';

export interface iStyledContactProps {
	top?: string | 0;
	right?: string | 0;
	bottom?: string | 0;
	left?: string | 0;
}

export const StyledContact = styled.div<iStyledContactProps>`
	position: relative;
	box-sizing: content-box;
	display: grid;
	place-items: center;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: 7px solid #011019;
	background: linear-gradient(135deg, rgba(255,148,50,1) 20%, rgba(255,122,1,1) 50%, rgba(255,148,50,1) 80%);
	color: #010f17;
	cursor: pointer;

	${({top, right, bottom, left}) => {
		return css`
			inset: ${top} ${right} ${bottom} ${left};
		`
	}}

	svg {
		position: absolute;
		transform: rotate(45deg);
	}

	.text {
		width: 100%;
		height: 100%;
		padding-top: 13px;
		transform: rotate(95deg);
		
		small span {
			position: absolute;
			left: 50%;
			font-size: 18px;
			font-weight: 600;
			transform-origin: 0 63px;
		}
	}
`