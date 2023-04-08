import styled, { css } from 'styled-components';



export const StyledContact = styled.div`
	padding-top: 50px;
	min-height: 100vh;

	img {
		width: 200px;
		margin-top: 30px;
	}
	
	h2 {
		margin-bottom: 30px;
	}

	.flexLayout {
		width: 100%;
		gap: 30px;
		
		form {
			width: 50%;
		}

		div {
			width: 45%;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
	
	p {
		line-height: 22px;
	}

	div div p:last-child{
		color: var(--blue6);
	}
`
