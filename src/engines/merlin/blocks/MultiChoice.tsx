import { Node } from "../core"
import { RenderProps } from "../types"
import { NodeProps } from "../core/Node"

interface conf extends NodeProps{
	text_options : string[]
}

export default class MultiChoice extends Node<conf> {
	component({ next, expanded, context }: RenderProps): React.ReactNode {
		return (
			<>
				{expanded.map((c, i) => (
					<button
						key={c.id}
						onClick={() => {
							next(c, this.conf.text_options[i] || "Default")
						}}>
						{this.conf.text_options[i] || "Default"}
					</button>
				))}
			</>
		)
	}

	public toJson(): { component: string; conf: conf } {
		return this._toJson("MultiChoice")
	}
}
