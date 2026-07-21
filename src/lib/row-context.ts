import { createContext } from "svelte";
import type { ChildrenContext } from "./children-context.svelte.js";

export const [rowContext, setRowContext] = createContext<ChildrenContext>();
