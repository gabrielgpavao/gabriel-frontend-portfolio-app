import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend, main,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, select, textarea {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        line-height: 1;
        list-style: none;
        box-sizing: border-box;
    }

	body {
		font-family: 'Work Sans', sans-serif;
		background-color: var(--blue2);
		color: #ffffff;
	}

    a {
        text-decoration: none;
		color: var(--blue5)
    }
    
    button {
        cursor: pointer;
    }
	
	:root {
		--blue1: #011825;
		--blue2: #002733;
		--blue3: #013747;
		--blue4: #7d9eae;
		--blue5: #89a5b7;
		--blue6: #ceecff;
		--orange1: #ff7a01;
		--orange2: #ff9432;
	}

	.flexLayout {
		display: flex;
	}
`
