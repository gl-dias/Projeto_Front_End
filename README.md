# Projeto_Front_End
Grupo: VAGG <br/>
Grupo da turma de Projeto Front-End 2024.2

# Integrante:
- Juliana de Oliveira https://github.com/Julijolie/react-base-project
- Gabriel Brião -> https://github.com/brioncio/react-base-project
- Guilherme Dias -> https://github.com/gl-dias/react-base-project
- Arthur Azeredo -> https://github.com/Arthur-azeredo/react-base-project
- Pedro Quadrat -> https://github.com/PedroQuadrat/react-base-project
- Raphael de Oliveira -> https://github.com/Raphael220904/react-base-project

# Propósito:
O repositório irá conter o portifólio dos alunos de diferentes cursos da faculdade IBMEC, 
afim de demonstrar a experiência, o conhecimento e os projetos de cada um.

# 5W2H:
- What?: É um meio de mostrar as capacidades dos estudantes, a partir de um modelo de portifólio unificado.
- Why?: É um facilitador para o empregador na hora da análise de competência individual.
- Where?: Na faculdade, mas o sistema pode ser visto online além de ter seu acesso possível por outros meios digitais.
- When?: Quando o contratante sentir interesse no sistema dos alunos. 
- Who?: Os empregadores.
- How?: Acessando através da internet. 
- How Much?: Não há custos materiais, apenas o custo do tempo dos integrantes.

# Requisitos funcionais:
- O sistema deve possuir barra de menu (cursos, projetos, Sobre nós, fale conosco)
- O sistema deve possuir barra de busca
- O sistema deve listar projetos
- Somente o administrador do sistema pode adicionar e alterar projetos
- O sistema deve possuir filtro para busca
- O sistema deve possuir um botão para redefinir os filtros
- O Sistema deve possuir informação da função da pessoa no projeto e duração
- O sistema deve possuir o e-mail dos participantes do projeto

# Requisitos não funcionais:
- O Design básico seguindo a identidade visual da IBMEC
- O sistema deve possuir um API
- O sistema deve ter responsividade
- O sistema deve ser feito em JavaScript e React
- Somente o administrador do sistema terá cadastro

-------------------------------------------------------------
*AULA 12/09/2024*
### Detalhamento dos requisitos (tudo que o cliente precisa para acessar o site) *OK*

### Casos de uso de sistema: *(fazer uma pasta para cada caso de uso)*:
   - (motivo pra que o usuário irá usar o sistema. Possui atores[usuários ou perfil de usuários] - usar verbos no infinitivo)
   - (Descrição- detalhamento sem formato estabelecido)
   - (pré-condições)
### (Fluxo ) *falta: fluxo adm-site --> IMPORTANTE: O ADM É O ÚNICO QUE USA LOGUIN E SENHA. SOMENTE ELE EDITA, ADICIONA E EXCLUI ALUNOS E PROJETOS)
----------------------------------------------------------------

# Detalhamento dos Requisitos

# O sistema deve possuir barra de menu (cursos, projetos, Sobre nós, fale conosco):
- Descrição: O sistema deve apresentar uma barra de menu na parte superior da interface.
- Itens do Menu:
- Cursos: A Página deve listar todos os cursos disponíveis.
- Projetos: Página deve listar todos os projetos em andamento.
- Sobre Nós: A Página deve conter informações institucionais.

# O sistema deve possuir barra de busca:
- O sistema deve incluir uma barra de busca visível.
- A barra de busca deve permitir que os usuários busquem por cursos e projetos.
- A busca deve retornar resultados relevantes e ser capaz de lidar com erros de digitação.

# O sistema deve listar projetos:
- O sistema deve listar todos os projetos disponíveis.
- A listagem deve ser paginada se houver muitos projetos.

# Somente o administrador do sistema pode adicionar e alterar projetos:
- Somente usuários com permissão de administrador devem poder adicionar ou alterar projetos.
- Usuários não-administradores não devem ver opções de adicionar ou editar.

# O sistema deve possuir filtro para busca:
- O sistema deve oferecer opções de filtro para refinar a busca de projetos.
- Os filtros devem ser intuitivos e as combinações de filtros devem retornar resultados adequados.

# O sistema deve possuir um botão para redefinir os filtros:
- Ao clicar, todos os filtros devem ser removidos, retornando à visualização inicial.
- O botão deve ser visível e fácil de usar.

# O Sistema deve possuir informação da função da pessoa no projeto e duração:
- O sistema deve exibir a função de cada participante no projeto e a duração do envolvimento.
- As informações devem ser claras e facilmente acessíveis na página do projeto.

# O sistema deve possuir o e-mail dos participantes do projeto:
- O sistema deve armazenar e exibir os e-mails dos participantes de cada projeto.
- A informação deve ser exibida na listagem de participantes, respeitando a privacidade e regulamentações de proteção de dados.

# Design:
- O design do sistema deve seguir a identidade visual do IBMEC.

# O sistema deve possuir um API:
- O sistema deve possuir uma API para permitir interações externas.
- A API deve ser testada.

# O sistema deve ter responsividade:
- O sistema deve ser responsivo, adaptando-se a diferentes tamanhos de tela.
- O layout deve ser funcional e esteticamente agradável em dispositivos móveis, tablets e desktops.

# O sistema deve ser feito em JavaScript e React:
- O sistema deve ser desenvolvido utilizando JavaScript e React.
- O código deve ser revisado e cumprir com os padrões de qualidade.

# Somente o administrador do sistema terá cadastro:
- Somente administradores devem ter a capacidade de se cadastrar no sistema.
- Usuários comuns não devem ter acesso ao formulário de cadastro.

---
# FLUXO CLIENTE-SITE
## Caso de Uso 1: Buscar Aluno ou Projeto
**Ator Primário:** Cliente (contratante)  
**Objetivo:** O cliente quer buscar por um aluno ou projeto específico.

### Fluxo Principal:
1. Acessar o site.
2. Clicar no ícone da lupa.
3. Digitar o nome do aluno ou do projeto.
4. Filtrar a linguagem de programação/estruturação através de um checkbox.
5. Clicar no botão de 'Enter'.
6. **Se o cliente busca por um aluno:**  
   O sistema deve exibir os resultados em formato de cards, contendo foto do aluno, nome, função e vínculo no projeto.
7. **Se o cliente busca por um projeto:**  
   O sistema deve exibir os resultados em formato de cards, contendo nome do projeto, tecnologias usadas, descrição breve.
8. Selecionar a melhor opção clicando no card correspondente.
9. O sistema redireciona o cliente para a página de detalhes do aluno ou projeto.
10. O cliente visualiza informações de contato do aluno (se a busca foi por aluno), ou, se foi por projeto, ele visualiza uma lista de todos os alunos que participaram do projeto.

### Fluxo Alternativo:
- Se o cliente digitar incorretamente o nome, ele pode visualizar sugestões de busca.
- **3.1.** Se o cliente digitar incorretamente o nome, o sistema sugere correções ou oferece resultados semelhantes.
- **4.1.** O cliente pode escolher usar também os seguintes filtros: tecnologias, ferramentas, cursos, período dos projetos, unidades.

**Pré-condições**:

- O cliente deve ter acesso ao site.
- O sistema de busca deve estar funcionando corretamente e visível no site.
- Os dados dos alunos e projetos devem estar cadastrados e disponíveis no banco de dados.
- Os filtros de linguagem, tecnologias, e outros critérios devem estar configurados no sistema.

**Pós-condições**:

- O cliente visualiza os resultados da busca em formato de cards, conforme o tipo de busca (aluno ou projeto).
- O cliente pode visualizar as informações detalhadas do aluno (incluindo contato) ou do projeto (com lista de participantes) ao clicar no card correspondente.
- Se a busca tiver algum erro de digitação, o sistema oferece sugestões ou resultados semelhantes.
- O cliente pode aplicar filtros adicionais para refinar a busca.

---

## Caso de Uso 2: Visualização dos projetos
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja visualizar todos os projetos dos cursos da faculdade IBMEC.

### Fluxo Principal:
1. Acessar o site.
2. Clicar em "Projetos" na barra de menu.
3. O sistema deve exibir todos os projetos em forma de cards, cada um com um título, tecnologia utilizada, uma breve descrição e um link com todos os alunos que participaram do projeto.

**Pré-condições**:

- O cliente deve ter acesso ao site.
- O menu "Projetos" deve estar visível e funcional.
- Os projetos da faculdade IBMEC devem estar cadastrados e organizados no sistema.
- Cada projeto deve conter título, tecnologia usada, breve descrição e a lista de alunos participantes.

**Pós-condições**:

- O cliente visualiza todos os projetos em formato de cards, com as respectivas tecnologias e descrições.
- O cliente pode clicar nos cards para visualizar mais detalhes sobre o projeto e acessar a lista de todos os alunos que participaram dele.
---

## Caso de Uso 3: Conhecimento sobre a Equipe
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja saber mais sobre o time que desenvolveu o site.

### Fluxo Principal:
1. Clicar em "Sobre Nós" na barra de menu.
2. O sistema deve exibir uma página com a equipe de desenvolvimento, incluindo fotos, nomes, função, uma breve descrição e informação de contato.
3. Clicar em informações de contato para enviar e-mail ou visitar perfil do integrante.

**Pré-condições**:

- O cliente deve ter acesso ao site.
- A página "Sobre Nós" deve estar disponível e visível no menu do site.
- As informações sobre a equipe devem estar cadastradas no sistema.

**Pós-condições**:

- O cliente deve conseguir visualizar as fotos, nomes, funções, descrições e contatos dos membros da equipe.
- O cliente pode acessar informações de contato dos integrantes para enviar e-mails ou visitar seus perfis.

---

## Caso de Uso 4: Conhecimento sobre a Instituição IBMEC
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja saber mais sobre a instituição IBMEC.

### Fluxo Principal:
1. Acessar o site.
2. Clicar em "Institucional" na barra de menu.
3. Visualizar cards de cada unidade da faculdade IBMEC.
4. Clicar no card.
5. O cliente é encaminhado para o site institucional do polo clicado.

**Pré-condições**:

- O cliente deve ter acesso ao site.
- O menu "Institucional" e os cards das unidades devem estar corretamente cadastrados e visíveis no site.
- Os links para os sites institucionais dos polos devem estar ativos.

**Pós-condições**:

- O cliente pode visualizar as informações institucionais e os cards de cada unidade da faculdade.
- Ao clicar no card de uma unidade, o cliente é redirecionado para o site institucional correspondente.
- O cliente pode retornar à página inicial clicando na logo do site.

---

## Comportamento Geral:
- Sempre que o cliente clicar na logo, ele será redirecionado para a página inicial.

---

# FLUXO ADM-SITE
## Caso de Uso 5: Administração do Site
**Ator Primário:** Administrador
**Objetivo:** Gerenciar o conteúdo do site, incluindo a adição, alteração e exclusão de projetos e usuários.

### Fluxo Principal:
1. **Login do Administrador**:
- O administrador acessa o site.
- Clica em "Login" na barra de menu.
- Insere o e-mail e senha para autenticação.
- O sistema valida as credenciais e redireciona o administrador para o painel de controle.

2. **Gerenciar Projetos**:
- O administrador acessa o painel de controle.
- Clica em "Gerenciar Projetos".
- O sistema exibe uma lista de projetos existentes com opções para adicionar, editar ou excluir.

- **Adicionar Novo Projeto**:
1. O administrador clica em "Adicionar Novo Projeto".
2. Preenche o formulário com informações do projeto (nome, tecnologias usadas, descrição, etc.).
3. O administrador clica em "Salvar".
4. O sistema adiciona o projeto à lista e exibe uma confirmação.

- **Editar Projeto**:
1. O administrador clica no projeto desejado.
2. O sistema exibe o formulário de edição com informações atuais do projeto.
3. O administrador faz as alterações necessárias e clica em "Salvar Alterações".
4. O sistema atualiza o projeto e exibe uma confirmação.

- **Excluir Projeto**:
1. O administrador clica no projeto desejado.
2. O sistema exibe uma opção para "Excluir Projeto".
3. O administrador confirma a exclusão.
4. O sistema remove o projeto da lista e exibe uma confirmação.

3. **Gerenciar Usuários** (opcional, se aplicável):
- O administrador acessa o painel de controle.
- Clica em "Gerenciar Usuários".
- O sistema exibe uma lista de usuários existentes com opções para adicionar, editar ou excluir.

- **Adicionar Novo Usuário**:
1. O administrador clica em "Adicionar Novo Usuário".
2. Preenche o formulário com informações do usuário (nome, e-mail, função, etc.).
3. O administrador clica em "Salvar".
4. O sistema adiciona o usuário à lista e exibe uma confirmação.

- **Editar Usuário**:
1. O administrador clica no usuário desejado.
2. O sistema exibe o formulário de edição com informações atuais do usuário.
3. O administrador faz as alterações necessárias e clica em "Salvar Alterações".
4. O sistema atualiza o usuário e exibe uma confirmação.

- **Excluir Usuário**:
1. O administrador clica no usuário desejado.
2. O sistema exibe uma opção para "Excluir Usuário".
3. O administrador confirma a exclusão.
4. O sistema remove o usuário da lista e exibe uma confirmação.

**Fluxo Alternativo**:
- Se o administrador inserir credenciais incorretas, o sistema exibe uma mensagem de erro e solicita nova tentativa.
- Caso o administrador não tenha permissões suficientes para uma ação, o sistema exibe uma mensagem de erro.

**Pré-condições**:
- O administrador deve possuir uma conta válida com credenciais corretas para acessar o painel de controle.
- O administrador deve ter permissões adequadas para adicionar, editar ou excluir projetos e usuários.

**Pós-condições**:
- As ações do administrador (adição, edição ou exclusão) são refletidas imediatamente no sistema e visíveis para os usuários do site.

