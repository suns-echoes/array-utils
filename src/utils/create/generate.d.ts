/**
 * Returns value for element index.
 */
type ValueGenerator = (index: number) => any


/**
 * Returns new array with given number of elements with dynamically generated values.
 * @param length The length of the array.
 * @param generator Value generator function.
 */
export function generate(length: number, generator: ValueGenerator): any[]
