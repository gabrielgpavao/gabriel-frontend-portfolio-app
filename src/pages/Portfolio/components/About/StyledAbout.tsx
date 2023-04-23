import styled from 'styled-components';

export const StyledAbout = styled.section`
	min-height: 100vh;
	padding-top: 40px;
	background-image: url(./src/assets/page/aboutBg.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	
	.flexLayout {
		justify-content: space-between;
		width: 100%;
		margin-top: 40px;
		gap: 10px;
		
		figure {
			height: 360px;
			width: 350px;
			background-color: #01374796;
			border-radius: 100%;
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

		span {
			color: var(--blue6);
		}
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

	.flexLayout a:hover, .flexLayout button:hover {
		transition: 0.3s;
		background-color: var(--orange2);
		color: var(--blue1);
	}

	.containerCTA {
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 1040px) {
		margin-bottom: 30px;
	}
	
	@media (max-width: 990px) {
		margin-bottom: 0;
		
		.flexLayout figure {
			height: 330px;
			width: 320px;
		}
	}
	
	@media (max-width: 900px) {
		background-position-y: -60px;

		.flexLayout {
			figure {
				display: none;
			}

			> div {
				width: 100%;

				p {
					text-align: start;
				}
			}
		}
	}

	@media (max-width: 580px) {
		.flexLayout > div {
			gap: 20px;
		}
	}

	@media (max-width: 361px) {
		.flexLayout div div {
			gap: 10px;
		}

		button {
			height: 45px;
			font-size: 16px;

			a {
				padding: 0 8px;
			}

			svg {
				margin-right: 6px;
			}
		}
	}
`
