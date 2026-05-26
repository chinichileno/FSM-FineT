<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { authStore } from '$lib/stores/auth.store';

  let nombre_usuario = $state('');
  let password = $state('');
  let showPassword = $state(false);
  let errorMsg = $state('');
  let isLoading = $state(false);

  onMount(() => {
    authStore.checkAuth();
    const state = get(authStore);
    if (state.isAuthenticated) {
      goto('/dashboard');
    }
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    errorMsg = '';

    if (!nombre_usuario.trim()) {
      errorMsg = 'El nombre de usuario es obligatorio';
      return;
    }
    if (!password.trim()) {
      errorMsg = 'La contraseña es obligatoria';
      return;
    }

    isLoading = true;
    try {
      const ruta = await authStore.login(nombre_usuario, password);
      goto(ruta);
    } catch (err) {
      errorMsg = err instanceof Error ? err.message : 'Error al iniciar sesión';
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  <div class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800">FSM</h1>
      <p class="text-gray-500 mt-2">Sistema de Gestión de Instalaciones</p>
    </div>

    <form onsubmit={handleSubmit}>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Nombre de usuario <span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="nombre_usuario"
          bind:value={nombre_usuario}
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Contraseña <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            bind:value={password}
            required
            class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onclick={() => showPassword = !showPassword}
          >
            {showPassword ? '🙈' : '👁'}
          </button>
        </div>
      </div>

      {#if errorMsg}
        <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
          {errorMsg}
        </div>
      {/if}

      <button
        type="submit"
        disabled={isLoading}
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {#if isLoading}
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        {/if}
        {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>
    </form>
  </div>
</div>
