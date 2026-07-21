import { createContext } from "svelte";
import type { ChildrenContext } from "./children-context.svelte.ts";

export class ContainerContext { 
    rows: ChildrenContext[];
    type: 'header' | 'body';
    constructor(type: 'header' | 'body') {
        this.type = type;
        this.rows = $state([]);
    }
}

export const [containerContext, setContainerContext] = createContext<ContainerContext>();
