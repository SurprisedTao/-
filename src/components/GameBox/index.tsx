import { Cell } from '../../App'
import './style.less'

interface Props {
	cells: Cell[]
	updateCellValue: (index: number) => void
}

export default function(props: Props) {
	const renderCell = (cell: Cell, index: number) => {
		const className = cell.value
			? `gamebox-cell cell-${cell.value}`
			: 'gamebox-cell'
		return (
			<div
				className={className}
				key={index}
				data-row={cell.row}
				data-col={cell.col}
				onClick={() => {
					props.updateCellValue(index)
				}}
			>
				{cell.value}
			</div>
		)
	}

	return <div className="gamebox">{props.cells.map(renderCell)}</div>
}
