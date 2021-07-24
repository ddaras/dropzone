import styled from 'styled-components';

import { IProps } from '.';

export const FormFieldStyled = styled.section<IProps>(({ theme }) => ({
	marginBottom: theme.unit * 3,

	':last-child, :only-child': {
		marginBottom: 0
	}
}));
