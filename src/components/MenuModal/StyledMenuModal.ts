import styled from 'styled-components';

export const StyledMenuModal = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: flex-end;
	position: fixed;
	inset: 0;
	z-index: 1;
	background-color: #000c1245;
	
	section {
		height: 100vh;
		width: 100%;
		max-width: 300px;
		padding: 20px 1rem;
		background-color: #000c12;

		.modalHeader{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 20px;
			
			h2 {
				margin: 0;
				font-size: 22px;
			}

			span {
				font-size: 22px;
				cursor: pointer;
			}
		}

		nav {
			display: unset;
		}
		
		ul {
			flex-direction: column;
			gap: 25px;
			margin-bottom: 40px;

			li {
				border-bottom: 1px solid var(--blue6);

				a {
					line-height: 50px;
					font-size: 20px;
					color: var(--blue6);
				}

				a:hover,
				a:focus {
					color: var(--orange1);
				}

				a:hover:after {
					width: 0;
					left: 50%;
				}
			}
		}

		:last-child div {
			h3 {
				font-size: 18px;
				color: var(--orange2);
				margin-bottom: 15px;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 15px;

				a {
					display: flex;
					align-items: center;
					gap: 6px;
					font-size: 14px;
				}

				a:hover {
					color: var(--blue6);
				}
			}
		}
	}

`
