import styled from 'styled-components';

export const StyledAbout = styled.section`
	padding-top: 50px;
	min-height: 100vh;
	background-image: url(./src/assets/aboutBg.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	.flexLayout {
		width: 100%;
		margin-top: 40px;
		gap: 10%;
		
		figure {
			width: 30%;
			background-color: #01374796;
			border-radius: 100%;
			/* border-radius: 30px; */
			overflow: hidden;

			img {
				height: 100%;
				width: 100%;
			}
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 60%;
		}
	}
	
	p {
		color: var(--blue5);
		line-height: 22px;
		text-align: justify;
	}

	.flexLayout div div {
		margin-top: 25px;
		display: flex;
		align-items: center;
		gap: 25px;
	}

	button {
		height: 50px;
		width: fit-content;
		background-color: var(--blue1);
		border-radius: 4px;
		color: var(--orange2);
		font-weight: 500;
		font-size: 18px;
		transition: 0.3s;
		
		a {
			height: 100%;
			padding: 0 12px;
			display: grid;
			grid-auto-flow: column;
			place-items: center;
			border-radius: 4px;
			color: var(--orange2);
		}
		
		svg {
			margin-right: 10px;
		}
	}
	
	button + button {
		display: flex;
		align-items: center;
		padding: 0 10px;
	}

	a:hover, button:hover {
		transition: 0.3s;
		background-color: var(--orange2);
		color: var(--blue1);
	}
`
