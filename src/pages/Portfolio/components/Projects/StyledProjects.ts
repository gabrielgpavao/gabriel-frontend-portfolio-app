import styled from 'styled-components';

export const StyledProjects = styled.section`
	padding-top: 60px;
	margin-bottom: 60px;

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
		margin-top: 18px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 25px;
	}

	.containerCTA {
		display: flex;
		justify-content: flex-end;
	}
`
