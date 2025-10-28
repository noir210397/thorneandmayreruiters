export function makeUniqueStringArray(arr: string[]) {
    return [...new Set(arr)].map(i => i.toLowerCase());
}
