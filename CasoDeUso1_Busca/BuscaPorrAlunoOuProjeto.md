## Caso de Uso 1: Busca por Aluno ou Projeto
**Ator Primário:** Cliente (contratante)  
**Objetivo:** O cliente quer buscar por um aluno ou projeto específico.

### Fluxo Principal:
1. O cliente deve acessar o site.
2. O cliente deve clicar no ícone da lupa.
3. O cliente deve digitar o nome do aluno ou do projeto.
4. O sistema vai filtrar a linguagem de programação/estruturação através de um checkbox.
5. O cliente deve clicar no botão de 'Enter'.
6. **Se o cliente busca por um aluno:**  
   O sistema deve exibir os resultados em formato de cards, contendo foto do aluno, nome, função e vínculo no projeto.
7. **Se o cliente busca por um projeto:**  
   O sistema deve exibir os resultados em formato de cards, contendo nome do projeto, tecnologias usadas, descrição breve.
8. O cliente deve selecionar a melhor opção clicando no card correspondente.
9. O sistema deve redirecionar o cliente para a página de detalhes do aluno ou projeto.
10. O cliente vai visualizar informações de contato do aluno (se a busca foi por aluno), ou, se foi por projeto, ele vai visualizar uma lista de todos os alunos que participaram do projeto.

### Fluxo Alternativo:
- Caso o cliente digite incorretamente o nome, ele pode visualizar sugestões de busca.
- **3.1.** Se o cliente digitar incorretamente o nome, o sistema deve sugerir correções ou oferecer resultados semelhantes.
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
