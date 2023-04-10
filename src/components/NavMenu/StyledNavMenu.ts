import styled from 'styled-components';

export const StyledNavMenu = styled.nav`
	ul {
		display: flex;
		gap: 60px;
	}

	a {
		font-size: 18px;
		position: relative;
		transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
		transition-duration: 400ms;
		transition-property: color;
	}

	a:after {
		content: "";
		pointer-events: none;
		bottom: -2px;
		left: 50%;
		position: absolute;
		width: 0%;
		height: 2px;
		background-color: var(--blue6);
		transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
		transition-duration: 400ms;
		transition-property: width, left;
	}

	a:hover {
		color: var(--blue6);
	}

	a:hover:after {
		width: 100%;
		left: 0%;
	}

	@media (max-width: 1140px) {
		ul {
			gap: 50px;
		}
	}
	
	@media (max-width: 930px) {
		display: none;
	}
`
