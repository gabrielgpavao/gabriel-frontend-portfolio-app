import styled from 'styled-components';

export const StyledProjects = styled.section`
	padding-top: 30px;
	margin-bottom: 50px;

	h2 {
		margin-bottom: 40px;
	}
	
	div > span {
		width: 100%;
		display: flex;
		justify-content: flex-end;

		a {
			display: inline-flex;
			gap: 7px;
		}
	}

	span a:hover{
		text-decoration: underline;
	}
	
	ul {
		height: 380px;
		padding-top: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 25px;
		overflow: overlay;
	}
	
	.containerCTA {
		display: flex;
		justify-content: flex-end;
		height: 20px;
	}

	@media (max-width: 700px) {
		ul {
			grid-template-columns: repeat(2, 1fr);
			height: unset;
			place-items: center;
		}
	}

	@media (max-width: 605px) {
		margin-top: 30px;
		margin-bottom: 30px;

		ul {
			grid-template-columns: repeat(4, 1fr);
			height: 380px;
			place-items: unset;
		}
	}

	@media (max-width: 400px) {
		ul {
			grid-template-columns: repeat(1, 1fr);
			place-items: center;
			height: unset;
		}
	}
`
