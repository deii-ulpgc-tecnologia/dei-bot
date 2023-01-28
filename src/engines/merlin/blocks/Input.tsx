import { RenderProps } from "../types"

export class TextInput extends Node {
	public message: string
	constructor(message: string) {
		super()
		this.message = message
	}

	component({ next, expanded }: RenderProps): React.ReactNode {
		return (
			<>
				<h1>{this.message}</h1>
				<button
					onClick={() => {
						next(expanded[0], "Siguiente")
					}}>
					Siguiente
				</button>
			</>
		)
	}
}
