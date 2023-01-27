import { uuidgen } from "../utils"
import React, { useEffect } from "react"
import { INode, RenderProps } from "../types"

export default abstract class Node implements INode {
	private _id: string
	protected auto: boolean

	constructor() {
		this._id = uuidgen.createId()
		this.auto = false
	}

	get id() {
		return this._id
	}

	render(props: RenderProps): React.ReactNode {
		return this.component(props)
	}

	trace(output: any): React.ReactNode {
		return <>{output}</>
	}

	protected component(props: RenderProps): React.ReactNode {
		return <></>
	}
}

export class MultiOption extends Node {
	private _message: string
	private text_options: string[]

	constructor(message: string, text_options: string[]) {
		super()
		this._message = message
		this.text_options = text_options
	}

	component({ next, expanded }: RenderProps): React.ReactNode {
		return (
			<>
				<h1>{this._message}</h1>
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
