import test, { expect } from '@playwright/test';
import PaginaPrincipal from './objetos-da-pagina/PaginaPrincipal';

test.describe('Buscar Passagens', () => {
  test('Deve buscar passagens de somente ida', async ({ page }) => {
    const paginaPrincipal = new PaginaPrincipal(page);
    await paginaPrincipal.visitar();
    await paginaPrincipal.definirSomenteIda();
    await paginaPrincipal.abrirModalPassageiros();
    await paginaPrincipal.definirPassageirosAdultos(3);
    await paginaPrincipal.definirPassageiroscriancas(1);
    await paginaPrincipal.definirPassageirosbebes(1);
    await paginaPrincipal.fecharModalPassageiros();
    await paginaPrincipal.definirOrigemEDestino(
      'Minas Gerais',
      'Rio de Janeiro',
    );
    await paginaPrincipal.definirData(new Date());
    await paginaPrincipal.buscarPassagens();
    await paginaPrincipal.estaMostrandoPassagem(
      'Somente ida',
      'Minas Gerais',
      'Rio de Janeiro',
    );
  });
});
