import { type Snippet } from "svelte";

export class ChildrenContext {
    children: Snippet[];

    constructor() { 
        this.children = $state([]);
    }
}
