import type { TableContext } from "$lib/table-context.svelte.js";
import { createContext } from "svelte";

export const [mdTableContext, setMdTableContext] = createContext<TableContext>();
