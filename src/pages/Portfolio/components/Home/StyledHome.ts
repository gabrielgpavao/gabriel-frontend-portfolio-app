import styled from 'styled-components';

export const StyledHome = styled.section`
	height: 100vh;
	background-image: linear-gradient(to right, #011826 0%, #000e17 100%);

	.flexLayout {
		display: flex;
		margin-top: 50px;
		
		> div {
			max-width: 600px;
			display: flex;
			flex-direction: column;

		}
	}
	
	div figure {
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
		width: 440px;
		line-height: 30px;
		font-size: 18px;
		color: var(--blue5);
		margin-left: 8px;
	}
	
	.contactCTA {
		display: grid;
		place-items: center;
		width: 164px;
		height: 164px;
		border-radius: 100%;
		background-color: #fff;
		
		div {
			width: 150px;
			height: 150px;
			border-radius: 100%;
			background-color: var(--orange2);

			span {
				text-align: center;

				color: #000;
			}
		}
	}

`
