export function delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
}

export async function getDelayedNumber(value: number, millis: number): Promise<number> {
    await delay(millis);
    return value;
}