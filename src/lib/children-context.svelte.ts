import { type Snippet } from "svelte";

export class ChildrenContext {
    children: (Snippet | undefined)[];

    constructor() { 
        this.children = $state([]);
    }
}
