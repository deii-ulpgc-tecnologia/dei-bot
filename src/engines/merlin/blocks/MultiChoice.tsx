import { Node } from "../core"
import { RenderProps } from "../types"

export class MultiChoice extends Node {
	private _message: string
	private text_options: string[]

	constructor(message: string, text_options: string[]) {
		super()
		this._message = message
		this.text_options = text_options
	}

	component({ next, expanded, context }: RenderProps): React.ReactNode {
		return (
			<>
				{expanded.map((c, i) => (
					<button
						key={i}
						onClick={() => {
							next(c, this.text_options[i] || "Default")
						}}>
						{this.text_options[i] || "Default"}
					</button>
				))}
			</>
		)
	}
}
