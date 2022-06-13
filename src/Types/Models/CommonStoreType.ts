export interface Meta {
    delay?: number,
    debounce?: DebounceData     
}

export interface DebounceData {
    sourceID: string,
    delay: number
}