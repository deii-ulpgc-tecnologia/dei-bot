import { ReactNode } from "react"
import { Node } from "../core"
import { RenderProps } from "../types"

export default class End extends Node {
	render(props: RenderProps): ReactNode {
		props.next(props.expanded[0])
		return <></>
	}

	public toJson(): { component: string; conf: {} } {
		return this._toJson("End")
	}
}
