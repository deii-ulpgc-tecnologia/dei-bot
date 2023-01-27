import { ReactNode } from "react"
import { Node } from "../core"
import { RenderProps } from "../types"

export default class Start extends Node {
	public message: string
	constructor(message: string) {
		super()
		this.message = message
		this.auto = true
	}
}
