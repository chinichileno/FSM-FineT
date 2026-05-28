<script lang="ts">
  interface Tecnico {
    id_usuario: number;
    nombre_completo: string;
    ot_activas: number;
    en_curso: boolean;
  }

  let { tecnico }: { tecnico: Tecnico } = $props();

  const circulo = $derived(
    tecnico.en_curso
      ? 'bg-green-100 text-green-600'
      : tecnico.ot_activas > 0
        ? 'bg-blue-100 text-blue-600'
        : 'bg-gray-100 text-gray-400',
  );

  const badge = $derived(
    tecnico.en_curso
      ? 'bg-green-100 text-green-700'
      : tecnico.ot_activas > 0
        ? 'bg-blue-100 text-blue-700'
        : 'bg-gray-100 text-gray-500',
  );

  const badgeText = $derived(
    tecnico.en_curso ? 'En terreno' : tecnico.ot_activas > 0 ? `${tecnico.ot_activas} OT` : 'Libre',
  );
</script>

<div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
  <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 {circulo}">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
  <div class="flex-1 min-w-0">
    <p class="font-medium text-sm text-gray-800 truncate">{tecnico.nombre_completo}</p>
    <p class="text-xs text-gray-500">
      {tecnico.ot_activas} OT activas{#if tecnico.en_curso} · En terreno{/if}
    </p>
  </div>
  <span class="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 {badge}">
    {badgeText}
  </span>
</div>
