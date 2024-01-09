# React + TypeScript + Vite
Це тестове завдання Packing Algorithm 🌍
Процес запуску проекту🚀

Для початку потрібно схилювати репозиторій, це робиться за допомогою команди нижче 🔍
git clone https://github.com/kirillvolshko/packing-algorithm.git

Далі потрібно встановити всі залежності до проекту, для цього слід прописати команду нижче 💻
npm install

Щоб запустити проект, потрібно прописати команду нижче 💻
npm run dev 

Дякую що приділили мені час. Сподіваюся, вам сподобалося виконане мною тестове завдання.⭐️

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
