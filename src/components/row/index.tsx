import * as React from 'react';
import classNames from 'classnames';

import { RowStyled } from './styled';

export interface IProps {
	before?: React.ReactNode;
	children?: React.ReactNode;
	after?: React.ReactNode;
	fill?: boolean;
	centered?: boolean;
	middleAlign?: boolean;
}

const Text: React.FC<IProps> = ({
	before,
	children,
	after,
	fill = false,
	centered,
	middleAlign
}) => {
	return (
		<RowStyled
			className={classNames({
				fill,
				centered,
				middleAlign
			})}
		>
			{before && before}
			{children}
			{after && after}
		</RowStyled>
	);
};

export default Text;
