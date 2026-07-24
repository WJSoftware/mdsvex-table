<script lang="ts">
    import { resolve } from '$app/paths';
    import ExternalLink from './ExternalLink.svelte';

    let menuIsActive = $state(false);
</script>

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <div class="navbar-item navbar-title">mdsvex-table</div>
            <button
                type="button"
                class={["navbar-burger", menuIsActive && "is-active"]}
                aria-label="menu"
                aria-expanded={menuIsActive}
                onclick={() => (menuIsActive = !menuIsActive)}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
        <div class={["navbar-menu", menuIsActive && "is-active"]}>
            <div class="navbar-start">
                <a
                    class="navbar-item"
                    href={resolve('/')}
                >
                    Docs
                </a>
                <a
                    class="navbar-item"
                    href={resolve('/demo')}
                >
                    Demonstration
                </a>
            </div>
            <div class="navbar-end">
                <ExternalLink noIcon href="https://mdsvex.pngwn.io/" class="navbar-item">
                    MDsveX
                </ExternalLink>
                <div class="navbar-item">
                    <ExternalLink noIcon
                        class="button is-black"
                        href="https://github.com/WJSoftware/mdsvex-table"
                    >
                        <img
                            src="https://github.githubassets.com/favicons/favicon-dark.svg"
                            alt="github"
                            style="width: 1.1em; height: 1.1em;"
                        />
                    </ExternalLink>
                </div>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar-title {
        font-weight: bold;
        font-size: 1.5rem;
    }
</style>
