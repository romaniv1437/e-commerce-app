import React from 'react';

type PrivateProps = {
    options: Array<{ value: string }>,
    defaultValue: string
}

const Select = ({options, defaultValue}: PrivateProps) => {
    return (
        <select>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.value}</option>
            )}
        </select>
    );
};

export default Select;

