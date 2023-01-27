import { Node } from "../core"

export default class End extends Node {
	public message: string
	constructor(message: string) {
		super()
		this.message = message
		this.auto = true
	}
}
