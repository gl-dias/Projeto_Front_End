## Caso de Uso 5: Administração do Site
**Ator Primário:** Administrador
**Objetivo:** Gerenciar o conteúdo do site, incluindo a adição, alteração e exclusão de projetos e usuários.

### Fluxo Principal:
1. **Login do Administrador**:
- O administrador precisa acessar o site.
- O administrador deve clicar em "Login" na barra de menu.
- O administrador deve inserir o e-mail e senha para autenticação.
- O sistema deve validar as credenciais e redireciona o administrador para o painel de controle.

2. **Gerenciar Projetos**:
- O administrador precisa acessar o painel de controle.
- O administrador deve clicar em "Gerenciar Projetos".
- O sistema deve exiber uma lista de projetos existentes com opções para adicionar, editar ou excluir.

- **Adicionar Novo Projeto**:
1. O administrador precisa clicar em "Adicionar Novo Projeto".
2. O administrador deve preencher o formulário com informações do projeto (nome, tecnologias usadas, descrição, etc.).
3. O administrador precisa clicar em "Salvar".
4. O sistema deve adicionar o projeto à lista e exibe uma confirmação.

- **Editar Projeto**:
1. O administrador precisa clicar no projeto desejado.
2. O sistema deve exibir o formulário de edição com informações atuais do projeto.
3. O administrador deve fazer as alterações necessárias e clica em "Salvar Alterações".
4. O sistema deve atualizar o projeto e exibir uma confirmação.

- **Excluir Projeto**:
1. O administrador precisa clicar no projeto desejado.
2. O sistema deve exibir uma opção para "Excluir Projeto".
3. O administrador precisa confirmar a exclusão.
4. O sistema deve remover o projeto da lista e exibe uma confirmação.

-**Gerenciar Usuários (opcional, se aplicável)**:
1. O administrador precisa acessar o painel de controle.
2. O administrador precsa clicar em "Gerenciar Usuários".
3. O sistema deve exibir uma lista de usuários existentes com opções para adicionar, editar ou excluir.

- **Adicionar Novo Usuário**:
1. O administrador precisa clicar em "Adicionar Novo Usuário".
2. O administrador deve preencher o formulário com informações do usuário (nome, e-mail, função, etc.).
3. O administrador precisa clicar em "Salvar".
4. O sistema deve adicionar o usuário à lista e exibe uma confirmação.

- **Editar Usuário**:
1. O administrador precisa clicar no usuário desejado.
2. O sistema deve exibir o formulário de edição com informações atuais do usuário.
3. O administrador precisa fazer as alterações necessárias e clica em "Salvar Alterações".
4. O sistema deve atualizar o usuário e exibe uma confirmação.

- **Excluir Usuário**:
1. O administrador precisa clicar no usuário desejado.
2. O sistema deve exibir uma opção para "Excluir Usuário".
3. O administrador precisa confirmar a exclusão.
4. O sistema deve remover o usuário da lista e exibe uma confirmação.

**Fluxo Alternativo**:
- Se o administrador inserir credenciais incorretas, o sistema deve exibir uma mensagem de erro e solicita nova tentativa.
- Caso o administrador não tenha permissões suficientes para uma ação, o sistema deve exibir uma mensagem de erro.

**Pré-condições**:
- O administrador deve possuir uma conta válida com credenciais corretas para acessar o painel de controle.
- O administrador deve ter permissões adequadas para adicionar, editar ou excluir projetos e usuários.

**Pós-condições**:
- As ações do administrador (adição, edição ou exclusão) são refletidas imediatamente no sistema e visíveis para os usuários do site.
