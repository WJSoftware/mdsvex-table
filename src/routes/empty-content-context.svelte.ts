import { createContext } from "svelte";

export class EmptyContentContext {
    useEmptyContent: boolean;

    constructor(useEmptyContent: boolean = true) {
        this.useEmptyContent = $state(useEmptyContent);
    }
}

export const [emptyContentContext, setEmptyContentContext] = createContext<EmptyContentContext>();
