import * as React from 'react';
import classNames from 'classnames';

import { InputStyled } from './styled';

export interface IProps {
	children?: React.ReactNode;
}

const Input: React.FC<IProps> = ({ children, ...rest }) => {
	return (
		<InputStyled className={classNames({})} {...rest}>
			{children}
		</InputStyled>
	);
};

export default Input;
