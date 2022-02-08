/**
 * 
 * @param {Array} formValues 
 */
function getRequestBodyFromValues(formValues) {
    return 'Hello';
}

const input = [{ field: 'name', value: 'Son' }]

const output = getRequestBodyFromValues(input);
console.log(output);