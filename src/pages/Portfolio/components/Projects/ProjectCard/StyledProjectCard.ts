import styled from 'styled-components';

interface iCardBackgroundImg {
	backgroundImg: string;
}

export const StyleProjectCard = styled.li<iCardBackgroundImg>`
	background-color: transparent;
	height: 330px;
	perspective: 1000px;
	font-family: 'Poppins', sans-serif;
	
	> div {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 1s;
		transform-style: preserve-3d;
		background-image: url(${({ backgroundImg }) => backgroundImg});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 1rem;
	}

	:hover > div {
		transform: rotateY(180deg);
	}

	.frontFace, .backFace {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 1rem;
		box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
	}
	
	.frontFace {
		padding: 16px;
		justify-content: flex-end;
		gap: 10px;
		background-image: linear-gradient(transparent 25%, #00090ed9 65%, #00090ee6 80%, #00090ef2 90%);

		h3 {
			font-size: 24px;
			font-weight: 500;
			color: var(--blue6);
		}
		
		small {
			font-weight: 300;
			color: var(--orange1);
		}
	}
	
	.backFace {
		transform: rotateY(180deg);
		overflow: hidden;
		height: 100%;
		width: 100%;
		display: grid;
		place-items: center;
	}
	
	.backFace::before {
		position: absolute;
		content: ' ';
		display: block;
		width: 430px;
		height: 430px;
		background: linear-gradient(90deg, #000000 35%, var(--orange2), var(--orange2), var(--orange2), var(--orange2), #000000 65%);
		animation: rotationLine 5s infinite linear;
	}
	
	.backFaceContent {
		position: absolute;
		width: 99%;
  		height: 99.2%;
		padding: 22px 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 1rem;
		background-image: linear-gradient(145deg, #023544, var(--blue2), #001f30, #001f30, var(--blue2), #023544);
		
		h3 {
			font-size: 20px;
			font-weight: 600;
			color: var(--orange1);
			margin-bottom: 25px;
		}
		
		p {
			line-height: 20px;
			font-size: 15px;
			font-weight: 300;
			color: var(--blue5);
		}
		
		p + p {
			margin-top: 25px;
			margin-bottom: 2px;
		}
		
		.techIcons {
			display: flex;
			align-items: center;
			gap: 15px;
		}

		div + div {
			display: flex;
			justify-content: space-between;
		}

		button {
			height: 35px;
			position: relative;
			transition: 0.5s;
			border-radius: 5px;
			border: 1px solid var(--orange1);
			background-color: transparent;
		}
		
		.seeWebsite {
			width: 103px;
			
			small{
				left: 1.4em;
			}
			
			svg {
				top: 0.45em;
				right: 0.5em;
			}
		}
		
		.seeRepo {
			width: 130px;
			
			small {
				left: 1.45em;
			}
			
			svg {
				top: 0.48em;
				right: 0.55em;
			}
		}
		
		small {
			position: absolute;
			top: 0.55em;
			font-size: 15px;
			font-weight: 500;
			transition: 0.5s;
			color: var(--orange1);
		}
		
		button svg {
			position: absolute;
			opacity: 0;
			transition: 0.5s;
		}

		button:hover small {
			left: 0.6em;
			color: var(--blue1)
		}

		button:hover svg {
			opacity: 1;
			background-color: transparent;
		}

		button:hover {
			background-color: var(--orange1);
		}

		@keyframes rotationLine {
			0% {
				transform: rotateZ(0deg);
			}

			0% {
				transform: rotateZ(360deg);
			}
		}
	}
`
