export function validarRut(rut: string): boolean {
  const limpio = rut.replace(/[^0-9kK]/g, '');
  if (limpio.length < 2 || limpio.length > 9) return false;

  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1).toLowerCase();

  let suma = 0;
  let multiplicador = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);
  const dvEsperado = resto === 11 ? '0' : resto === 10 ? 'k' : String(resto);

  return dv === dvEsperado;
}

export function formatearRut(rut: string): string {
  const limpio = rut.replace(/[^0-9kK]/g, '');
  if (limpio.length < 2 || limpio.length > 9) return rut;

  const cuerpo = limpio.slice(0, -1);
  const dv = limpio.slice(-1).toUpperCase();

  let formateado = '';
  let contador = 0;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    formateado = cuerpo[i] + formateado;
    contador++;
    if (contador === 3 && i > 0) {
      formateado = '.' + formateado;
      contador = 0;
    }
  }

  return formateado + '-' + dv;
}
