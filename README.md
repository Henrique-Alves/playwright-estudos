# 🧪 Playwright Test Automation - UI + API (QA Project)

Este projeto demonstra uma arquitetura moderna de automação de testes utilizando **Playwright**, integrando **testes de UI e API**, geração de dados dinâmicos com **Faker**, validação de contrato com **Joi** e preparação para execução em **CI/CD**.

O objetivo é demonstrar práticas utilizadas por em **ambientes corporativos**.

---

# 📚 Tecnologias Utilizadas

| Ferramenta | Descrição |
|-------------|-------------|
| **Playwright** | Framework de automação de testes E2E |
| **Node.js** | Runtime JavaScript |
| **Faker.js** | Geração de dados dinâmicos para testes |
| **Joi** | Validação de schema de API |
| **GitHub Actions** | Pipeline CI/CD |
| **JavaScript (ESM)** | Linguagem principal do projeto |

---

# 🧠 Conceitos Aplicados

Este projeto implementa práticas comuns em times de **QA**:

- Page Object Model
- API Client Pattern
- Data Builder Pattern
- Test Data com Faker
- Validação de contrato de API (Joi)
- Mock de API
- Separação de testes por tipo:
  - UI
  - API
  - E2E (UI + API)
- Estrutura escalável de automação
- Preparação para CI/CD

---

# 📁 Estrutura do Projeto
playwright-estudos
│
├── tests
│ ├── ui
│ │ └── compra.spec.js
│ │
│ ├── api
│ │ └── users.spec.js
│ │
│ └── e2e
│ └── ui-api.spec.js
│
├── pages
│ ├── login.page.js
│ └── inventory.page.js
│
├── api
│ ├── clients
│ │ └── users.client.js
│ │
│ └── schemas
│ └── users.schema.js
│
├── builders
│ └── user.builder.js
│
├── mocks
│ └── users.mock.js
│
├── fixtures
│ └── test.fixture.js
│
└── playwright.config.js


---

# 🧪 Tipos de Teste

## 🔹 UI Tests

Testam apenas o comportamento da interface.

Exemplo:

- Login
- Listagem de produtos
- Fluxo de compra

Localização:
tests/ui/

---

## 🔹 API Tests

Testam endpoints diretamente.

Exemplo:

- Validação de resposta da API
- Schema validation

Localização:
tests/e2e/

---

# 🧬 Geração de Dados Dinâmicos

O projeto utiliza **Faker.js** para criar dados dinâmicos durante a execução dos testes.

Exemplo:

```javascript
faker.internet.email()
faker.person.fullName()

Implementado em:
builders/user.builder.js

Validação de API

As respostas de API são validadas usando Joi Schema Validation.

Exemplo:
const { error } = usersArraySchema.validate(json)

Arquivo:
api/schemas/users.schema.js

Mock de API

Playwright permite interceptar requests e retornar respostas mockadas.

Exemplo:
await page.route('**/users', async route => {
  await route.fulfill({
    status: 200,
    body: JSON.stringify(usersMock)
  })
})

# Como Executar o Projeto
1️⃣ Instalar Node.js

Recomendado:
Node.js >= 20
Verificar versão:
node -v

2️⃣ Instalar dependências
npm install
3️⃣ Instalar browsers do Playwright
npx playwright install
4️⃣ Executar os testes
Rodar todos os testes:
npx playwright test
5️⃣ Executar testes em modo debug
npx playwright test --debug
6️⃣ Executar apenas testes Smoke
npx playwright test --grep @smoke
7️⃣ Executar apenas testes Regression
npx playwright test --grep @regression

---

# Relatório de Testes
Após a execução, o relatório HTML pode ser aberto com:
npx playwright show-report

---

# CI/CD
O projeto está preparado para execução automática em GitHub Actions.
Pipeline inclui:
instalação de dependências
instalação de browsers
execução de testes
upload de relatório HTML

# Objetivo do Projeto
Este projeto foi desenvolvido como portfólio técnico para demonstrar habilidades de QA, incluindo:
automação de testes UI
testes de API
arquitetura escalável
geração de dados
mocks
integração com CI/CD

---

# Autor
**Henrique Alves**

---

# ⭐ Esse README já é nível empresa

**Ele mostra:**
✔ arquitetura  
✔ tecnologias  
✔ execução  
✔ conceitos QA  
✔ organização de testes
