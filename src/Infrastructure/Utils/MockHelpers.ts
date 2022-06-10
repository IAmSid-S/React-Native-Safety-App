export const delay = async(seconds: number): Promise<number> => {
    return new Promise<number>((res,rej) => setTimeout(() => res(seconds), seconds * 1000))
}