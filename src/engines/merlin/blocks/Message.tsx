import { NodeProps } from "../core/Node"
import { ReactNode } from "react"
import { Node } from "../core"
import { RenderProps } from "../types"

interface conf extends NodeProps{
	message ?: string,
}

export default class Message extends Node<conf> {
	render(props: RenderProps): ReactNode {
		props.next(props.expanded[0], this.conf.message)
		return <></>
	}
	public toJson(): { component: string; conf: {} } {
		return this._toJson("Message")
	}
}
