import { uuidgen } from "./utils"
import React from "react"

interface RenderProps {
	next: (A: Node) => void
	expanded: Node[]
	context: object
}

export default class Node {
	private _id: string
	private _message: string
	private text_options: string[]

	constructor(message: string, text_options: string[]) {
		this._id = uuidgen.createId()
		this._message = message
		this.text_options = text_options
	}

	get id() {
		return this._id
	}

	render({ next, expanded, context }: RenderProps): React.ReactNode {
        console.log(expanded)
		return (
			<>
				<h1>{this._message}</h1>
				{expanded.map((c, i) => (
					<button key={i} onClick={() => next(c)}>{this._message[i]}</button>
				))}
			</>
		)
	}
}
