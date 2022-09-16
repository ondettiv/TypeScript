declare module 'stats' {    
    type Comparator<T> = (value_1: T, value_2: T) => number;

    type GetIndex = <T>(input: T[] , comparator: Comparator<T>) => number;
    export const getMaxIndex: GetIndex;
    export const getMinIndex: GetIndex;
    export const getMedianIndex: GetIndex;

    type GetElement = <T>(input: T[] , comparator: Comparator<T>) => T | null;
    export const getMaxElement: GetElement;
    export const getMinElement: GetElement;
    export const getMedianElement: GetElement;
    
    type GetValue<T> = (index: T) => number;
    type AverageStats = <T>(input: T[] , getValue:GetValue<T>) => number | null;
    export const getAverageValue:AverageStats;
}
