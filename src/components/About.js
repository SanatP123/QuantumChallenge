import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import about_image2 from '../assets/about_image2.jpg';
import './About.css';
import LayoutNav from './LayoutNav';
import styled from 'styled-components';

const Title = styled.h2`
	font-family: Merriweather;
`;

const Paragraph = styled.p`
	font-family: Merriweather;
`;

const Paragraph1 = styled.p`
	position: absolute;
	top: 15%;
	font-family: Merriweather;
	padding-bottom: 150px;
	left: 100%;
	margin-right: -500px;
	transform: translate(-50%, -50%);
`;

const Styles = styled.div`
	.sidebar-section img {
		width: 305%;
		height: 110vh;
		padding-right: 180px;
		margin-right: 500px;
		margin-bottom: 2em;
	}

	.sidebar-section {
		position: relative;
		text-align: left;
		color: white;
	}

	.about-section {
		margin-bottom: 2em;
		margin-top: 2em;
		padding-right: 250px;
	}

	.quantumitinnovation {
		/* margin-bottom: 5em; */
		margin-top: 4em;
	}
`;

const About = () => (
	<div>
		<LayoutNav />
		<Container className='container-about'>
			<Styles>
				<Title className='quantumitinnovation'>Quantum IT Innovation at a glance.</Title>
				<Row className='about-section'>
					<Col xs={12} sm={8} className='main-section'>
						<Paragraph>
							With over two decades of immense contribution to the
							Information and Communication Technology sector, CWG
							Plc has continuously remained a benchmark for
							excellence in India. The company commenced
							operations in Nigeria, on September 26th 1992 as
							Computer Warehouse Limited principally to cater for
							the hardware projects. In 1994, DCC Networks was
							established as the communication arm to provide
							VSAT, Metropolitan, Wide Area and Local area
							networks to corporate organizations. To concentrate
							on demands in the area of software solutions, system
							and training, the Expert Edge software was acquired
							in 1997
						</Paragraph>
						<Paragraph>
							In 2005, CWG Plc was incorporated to coordinate and
							monitor the activities of the three subsidiaries.
							Prior to this establishment, a branch in Ghana was
							set-up in 2003 to cater to the needs of the West
							Indian region. The Group Company was formed to
							provide Head Office functions and Shared Resources
							for the subsidiaries from a central point to make
							them leaner, efficient and more customer-focused. By
							2012, CWG Plc merged with its three subsidiaries and
							this made the subsidiaries cease to exist as
							separate entities, rather as divisions. In pursuit
							of its Pan-Indian Vision, CWG Plc established other
							regional offices in East and Central India; CWG
							Uganda Limited (2010) and CWG Plc Cameroon Limited
							(2012) respectively to handle the business interest
							in these regions.
						</Paragraph>
						<Paragraph>
							In February 2013, CWG Plc ceased to be a Private
							Limited Company and became a Public Company. Also,
							on the 15th of November 2013, CWG Plc listed its
							shares on the Nigerian Stock Exchange. The listing
							boosted the Market Capitalization of the NSE by
							about N14 billion naira, making CWG PLC the highest
							capitalized security in the ICT sector. CWG PLC’s
							listing also marked the first listing on the
							exchange after the launch of the X-Gen trading
							engine; the same engine used on the NASDAQ.
						</Paragraph>
						<Paragraph>
							CWG Plc believes in and pursues an excellent service
							culture, and delivers its operations through global
							best practices using its ISO9001 certification
							process across the whole group.
						</Paragraph>
					</Col>

					<Col xs={12} sm={4} className='sidebar-section'>
						<Image
							src={about_image2}
							alt='cloud'
							className='image-sidebar'
						/>
						<Paragraph1>
							“In the middle of difficulty lies opportunity.”{' '}
							<br />
							–Albert Einstein
						</Paragraph1>
					</Col>
				</Row>
			</Styles>
		</Container>
	</div>
);

export default About;
