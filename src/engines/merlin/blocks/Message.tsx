import { ReactNode } from "react"
import { Node } from "../core"
import { RenderProps } from "../types"

export default class Message extends Node {
	public message: string
	constructor(message: string) {
		super()
		this.message = message
		this.auto = true
	}

	render(props: RenderProps): ReactNode {
		if (this.auto === true) props.next(props.expanded[0], this.message)
		return <></>
	}
}
