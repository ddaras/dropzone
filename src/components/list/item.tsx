import * as React from 'react';
import classNames from 'classnames';

import { ListItemStyled } from './styled';

export interface IProps {
	children?: React.ReactNode;
	maxWidth?: string | number;
}

const ListItem: React.FC<IProps> = ({ children, maxWidth, ...rest }) => {
	return (
		<ListItemStyled
			className={classNames({})}
			{...rest}
			style={{
				maxWidth
			}}
		>
			{children}
		</ListItemStyled>
	);
};

export default ListItem;
