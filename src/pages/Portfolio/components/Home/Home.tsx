import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { iIdProps } from '../../Portfolio'
import { Header } from './Header/Header'
import homeImg from '../../../../assets/page/homeImg.png'
import { StyledHome } from './StyledHome'
import { ContactCTA } from '../../../../components/ContactCTA/ContactCTA'

export function Home({ id }: iIdProps): JSX.Element {
	return (
		<StyledHome id={id}>
			<StyledContainer>
				<Header/>
				<div className='flexLayout'>
					<figure>
						<img src={homeImg} alt="" />
					</figure>
					<div>
						<h2>
							Desenvolvedor 
							<span>
								Front 
								<div>
									<span>&#x0007B; Think, Code, Release &#x0007D;</span>
									<span className='hyphen'></span>
								</div>
								End
							</span>
						</h2>
						<p>Transformando códigos em soluções digitais personalizadas, a fim de atender as necessidades específicas da sua empresa e de seus clientes.</p>
					</div>
				</div>

				<div className='containerCTA'>
					<ContactCTA styleOption={'primary'} top={'-40px'}/>
				</div>
			</StyledContainer>
		</StyledHome>
	)
}
