import * as React from 'react';

import Text from '../text';
import Col from '../col';
import Row from '../row';
import Button from '../button';
import Divider from '../divider';

import useTheme from '../../hooks/useTheme';

interface DropProps {
	onDrop?: (
		files: FileList | null,
		event: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>
	) => any;
	data?: any[];
	placeholder?: string;
	renderItem?: (item: any) => void;
}

const Drop: React.FC<DropProps> = ({
	data = [],
	renderItem = () => {},
	onDrop,
	placeholder = 'Drop files here'
}) => {
	const [entered, setEntered] = React.useState<boolean>(false);
	const fileRef = React.useRef<HTMLInputElement | null>(null);
	const theme = useTheme();

	const handleDrop: React.DragEventHandler<HTMLDivElement> = event => {
		event.preventDefault();

		const files = event.dataTransfer ? event.dataTransfer.files : null;
		onDrop && onDrop(files, event);

		setEntered(false);
	};

	const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onDrop && onDrop(event.target.files, event);
	};

	return (
		<div
			onDrop={handleDrop}
			onDragOver={event => {
				event.preventDefault();
				setEntered(true);
			}}
			onDragLeave={event => {
				event.preventDefault();
				setEntered(false);
			}}
			style={{
				backgroundColor: entered ? theme.color.core.neutral[1] : undefined,
				border: `1px dashed ${theme.color.core.neutral[3]}`,
				borderRadius: theme.ui.borderRadius,
				padding: theme.unit
			}}
		>
			<input
				ref={fileRef}
				type="file"
				multiple
				onChange={onFileChange}
				style={{ display: 'none' }}
			/>

			{data.length > 0 && (
				<Row middleAlign>{data.map(item => renderItem(item))}</Row>
			)}

			{!data.length ? (
				<div
					style={{
						opacity: entered ? 0 : 1,
						transition: `opacity ${theme.ui.transitionTime}`
					}}
				>
					<Col centered padded>
						<Text title3>{placeholder}</Text>
						<Text>or</Text>
						{/* <Divider hidden /> */}
						<Button
							primary
							onClick={() => fileRef.current && fileRef.current.click()}
						>
							Click to select
						</Button>
					</Col>
				</div>
			) : (
				<Col centered padded>
					<Button
						small
						primary
						onClick={() => fileRef.current && fileRef.current.click()}
					>
						Add files
					</Button>
				</Col>
			)}
		</div>
	);
};

export default Drop;
