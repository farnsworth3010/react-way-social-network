export const required = (value) => {
    if(!value) return "Field is required"
    return undefined
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value && value.length>maxLength) return "Max length is "+maxLength
    return undefined
}