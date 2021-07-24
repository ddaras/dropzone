import * as React from 'react';
import classNames from 'classnames';

import { FormFieldStyled } from './styled';

export interface IProps {
	children?: React.ReactNode;
}

const Link: React.FC<IProps> = ({ children, ...rest }) => {
	return (
		<FormFieldStyled className={classNames({})} {...rest}>
			{children}
		</FormFieldStyled>
	);
};

export default Link;
