# Playwright Get Started

Projeto de automação de testes end-to-end usando [Playwright](https://playwright.dev/).

## Pré-requisitos
- Node.js 18+ instalado
- Git instalado

## Instalação
```bash
npm install
```

## Estrutura do Projeto
```
├── pages/           # Page Objects (POM)
│   ├── login.js
│   ├── products.js
│   └── checkout.js
├── tests/
│   └── demo/        # Testes automatizados
│       ├── login.spec.js
│       ├── products.spec.js
│       ├── checkout.spec.js
│       └── logout.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Como rodar os testes

Executar todos os testes:
```bash
npx playwright test
```

Executar um teste específico:
```bash
npx playwright test tests/demo/login.spec.js --project=chromium
```

Executar com navegador visível (headed):
```bash
npx playwright test demo --headed
```

## Boas práticas adotadas
- Uso de Page Object Model (POM) para separar ações e seletores
- Locators centralizados no construtor dos page objects
- Asserções principais feitas nos próprios testes
- Fluxos mínimos e claros em cada teste
- Testes independentes e de fácil manutenção

## Dicas úteis
- Para gerar um novo teste, use:
  ```bash
  npx playwright codegen https://www.saucedemo.com/
  ```
- Para abrir o relatório HTML dos testes:
  ```bash
  npx playwright show-report
  ```

## Referências
- [Documentação Playwright](https://playwright.dev/)
- [Guia oficial de boas práticas](https://playwright.dev/docs/test-best-practices)

---

Mantenha seus page objects enxutos e seus testes claros. Bons testes! 🚀
