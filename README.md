# Protótipo – Sistema de Rodízio de Instrutores (SENAR/TO)

Este repositório contém um protótipo estático em HTML e CSS para o “Sistema de Rodízio de Instrutores” do SENAR/TO. Ele demonstra as principais telas e fluxos, sem lógica de backend. Use-o como base para discussão, styling e validação de requisitos antes de implementar a versão final.

---

## 📁 Estrutura de Pastas
```
prototipo/
        ├── index.html # Dashboard / Visão Geral
        ├── instrutores.html # Tela de Gestão de Instrutores
        ├── cursos.html # Tela de Gestão de Cursos
        ├── modelos.html # Editor de Modelos de E-mail
        ├── status.html # Tela de Status de Convites
        └── style.css # Folha de estilo comum (CSS)
```
---

## 🔍 Descrição das Telas

1. **index.html (Dashboard)**
   - Exibe um resumo de cursos cadastrados (nome, data, localidade e quantos instrutores são necessários).
   - Mostra lista de próximos convites e seus status (pendente, respondido).

2. **instrutores.html (Gestão de Instrutores)**
   - Lista estatística de instrutores com colunas: Nome, CPF, E-mail e Status (Disponível, Recusou, etc.).
   - Botões “Editar” e “Remover” para cada instrutor (simulados).
   - Botão principal “Adicionar Novo Instrutor” (sem ação real).

3. **cursos.html (Gestão de Cursos)**
   - Tabela com Nome do Curso, Data, Local, Quantidade de Instrutores Necessários e Ações (“Editar”/“Remover”).
   - Botão “Adicionar Novo Curso” (simulado).

4. **modelos.html (Editor de Modelos de E-mail)**
   - Formulário para configurar o modelo de e-mail de convite.
   - Campos:
     - **Título do Modelo** (nome interno)
     - **Assunto do E-mail** (com variável `{{nome_curso}}`)
     - **Corpo do E-mail** (área de texto contendo HTML com variáveis dinâmicas: `{{nome_instrutor}}`, `{{data_curso}}`, `{{link_aceite}}`, `{{link_recusa}}`).
   - Botão “Salvar Modelo” (sem integração real).

5. **status.html (Status de Convites)**
   - Mostra o histórico de convites enviados, com colunas: Instrutor, Curso, Data de Envio, Resposta, Data da Resposta.
   - Exibe exemplos estáticos de respostas “Aceitou” e “Recusou”.

---

## 🎨 Folha de Estilo (style.css)

- Estilização básica usando cores e layout do SENAR/TO:
  - `header` verde escuro com título branco.
  - `nav` fixo à esquerda, fundo verde mais escuro, texto branco.
  - `main` deslocado para a direita, conteúdo em fundo claro.
- Tabelas com bordas cinza, fundo branco.
- Botões de ação: 
  - `.accept` (verde), 
  - `.decline` (vermelho).
- Formulários simples com `input`, `textarea` e `.form-group` para espaçamento.

---

## 🚀 Como Usar este Protótipo

1. **Faça o download ou clone** este repositório (ou arquivo ZIP).
2. **Extraia** o conteúdo em uma pasta local.
3. **Abra os arquivos `.html` no navegador** (Chrome, Firefox, Edge etc.). Basta dar um duplo clique sobre cada um:
   - `index.html` para visualizar o Dashboard
   - `instrutores.html` para a lista de Instrutores
   - `cursos.html` para a lista de Cursos
   - `modelos.html` para o Editor de Modelos de E-mail
   - `status.html` para o Status de Convites
4. **Não há dependências adicionais** (não precisa de servidor web ou banco de dados).  
5. **Edite o CSS ou o HTML** conforme desejar. Como este é um protótipo estático, qualquer mudança nos arquivos fonte será refletida imediatamente ao recarregar o navegador.

---

## 🎯 Objetivo do Protótipo

- **Validar o layout e a usabilidade** das telas principais antes de implementar a lógica de backend.
- Permitir que a equipe visualize:
  - Fluxo de navegação (menu lateral, cabeçalho, conteúdo principal).
  - Estrutura de tabelas e formulários.
  - Posicionamento de botões de ação e substituição de variáveis dinâmicas no editor de modelos.
- Fornecer uma base para discussão de ajustes de design, cores, fontes e organização de conteúdo.

---

## 📦 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica das páginas.
- **CSS3** – Estilo e layout responsivo básico.
- **(Estático)** – Não há scripts JavaScript ou backends integrados neste protótipo.

---

## ✏️ Próximos Passos (Quando for implementar a versão real)

1. **Integrar com Backend**:
   - API para CRUD de Instrutores e Cursos.
   - Serviço de envio de e-mail (SMTP, SendGrid, etc.).
   - Lógica de rodízio e registro de respostas.
   - Geração de PDF (ofícios) usando biblioteca (ex.: dompdf).
2. **Tornar o Editor de Modelos Dinâmico**:
   - Carregar/Salvar modelos no banco de dados.
   - Substituir variáveis no envio real.
3. **Adicionar Scripts e Lógicas de Frontend**:
   - Validação de formulários.
   - Feedback visual (toasts, alertas).
   - Navegação dinâmica (React, Vue ou vanilla JavaScript).
4. **Testes e Ajustes de UX**:
   - Testes de usabilidade com usuários finais (equipe SENAR).
   - Ajustes de responsividade para dispositivos móveis.
5. **Documentação Técnica**:
   - Manual do usuário (como usar a aplicação completa).
   - Diagramas de arquitetura e fluxos de dados.
   - Guia de implantação em servidor Linux/Apache.

---

## 👥 Equipe Envolvida

- **Gerente de Projeto / Analista de Requisitos**: Levantamento de necessidades, definição de escopo.
- **Designer / Frontend**: Ajustes de HTML/CSS, validação de protótipo visual.
- **Desenvolvedor Backend**: Implementação de APIs, lógica de rodízio, envio de e-mail, geração de PDF.
- **Desenvolvedor Frontend**: Integração com backend, validação de formulários, scripts dinâmicos.
- **QA / Testes**: Verificação de fluxos, testes de usabilidade e funcionalidade.
- **Usuários Finais (Equipe SENAR/TO)**: Validação de requisitos, feedback sobre usabilidade.

---

## 📄 Licença e Contato

Este protótipo foi criado como base para o desenvolvimento interno do SENAR/TO.  
Para dúvidas ou sugestões, entre em contato com a equipe de TI do SENAR/TO.

---

> **Observação:** Este README descreve apenas o protótipo estático.  
> A versão final do sistema envolverá integração com banco de dados, lógica de backend e serviços externos (e-mail, geração de PDF, autenticação).

