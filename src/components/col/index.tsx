import * as React from 'react';
import classNames from 'classnames';

import { ColStyled } from './styled';

export interface ColProps {
	children?: React.ReactNode;
	fill?: boolean;
	centered?: boolean;
	padded?: boolean;
}

const Text: React.FC<ColProps> = ({
	children,
	fill = false,
	centered,
	padded
}) => {
	return (
		<ColStyled
			className={classNames({
				fill,
				centered,
				padded
			})}
		>
			{children}
		</ColStyled>
	);
};

export default Text;
