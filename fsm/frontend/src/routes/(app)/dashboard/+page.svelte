<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { authStore } from '$lib/stores/auth.store';

  let usuario: { nombre_usuario: string; rol: string } | null = $state(null);

  onMount(() => {
    const state = get(authStore);
    if (!state.isAuthenticated) {
      goto('/login');
      return;
    }
    usuario = state.usuario;
  });
</script>

<div>
  <div class="mb-8">
    <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
    <p class="text-gray-500 mt-1">Bienvenido, {usuario?.nombre_usuario}</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a href="/clientes" class="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">👥</span>
        <h3 class="text-lg font-semibold text-gray-800">Clientes</h3>
      </div>
      <p class="text-sm text-gray-500">Gestionar clientes, buscar por RUT, ver fichas y registrar nuevos</p>
    </a>

    {#if usuario?.rol === 'ADMIN'}
      <a href="/admin/usuarios" class="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-2xl">🔑</span>
          <h3 class="text-lg font-semibold text-gray-800">Usuarios</h3>
        </div>
        <p class="text-sm text-gray-500">Crear y gestionar cuentas de usuarios del sistema</p>
      </a>
    {/if}

    <a href="/clientes/nuevo" class="bg-white rounded-xl shadow p-6 hover:shadow-md transition-shadow border border-gray-100">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">➕</span>
        <h3 class="text-lg font-semibold text-gray-800">Nuevo Cliente</h3>
      </div>
      <p class="text-sm text-gray-500">Registrar un nuevo cliente con dirección, plan y contrato</p>
    </a>

    <div class="bg-white rounded-xl shadow p-6 border border-gray-100">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">🔧</span>
        <h3 class="text-lg font-semibold text-gray-800">Órdenes de Trabajo</h3>
      </div>
      <p class="text-sm text-gray-500">Próximamente: gestión de OT, técnicos y monitoreo</p>
    </div>

    <div class="bg-white rounded-xl shadow p-6 border border-gray-100">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">📊</span>
        <h3 class="text-lg font-semibold text-gray-800">Reportes</h3>
      </div>
      <p class="text-sm text-gray-500">Próximamente: reportes de clientes, OT, facturación</p>
    </div>

    <div class="bg-white rounded-xl shadow p-6 border border-gray-100">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">📦</span>
        <h3 class="text-lg font-semibold text-gray-800">Inventario</h3>
      </div>
      <p class="text-sm text-gray-500">Próximamente: equipos, bodegas, stock y movimientos</p>
    </div>
  </div>
</div>
