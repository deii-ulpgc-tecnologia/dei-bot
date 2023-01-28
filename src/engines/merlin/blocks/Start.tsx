import { ReactNode } from "react"
import { Node } from "../core"
import { RenderProps } from "../types"

export default class Start extends Node {
	constructor() {
		super()
		this.auto = true
	}
}
