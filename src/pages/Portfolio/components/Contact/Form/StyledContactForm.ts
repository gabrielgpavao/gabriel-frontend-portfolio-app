import styled, { css } from 'styled-components';

interface iStyledContactProps {
	hasNameValue: boolean;
	hasEmailValue: boolean;
	hasSubjectValue: boolean;
	hasMessageValue: boolean;
}

export const StyledContactForm = styled.form<iStyledContactProps>`
	width: 100%;
	margin-bottom: 20px;
	
	fieldset {
		position: relative;
		margin-bottom: 35px;
	}

	input, textarea {
		width: 100%;
		padding: 10px 15px;
		outline: none;
		border-bottom: 2px solid var(--blue5);
		border-radius: 4px 4px 0 0;
		background-color: var(--blue3);
		color: var(--blue6);
	}

	label {
		pointer-events: none;
		position: absolute;
		color: var(--blue6);
		transition: all 0.3s ease;

		span {
			margin-left: 3px;
			color: red;
		}
	}
	
	.highlight {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 0;
		background-image: linear-gradient(to right, #ff9900, var(--orange2), var(--orange1), #ff4e00);
		transition: all 0.3s ease;
	}
	
	input:focus + label,
	textarea:focus + label {
		top: -20px;
		left: 0;
		font-size: 15px;
		color: var(--blue5);
	}
	
	input:focus + label + .highlight,
	textarea:focus + label + .highlight {
		width: 100%;
	}
	
	textarea {
		min-height: 80px;
		max-height: 160px;
		resize: vertical;
		overflow-y: hidden;
	}

	.nameLable {
		${({hasNameValue}) => {
			if (!hasNameValue) {
				return css`
					top: 12px;
					left: 10px;
				` 
			} else {
				return css`
					top: -20px;
					left: 0;
					font-size: 15px;
					color: var(--blue5);
				`
			}
		}}
	}

	.emailLable {
		${({hasEmailValue}) => {
			if (!hasEmailValue) {
				return css`
					top: 12px;
					left: 10px;
				` 
			} else {
				return css`
					top: -20px;
					left: 0;
					font-size: 15px;
					color: var(--blue5);
				`
			}
		}}
	}

	.subjectLable {
		${({hasSubjectValue}) => {
			if (!hasSubjectValue) {
				return css`
					top: 12px;
					left: 10px;
				` 
			} else {
				return css`
					top: -20px;
					left: 0;
					font-size: 15px;
					color: var(--blue5);
				`
			}
		}}
	}
	
	.messageLable {
		${({hasMessageValue}) => {
			if (!hasMessageValue) {
				return css`
					top: 12px;
					left: 10px;
				` 
			} else {
				return css`
					top: -20px;
					left: 0;
					font-size: 15px;
					color: var(--blue5);
				`
			}
		}}
	}

	#message ~ .highlight {
		bottom: 3px;
	}

	button {
		position: relative;
		display: inline-block;
		outline: none;
		background: transparent;
	}

	button {
		width: 8rem;
	}

	button .circle {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: relative;
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 4px;
		background: var(--orange1);
	}
	
	
	button .circle .arrow {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	button .circle .arrow {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		left: 0.42rem;
		width: 1.125rem;
		height: 0.125rem;
		background: none;
	}

	button .circle .arrow::before {
		position: absolute;
		content: "";
		top: -0.29rem;
		right: 0.0625rem;
		width: 0.625rem;
		height: 0.625rem;
		transform: rotate(45deg);
		border-top: 0.125rem solid var(--blue1);
		border-right: 0.125rem solid var(--blue1);
	}
	
	button .buttonText {
		transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
		position: absolute;
		inset: 0;
		padding: 0.41rem 0;
		margin-left: 2.2rem;
		font-weight: 700;
		font-size: 17px;
		line-height: 1.6;
		text-align: center;
		color: var(--orange1);	
	}
	
	button:hover .circle {
		width: 100%;
	}
	
	button:hover .circle .arrow {
		transform: translate(0.6rem, 0);
		background: var(--blue1);
	}

	button:hover .buttonText {
		color: var(--blue1);
	}

	@media (max-width: 800px) {
		textarea {
			min-height: 100px;
			max-height: 180px;
		}
	}
`