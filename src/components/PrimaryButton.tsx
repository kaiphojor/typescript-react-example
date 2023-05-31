import styled, {css} from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
	background : ${props => props.theme.colors.primary};

	${props => props.active && css`
		background: ${props.theme.colors.background};
	`}
`;

export default PrimaryButton;
