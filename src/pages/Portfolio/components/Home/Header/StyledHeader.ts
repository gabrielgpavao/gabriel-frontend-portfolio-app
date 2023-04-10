import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		color: #ffffff;
		font-weight: 400;
		font-size: 25px;
		letter-spacing: -1px;
		word-spacing: -5px;
		
		span {
			background: linear-gradient(172deg, #ffb675 0%, var(--orange1) 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			font-weight: 500;
		}
	}

	aside {
		width: 100px;
		max-height: 247px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 25px;
		position: relative;
		top: 95px;
		background-color: var(--blue2);
		padding-top: 30px;
		padding-bottom: 40px;
	}

	svg {
		transition: 0.3s;
	}
	
	svg:hover {
		width: 27px;
		height: 27px;
		transition: 0.3s;
	}
	
	div {
		transform: rotate(90deg);
		width: max-content;
		padding: 5px 15px;
		position: relative;
    	top: 55px;
		background-color: var(--orange1);

		small {
			color: var(--blue1);
			font-weight: 600;
		}
	}
	
	.menuDropdown {
		display: none;
	}

	@media (max-width: 1140px) {
		aside {
			position: static;
			max-height: unset;
			width: unset;
			padding: 15px 20px 20px 15px;
			flex-direction: row;
			gap: 20px;

			div {
				transform: unset;
				width: unset;
				padding: 3px 10px;
				position: absolute;
				top: 68px;
				right: 24px;
				background-color: var(--orange1);
			}
		}

		svg:hover {
			width: auto;
			height: auto;
		}
	}

	@media (max-width: 1040px) {
		aside {
			display: none;
		}
		
		.menuDropdown {
			display: block;
		}
	}
`
