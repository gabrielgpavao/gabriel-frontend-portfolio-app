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
		color: var(--blue5);
		line-height: 22px;

		a {
			color: var(--blue6);
		}

		a:hover {
			text-decoration: underline;
		}
	}

	.shorterParagraph {
		max-width: 470px;
	}
	
	div div p:last-child{
		color: var(--blue6);
	}
	
	@media (max-width: 800px) {
		.flexLayout {
			flex-direction: column;

			form {
				width: 100%;
			}
			
			> div {
				width: 100%;
				
				.shorterParagraph {
					max-width: unset;
				}
				
				img {
					display: none;
				}
			}
		}
	}
`
