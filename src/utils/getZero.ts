
export const getZero = (num: number) => (
    num > 0 && num < 10
        ? '0' + num
        : String(num)
)