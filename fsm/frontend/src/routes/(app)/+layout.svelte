<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { authStore } from '$lib/stores/auth.store';

  let isAuthenticated = $state(false);
  let usuario: { nombre_usuario: string; rol: string } | null = $state(null);

  onMount(() => {
    authStore.checkAuth();
    const state = get(authStore);
    if (!state.isAuthenticated) {
      goto('/login');
      return;
    }
    isAuthenticated = state.isAuthenticated;
    usuario = state.usuario;
  });

  function cerrarSesion() {
    authStore.logout();
  }

  let { children } = $props();
</script>

{#if isAuthenticated && usuario}
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14">
          <div class="flex items-center gap-8">
            <a href="/dashboard" class="text-xl font-bold text-gray-800">FSM</a>
            <div class="flex items-center gap-1">
              <a href="/dashboard" class="px-3 py-1.5 text-sm rounded-md transition-colors {$page.url.pathname === '/dashboard' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}">
                Dashboard
              </a>
              <a href="/clientes" class="px-3 py-1.5 text-sm rounded-md transition-colors {$page.url.pathname.startsWith('/clientes') ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}">
                Clientes
              </a>
              {#if usuario.rol === 'ADMIN'}
                <a href="/admin/usuarios" class="px-3 py-1.5 text-sm rounded-md transition-colors {$page.url.pathname === '/admin/usuarios' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}">
                  Usuarios
                </a>
              {/if}
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-500">
              {usuario.nombre_usuario}
              <span class="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {usuario.rol}
              </span>
            </span>
            <button
              onclick={cerrarSesion}
              class="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {@render children?.()}
    </main>
  </div>
{:else}
  {@render children?.()}
{/if}
