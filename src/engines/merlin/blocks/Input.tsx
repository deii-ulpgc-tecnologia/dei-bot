import Node from '../core/Node'
import { RenderProps } from "../types"

export default class Input extends Node {
	component({ next, expanded }: RenderProps): React.ReactNode {
		return (
			<>
				<button
					onClick={() => {
						next(expanded[0], "Siguiente")
					}}>
					Siguiente
				</button>
			</>
		)
	}

	public toJson(): { component: string; conf: {} } {
		return this._toJson("Input")
	}
}
