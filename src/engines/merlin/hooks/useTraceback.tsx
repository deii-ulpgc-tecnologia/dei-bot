import react, { useState } from "react"

export default function useTraceback<T>() {
	const [trace, setTrace] = useState<T[]>([])

	function addTrace(element: T) {
		setTrace((trace) => [...trace, element])
	}

	return {
		trace,
		addTrace,
	}
}
