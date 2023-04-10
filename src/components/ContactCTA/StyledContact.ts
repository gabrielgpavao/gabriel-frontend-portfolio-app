import styled, { css } from 'styled-components';

export interface iStyledContactProps {
	styleOption?: 'primary' | 'secondary';
	top?: string | 0;
	right?: string | 0;
	bottom?: string | 0;
	left?: string | 0;
}

export const StyledContact = styled.a<iStyledContactProps>`
	position: relative;
	box-sizing: content-box;
	display: grid;
	place-items: center;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	cursor: pointer;
	
	${({styleOption}) => {
		switch (styleOption) {
			case 'primary':
				return css`
					background: linear-gradient(135deg, rgba(255,148,50,1) 20%, rgba(255,122,1,1) 50%, rgba(255,148,50,1) 80%);
					border: 7px solid #011019;

					svg {
						color: #010f17;
					}
				`
			case 'secondary':
				return css`
					svg {
						color: #ff7c05;
					}

					small span {
						background: linear-gradient(to top, var(--orange1) 0%, var(--orange2) 60%);
						-webkit-background-clip: text;
						background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				`
		}
	}}
	
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
			color: #010f17;
		}
	}

	@media (max-width: 1040px) {
		display: none;
	}
`