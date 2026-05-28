<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { authStore } from '$lib/stores/auth.store';
  import '../app.css';

  onMount(() => {
    authStore.checkAuth();
  });

  let { children } = $props();
</script>

{#if $page.url.pathname.startsWith('/terreno')}
  <div class="max-w-lg mx-auto min-h-screen">
    {@render children?.()}
  </div>
{:else}
  {@render children?.()}
{/if}
