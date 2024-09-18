## Caso de Uso 1: Busca por Aluno ou Projeto
**Ator Primário:** Cliente (contratante)  
**Objetivo:** O cliente quer buscar por um aluno ou projeto específico.

### Fluxo Principal:
1. O cliente acessa o site.
2. Clica no ícone da lupa.
3. Digita o nome do aluno ou do projeto.
4. Filtra a linguagem de programação/estruturação através de um checkbox.
5. Clica no botão de 'Enter'.
6. **Se o cliente busca por um aluno:**  
   O sistema exibe os resultados em formato de cards, contendo foto do aluno, nome, função e vínculo no projeto.
7. **Se o cliente busca por um projeto:**  
   O sistema exibe os resultados em formato de cards, contendo nome do projeto, tecnologias usadas, descrição breve.
8. Seleciona a melhor opção clicando no card correspondente.
9. O sistema redireciona o cliente para a página de detalhes do aluno ou projeto.
10. O cliente visualiza informações de contato do aluno (se a busca foi por aluno), ou, se foi por projeto, ele visualiza uma lista de todos os alunos que participaram do projeto.

### Fluxo Alternativo:
- Caso o cliente digite incorretamente o nome, ele pode visualizar sugestões de busca.
- **3.1.** Se o cliente digitar incorretamente o nome, o sistema sugere correções ou oferece resultados semelhantes.
- **4.1.** O cliente pode escolher usar também os seguintes filtros: tecnologias, ferramentas, cursos, período dos projetos, unidades.