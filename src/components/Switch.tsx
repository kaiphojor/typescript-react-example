import styled from 'styled-components';
import {useBoolean} from 'usehooks-ts';

type ButtonProps = {
	active: boolean;
};

function background(props: ButtonProps) {
	return props.active ? '#00F' : '#FFF';
}

const Button = styled.button<ButtonProps>`
  background: ${background};
  color: #000;
  border: 1px solid #888;
`;
export default function Switch() {
	const {value: active, toggle} = useBoolean(false);

	return (
		<Button type='button' onClick={toggle} active={active}>
      On/Off
		</Button>
	);
}
