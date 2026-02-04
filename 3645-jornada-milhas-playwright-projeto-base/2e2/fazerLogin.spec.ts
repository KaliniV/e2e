import test, { expect } from '@playwright/test';
import PaginaLogin from './objetos-da-pagina/PaginaLogin';
test.describe('Pagina de login', () => {
  test('Deve conseguir fazer login com email e senha validos', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.visitar();
    await paginaLogin.fazerLogin('teste@gmail.com', 'teste123');
    await paginaLogin.loginFeitoComSucesso();
  });

  test('Não deve conseguir fazer login com email e senha invalido', async ({
    page,
  }) => {
    const paginaLogin = new PaginaLogin(page);
    await paginaLogin.visitar();
    await paginaLogin.fazerLogin('antonio@get.com', 'teste123');
    await paginaLogin.estaMostrandoMensagemDeErro(
      'Você não está autorizado a acessar este recurso',
    );
  });
});
