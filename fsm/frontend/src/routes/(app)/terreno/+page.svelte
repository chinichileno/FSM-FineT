<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { authStore } from '$lib/stores/auth.store';

  let usuario: { nombre_usuario: string; rol: string } | null = $state(null);

  onMount(() => {
    authStore.checkAuth();
    const state = get(authStore);
    if (!state.isAuthenticated) {
      goto('/login');
      return;
    }
    usuario = state.usuario;
  });
</script>

<p class="text-gray-500">Panel de Técnico en Terreno. Funcionalidades próximamente.</p>
