<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { authStore } from '$lib/stores/auth.store';
  import * as clientesApi from '$lib/api/clientes.api';
  import RutInput from '$lib/components/RutInput.svelte';

  interface ClienteListItem {
    id_cliente: number;
    rut: string;
    nombre_completo: string;
    estado: string;
    es_conflictivo: boolean;
    fecha_creacion: string;
    direccion_principal?: { direccion_completa: string; comuna: string; ciudad?: string };
  }

  let token = '';
  let rol = $state('');
  let clientes = $state<ClienteListItem[]>([]);
  let total = $state(0);
  let page = $state(1);
  let limit = 20;
  let loading = $state(true);
  let errorMsg = $state('');

  let rutBusqueda = $state('');
  let rutValido = $state(false);
  let buscando = $state(false);
  let busquedaError = $state('');

  let clienteEncontrado: clientesApi.ClienteConHistorial | null = $state(null);
  let showFicha = $state(false);

  let menuAbierto = $state(false);

  onMount(() => {
    authStore.checkAuth();
    const state = get(authStore);

    if (!state.isAuthenticated) {
      goto('/login');
      return;
    }
    if (!['ADMIN', 'JEFE_TECNICO', 'TECNICO'].includes(state.usuario?.rol ?? '')) {
      goto('/dashboard');
      return;
    }

    token = state.token ?? '';
    rol = state.usuario?.rol ?? '';
    cargarClientes();
  });

  async function cargarClientes() {
    loading = true;
    errorMsg = '';
    try {
      const result = await clientesApi.listarClientes(token, page, limit);
      clientes = result.data;
      total = result.total;
    } catch (err) {
      errorMsg = err instanceof Error ? err.message : 'Error al cargar clientes';
    } finally {
      loading = false;
    }
  }

  function handleRutChange(e: CustomEvent) {
    rutBusqueda = e.detail.rut;
    rutValido = e.detail.valido;
  }

  async function buscarPorRut() {
    if (!rutValido || !rutBusqueda) {
      busquedaError = 'Ingrese un RUT válido';
      return;
    }
    buscando = true;
    busquedaError = '';
    clienteEncontrado = null;
    try {
      clienteEncontrado = await clientesApi.buscarPorRut(token, rutBusqueda);
      showFicha = true;
    } catch (err) {
      busquedaError = err instanceof Error ? err.message : 'Error al buscar';
    } finally {
      buscando = false;
    }
  }

  function cerrarFicha() {
    showFicha = false;
    clienteEncontrado = null;
    rutBusqueda = '';
    rutValido = false;
  }

  function estadoColor(estado: string): string {
    const map: Record<string, string> = {
      ACTIVO: 'bg-green-100 text-green-800',
      SUSPENDIDO: 'bg-yellow-100 text-yellow-800',
      CORTADO: 'bg-red-100 text-red-800',
      BAJA: 'bg-gray-100 text-gray-800',
      PENDIENTE: 'bg-blue-100 text-blue-800',
    };
    return map[estado] ?? 'bg-gray-100 text-gray-800';
  }

  function verFicha(id: number) {
    goto(`/clientes/${id}`);
  }

</script>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Clientes</h2>
      {#if rol !== 'TECNICO'}
        <a
          href="/clientes/nuevo"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Nuevo Cliente
        </a>
      {/if}
    </div>

    <!-- Búsqueda por RUT -->
    <div class="bg-white rounded-xl shadow p-4 mb-6">
      <div class="flex items-end gap-4">
        <div class="flex-1">
          <RutInput onchange={handleRutChange} />
        </div>
        <button
          onclick={buscarPorRut}
          disabled={buscando}
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
        >
          {buscando ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      {#if busquedaError}
        <p class="text-red-500 text-sm mt-2">{busquedaError}</p>
      {/if}
    </div>

    <!-- Ficha del cliente encontrado -->
    {#if showFicha && clienteEncontrado}
      <div class="bg-white rounded-xl shadow p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Ficha del Cliente</h3>
          <button onclick={cerrarFicha} class="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        </div>
        <div class="mb-4">
          <p class="text-sm text-gray-600">{clienteEncontrado.cliente.nombre_completo}</p>
          <p class="text-sm text-gray-500">{clienteEncontrado.cliente.rut}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium {estadoColor(clienteEncontrado.cliente.estado)}">
            {clienteEncontrado.cliente.estado}
          </span>
          {#if clienteEncontrado.cliente.es_conflictivo}
            <span class="inline-block ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">CONFLICTIVO</span>
          {/if}
        </div>
        <button
          onclick={() => verFicha(clienteEncontrado!.cliente.id_cliente)}
          class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-colors"
        >
          Ver ficha completa
        </button>
      </div>
    {/if}

    <!-- Tabla de clientes -->
    {#if errorMsg}
      <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">{errorMsg}</div>
    {/if}

    {#if loading}
      <div class="text-center py-8 text-gray-500">Cargando clientes...</div>
    {:else}
      <div class="bg-white rounded-xl shadow overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">RUT</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comuna</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conflictivo</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each clientes as c}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-sm text-gray-900 font-mono">{c.rut}</td>
                <td class="px-6 py-4 text-sm text-gray-900">{c.nombre_completo}</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {estadoColor(c.estado)}">
                    {c.estado}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500">{c.direccion_principal?.comuna ?? '-'}</td>
                <td class="px-6 py-4">
                  {#if c.es_conflictivo}
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Sí</span>
                  {:else}
                    <span class="text-sm text-gray-400">No</span>
                  {/if}
                </td>
                <td class="px-6 py-4">
                  <button onclick={() => verFicha(c.id_cliente)} class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Ver ficha
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>

        {#if total > limit}
          <div class="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <span class="text-sm text-gray-600">Total: {total} clientes</span>
            <div class="flex gap-2">
              <button
                onclick={() => { page = Math.max(1, page - 1); cargarClientes(); }}
                disabled={page <= 1}
                class="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                Anterior
              </button>
              <span class="px-3 py-1 text-sm">Pág. {page}</span>
              <button
                onclick={() => { page++; cargarClientes(); }}
                disabled={page * limit >= total}
                class="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          </div>
        {/if}
      </div>
    {/if}
