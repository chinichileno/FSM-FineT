<script lang="ts">
  import { onMount } from 'svelte';
  import { authStore } from '$lib/stores/auth.store';
  import '../app.css';

  onMount(() => {
    authStore.checkAuth();
  });

  let { children } = $props();
</script>

{@render children?.()}
