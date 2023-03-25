import styled from 'styled-components';

export const StyledFooter = styled.section`
	height: 275px;
	background-color: var(--blue1);
	

	
	> div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		> div {
			height: 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	
	h3 {
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

	.socialMedias {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 15px;

		a {
			background-color: var(--blue2);
			border-radius: 100%;
			padding: 8px;
			display: grid;
			place-items: center;
		}
	}

	p {
		height: 80px;
		display: grid;
		place-items: center;
		border-top: 1px solid var(--blue3);
		color: var(--blue5);
	}
`
