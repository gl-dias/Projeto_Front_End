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
#Detalhamento dos requisitos (tudo que o cliente precisa para acessar o site)

#Casos de uso de sistema: (fazer uma pasta para cada caso de uso):
### (motivo pra que o usuário irá usar o sistema. Possui atores[usuários ou perfil de usuários] - usar verbos no infinitivo)
### (Descrição- detalhamento sem formato estabelecido)
### (pré-condições)
### (Fluxo )
----------------------------------------------------------------

# Detalhamento dos Requisitos

### Dispositivos compatíveis:
- O cliente deve ter acesso a um dispositivo com conexão à internet (desktop, tablet ou smartphone).

### Navegadores suportados:
- Google Chrome, Mozilla Firefox, Safari, Microsoft Edge (ou versões atualizadas de navegadores modernos).

### Conexão de internet:
- O site deve ser acessado via uma conexão de internet estável (preferencialmente de alta velocidade).

### Compatibilidade com resoluções variadas:
- O site deve ser responsivo para diferentes tamanhos de tela (computadores, tablets, smartphones).

### Leitores de tela:
- O site deve ser acessível para usuários com deficiências visuais, compatível com leitores de tela.

### Dark-mode:
- O site deve possuir a opção de dark-mode para o usuário configurar a forma mais confortável de visualizar a tela.

---
# FLUXO CLIENTE-SITE
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

---

## Caso de Uso 2: Visualização dos projetos
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja visualizar todos os projetos dos cursos da faculdade IBMEC.

### Fluxo Principal:
1. O cliente acessa o site.
2. Clica em "Projetos" na barra de menu.
3. O sistema exibe todos os projetos em forma de cards, cada um com um título, tecnologia utilizada, uma breve descrição e um link com todos os alunos que participaram do projeto.

---

## Caso de Uso 3: Conhecimento sobre a Equipe
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja saber mais sobre o time que desenvolveu o site.

### Fluxo Principal:
1. O cliente clica em "Sobre Nós" na barra de menu.
2. O sistema exibe uma página com a equipe de desenvolvimento, incluindo fotos, nomes, função, uma breve descrição e informação de contato.
3. O cliente pode clicar em informações de contato para enviar um e-mail ou visitar perfis dos integrantes.

---

## Caso de Uso 4: Conhecimento sobre a Instituição IBMEC
**Ator Primário:** Cliente  
**Objetivo:** O cliente deseja saber mais sobre a instituição IBMEC.

### Fluxo Principal:
1. O cliente acessa o site.
2. Clica em "Institucional" na barra de menu.
3. Visualiza cards de cada unidade da faculdade IBMEC.
4. O cliente clica no card.
5. O cliente é encaminhado para o site institucional do polo clicado.

---

## Comportamento Geral:
- Sempre que o cliente clicar na logo, ele será redirecionado para a página inicial.

---

