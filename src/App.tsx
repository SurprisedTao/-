import './style.less'
import Player from './model/player'
import CharacterCard from './components/CharacterCard'
import GameBox from './components/GameBox'
import { useState, useEffect } from 'react'

const player1 = new Player('进藤光', './guang.jpg')
const player2 = new Player('佐为', './zuowei.jpg')
export interface Cell {
	row: number
	col: number
	value: null | string
}

export default function App() {
	const [cells, setCells] = useState<Cell[]>([])
	const [isPlayer1, setIsPlayer1] = useState<boolean>(true)
	const [gameover, setGameover] = useState<boolean>(false)
	const initCells = (): Cell[] => {
		const cells: Cell[] = []
		for (let i = 0; i < 9; i++) {
			cells.push({
				row: Math.floor(i / 3),
				col: i % 3,
				value: null,
			})
		}

		return cells
	}

	useEffect(() => {
		setCells(initCells())
	}, [])

	useEffect(() => {
		if (gameover) {
			alert(isPlayer1 ? '进藤光赢得棋局' : '佐为赢得棋局')
		}
	}, [gameover])

	const updateCellValue = (index: number) => {
		const newCells = [...cells]

		if (newCells[index].value !== null || gameover) {
			return
		}
		newCells[index].value = isPlayer1 ? 'X' : 'O'
		setCells(newCells)
		if (isWin(newCells[index], cells)) {
			setGameover(true)
		} else {
			setIsPlayer1(!isPlayer1)
		}
	}

	return (
		<>
			<div className="header">井字棋</div>
			<div className="body">
				<CharacterCard player={player1} active={isPlayer1} />
				<GameBox cells={cells} updateCellValue={updateCellValue} />
				<CharacterCard player={player2} active={!isPlayer1} />
			</div>
		</>
	)
}

const isWin = (activeCell: Cell, cells: Cell[]): boolean => {
	const rows: Cell[] = cells.filter(cell => cell.row === activeCell.row)
	const cols: Cell[] = cells.filter(cell => cell.col === activeCell.col)

	return (
		rowValues(rows) ||
		rowValues(cols) ||
		rowValues([cells[0], cells[4], cells[8]]) ||
		rowValues([cells[2], cells[4], cells[6]])
	)
}

const rowValues = (arr: Cell[]) => {
	return (
		arr[0].value === arr[1].value &&
		arr[1].value === arr[2].value &&
		Boolean(arr[0].value)
	)
}
