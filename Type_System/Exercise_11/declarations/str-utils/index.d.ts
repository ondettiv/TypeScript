declare module 'str-utils' {
    type StrUtil = (input: string) => string;

    // Can be use as const
    export const strReverse: StrUtil;
    export const strToLower: StrUtil;

    // Can be use as function
    export function strToUpper(value:string):string;
    export function strRandomize(value:string):string;
    export function strInvertCase(value:string):string;
}
