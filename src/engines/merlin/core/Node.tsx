import { uuid } from "../utils"
import React, { useEffect } from "react"
import { INode, RenderProps } from "../types"
import { nextTick } from "process"

export default abstract class Node implements INode {
	private _id: string
	protected auto: boolean

	constructor() {
		this._id = uuid.createId()
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
