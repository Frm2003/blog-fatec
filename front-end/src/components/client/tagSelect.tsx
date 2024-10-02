export interface option {
    value: string;
    option: string;
}

interface iProps {
    name: string;
    options: option[];
    value?: string;
}

export function Select({ name, value, options }: iProps) {
    return (
        <select name={name} defaultValue={value}>
            {options.map((option: option, index: number) => (
                <option key={index} value={option.value}>
                    {option.option}
                </option>
            ))}
        </select>
    );
}
