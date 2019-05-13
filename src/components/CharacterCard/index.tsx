import './style.less'
import Player from '../../model/player'

interface Props {
	player: Player
	active: boolean
}
export default function(props: Props) {
	return (
		<div className="character">
			<div
				className="character-avatar"
				style={{ backgroundImage: `url("${props.player.icon}")` }}
			/>
			<div className="character-name">{props.player.name}</div>
			<div className="character-time">{props.active ? '行动中' : ' '}</div>
		</div>
	)
}
