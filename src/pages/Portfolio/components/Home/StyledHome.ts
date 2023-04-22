import styled from 'styled-components';

export const StyledHome = styled.section`
	height: 625px;
	background-image: linear-gradient(to right, #011826 0%, #000e17 100%);

	.flexLayout {
		margin-top: 50px;
		
		> div {
			max-width: 600px;
			display: flex;
			flex-direction: column;
		}
	}

	figure {
		height: 380px;
		margin-right: 50px;

		img {
			height: 100%;
		}
	}
	
	h2 {
		margin-bottom: 25px;
		height: fit-content;
		max-width: 600px;
		font-size: 80px;
		font-weight: 400;
		
		span {
			display: block;
			color: var(--orange2);

			div {
				display: inline-flex;
				flex-direction: column;
				align-items: center;
				gap: 8px;
				margin-left: 15px;
				margin-right: 5px;
				position: relative;
				bottom: 18px;
			}

			.hyphen {
				display: inline-block;
				height: 6px;
				width: 195px;
				background-color: #ffffff;
			}

			span {
				color: var(--blue6);
				font-style: italic;
				font-size: 16px;
			}
		}
	}

	p {
		max-width: 440px;
		line-height: 30px;
		font-size: 18px;
		color: var(--blue5);
		margin-left: 8px;
	}

	.containerCTA {
		display: flex;
		justify-content: flex-end;
	}
	
	@media (max-width: 1140px) {
		.flexLayout {
			justify-content: space-evenly;
		}
	}

	@media (max-width: 1040px) {
		height: 560px;
		
		figure {
			height: 350px;
			margin-right: 20px;
		}
		
		h2 {
			font-size: 70px;
		}

		p {
			font-size: 16px;
			line-height: 25px;
		}
	}

	@media (max-width: 900px) {
		height: 475px;

		.flexLayout {
			margin-top: 30px;
		}
		
		figure {
			height: 300px;
		}
		
		h2 {
			font-size: 60px;

			span {
				.hyphen {
					height: 4px;
					width: 165px;
				}
				
				span {
					font-size: 14px;
				}
			}
		}
	}

	@media (max-width: 770px) {
		.flexLayout {
			margin-top: 15px;
			flex-direction: row-reverse;
		}
		
		figure {
			margin-right: 0;
			height: 280px;
		}

		h2 {
			font-size: 50px;
		}
	}

	@media (max-width: 700px) {
		height: 420px;
		
		figure {
			display: none;
		}

		h2 {
			font-size: 70px;
		}
	}

	@media (max-width: 540px) {
		h2 {
			font-size: 60px;
		}
	}

	@media (max-width: 490px) {
		height: 380px;
		
		h2 {
			font-size: 40px;
		}
	}

	@media (max-width: 400px) {
		h2 span {
			div span, .hyphen {
				display: none;
			}
		}
	}
`
