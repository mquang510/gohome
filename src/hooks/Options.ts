import { useEffect, useState } from "react";

export const useOption = (defaultValue: any) => {
    const [value, setValue] = useState(defaultValue)
    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])
    const onChange = (val: any) => {
        setValue(val)
    }
    return {
        value,
        onChange
    }
}