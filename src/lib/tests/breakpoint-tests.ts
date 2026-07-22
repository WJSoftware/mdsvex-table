import { test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import type { TableContextOptions } from '$lib/types.js';
import Layout from '$lib/tests/Layout.svelte';
import type { BrowserPage, Locator } from 'vitest/browser';
import type { Component } from 'svelte';

type TestOptions = {
    renderAsText: string;
    locator: (page: BrowserPage) => Locator;
    expectedTagName: string;
    children?: Component;
};

export function breakpointTests(options: [TestOptions, TestOptions]) {
    const optEx = [
        {
            breakpoint: window.innerWidth - 1,
            viewportText: 'wider than'
        },
        {
            breakpoint: window.innerWidth,
            viewportText: 'narrower than or equal to'
        }
    ]
    return () => {
        options.forEach((option, index) => {
            test(`Should render as ${option.renderAsText} on viewports ${optEx[index].viewportText} the breakpoint.`, async () => {
                const ctxOptions: TableContextOptions = {
                    breakpoint: optEx[index].breakpoint,
                };
                await render(Layout, {
                    props: {
                        ctxOptions,
                        children: option.children,
                    },
                });
                const locator = option.locator(page);
                await expect.element(locator).toBeInTheDocument();
                const el = await locator.element();
                expect(el).not.toBeNull();
                expect(el.tagName.toLowerCase()).toBe(option.expectedTagName);
            });
        });
    };
}
