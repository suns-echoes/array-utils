/**
 * Rearranges the elements in the range from start to end (exclusive) randomly, using random number generator.
 * It modifies original array and returns it.
 * @param array Array to be shuffled.
 * @param start Optional. Start from this index. Default is 0.
 * @param end Optional. End before this index. Default is array length.
 * @param randon Optional random function. Must return value between 0 and 1 (exclusive). Default is Math.random.
 */
export function shuffle(array: any[], start: number, end: number, random: () => number): any[]
