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

  function saludo(): string {
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 19) return 'Buenas tardes';
    return 'Buenas noches';
  }
</script>

<!-- Hero de bienvenida -->
<div class="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white px-8 py-10 mb-8 shadow-xl">
  <p class="text-slate-400 text-sm font-medium uppercase tracking-widest mb-1">{saludo()}</p>
  <h1 class="text-3xl font-bold mb-1">{usuario?.nombre_usuario ?? '—'}</h1>
</div>

<!-- Grid de módulos -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

  <!-- Clientes -->
  <a href="/clientes"
    class="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">👥</div>
      <div>
        <h3 class="font-semibold text-slate-800 text-base">Clientes</h3>
        <p class="text-slate-500 text-sm mt-0.5 leading-snug">Buscar por RUT, ver fichas y gestionar estado</p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
  </a>

  <!-- Órdenes de Trabajo -->
  <a href="/ot"
    class="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">🔧</div>
      <div>
        <h3 class="font-semibold text-slate-800 text-base">Órdenes de Trabajo</h3>
        <p class="text-slate-500 text-sm mt-0.5 leading-snug">Crear OT, asignar técnicos y seguir estados</p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-0.5 w-full bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
  </a>

  <!-- Nuevo Cliente -->
  <a href="/clientes/nuevo"
    class="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">➕</div>
      <div>
        <h3 class="font-semibold text-slate-800 text-base">Nuevo Cliente</h3>
        <p class="text-slate-500 text-sm mt-0.5 leading-snug">Registrar cliente con dirección, plan y contrato</p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-0.5 w-full bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
  </a>

  <!-- Nueva OT -->
  {#if usuario?.rol === 'ADMIN' || usuario?.rol === 'JEFE_TECNICO'}
  <a href="/ot/nueva"
    class="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl">📋</div>
      <div>
        <h3 class="font-semibold text-slate-800 text-base">Nueva OT</h3>
        <p class="text-slate-500 text-sm mt-0.5 leading-snug">Crear una orden de trabajo paso a paso</p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
  </a>
  {/if}

  <!-- Usuarios (solo ADMIN) -->
  {#if usuario?.rol === 'ADMIN'}
  <a href="/admin/usuarios"
    class="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl">⚙️</div>
      <div>
        <h3 class="font-semibold text-slate-800 text-base">Usuarios</h3>
        <p class="text-slate-500 text-sm mt-0.5 leading-snug">Crear y gestionar cuentas del sistema</p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 h-0.5 w-full bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
  </a>
  {/if}


  <!-- Agregar con las proximas features -->
  <!-- Reportes (próximamente) 
  <div class="relative overflow-hidden bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6 opacity-60">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">📊</div>
      <div>
        <h3 class="font-semibold text-slate-600 text-base">Reportes</h3>
        <p class="text-slate-400 text-sm mt-0.5 leading-snug">Próximamente disponible</p>
      </div>
    </div>
  </div>
  -->
  <!-- Inventario (próximamente) 
  <div class="relative overflow-hidden bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-6 opacity-60">
    <div class="flex items-start gap-4">
      <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">📦</div>
      <div>
        <h3 class="font-semibold text-slate-600 text-base">Inventario</h3>
        <p class="text-slate-400 text-sm mt-0.5 leading-snug">Próximamente disponible</p>
      </div>
    </div>
  </div>
  -->
</div>
