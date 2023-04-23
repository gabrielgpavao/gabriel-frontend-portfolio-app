import styled from 'styled-components';

export const StyledTechnologies = styled.section`
	padding: 25px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	position: relative;
	background-color: var(--blue1);

	h3 {
		position: absolute;
		top: -12px;
		padding: 4px;
		border-radius: 4px;
		background-color: var(--orange2);
		font-weight: 500;
		color: var(--blue1);
	}
	
	.techList {
		display: flex;
		align-items: center;
		gap: 20px;
	}
`
