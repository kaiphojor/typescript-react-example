import type React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
		color: #00F;
		strong{
			font-size:2em;
			color: #F00;
		}
`;

const BigParagraph = styled(Paragraph)`
	font-size: 2em;
	strong{
			font-size:1.5em;
			/* color: #F00; */
		}
`;

function HelloWorld({className}: React.HTMLAttributes<HTMLElement>) {
	return (
		<BigParagraph className={className}>
			Hello, world
			<strong>!</strong>
		</BigParagraph>
	);
}

const SmallHelloWorld = styled(HelloWorld)`
	font-size: .5em;
`;

export default function Greeting() {
	return (
		// <BigParagraph>
		// 	Hello, world
		// 	<strong>!</strong>
		// </BigParagraph>
		<SmallHelloWorld/>
	);
}
