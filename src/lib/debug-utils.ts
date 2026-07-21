export function inspectDebug(this: string, type: string, value: any) {
    console.debug('%s (%s): %o', this, type, value);
}
