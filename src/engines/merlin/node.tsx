import { uuidgen } from "./utils"
import React, { useEffect } from "react"

export interface INode {
	id: string
	render(next: (A: INode) => void, expanded: INode[], context: object): React.ReactNode
}

abstract class Node implements INode {
	private _id: string

	constructor() {
		this._id = uuidgen.createId()
	}

	get id() {
		return this._id
	}

	render(next: (A: Node) => void, expanded: Node[], context: object): React.ReactNode {
		return <></>
	}
}

export default class MessageNode extends Node {
	private _message: string
	private text_options: string[]

	constructor(message: string, text_options: string[]) {
		super()
		this._message = message
		this.text_options = text_options
	}

	render(next: (A: Node) => void, expanded: Node[], context: object): React.ReactNode {
		return (
			<>
				<h1>{this._message}</h1>
				{expanded.map((c, i) => (
					<button key={i} onClick={() => next(c)}>
						{this.text_options[i] || "Default"}
					</button>
				))}
			</>
		)
	}
}

export class TextChoiceNode extends Node {
	public message: string
	constructor(message: string) {
		super()
		this.message = message
	}

	render(next: (A: Node) => void, expanded: Node[], context: object): React.ReactNode {
		return (
			<>
				<h1>{this.message}</h1>
				<input></input>
				<button onClick={() => next(expanded[0])}>Siguiente</button>
			</>
		)
	}
}
