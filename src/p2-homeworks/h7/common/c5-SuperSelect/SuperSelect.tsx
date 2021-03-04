import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react"
import s from './SuperSelect.module.sass'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: Array<string>
    onChangeOption: (option: string) => void
}


const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [
      options.map( (options, index) => <option key={index}> {options} </option>)
    ]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value
      onChangeOption(value)
    }

    return (
        <div className={s.selectOverlay}>
          <select  onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
          </select>
        </div>

    )
}

export default SuperSelect;
