import * as React from 'react';
import classNames from 'classnames';

import {
	ProgressBarWrapperStyled,
	ProgressBarStyled,
	ProgressStyled
} from './styled';

import Divider from '../divider';
import Text from '../text';

export interface IProps {
	percent: number;
}

const ProgressBar: React.FC<IProps> = ({ percent }) => {
	return (
		<ProgressBarWrapperStyled className={classNames({})}>
			<ProgressBarStyled>
				<ProgressStyled style={{ width: `${percent}%` }} />
			</ProgressBarStyled>
		</ProgressBarWrapperStyled>
	);
};

export default ProgressBar;
