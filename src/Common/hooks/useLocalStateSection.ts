import {useEffect, useState} from "react"
import {SectionCSSType} from "../../Components/Main/Main";

export const useLocalStateSection = (key: string, defaultValue: SectionCSSType) => {
	const [section, setSection] = useState(() =>
		JSON.parse(localStorage.getItem(key) || `"${defaultValue}"`),
	)
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(section))
	}, [key, section])
	return [section, setSection]
}
