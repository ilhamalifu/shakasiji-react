# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment Variables

### Web3Forms Setup

The contact form uses Web3Forms to send emails. To configure:

1. Get your access key from [Web3Forms](https://web3forms.com)
2. Create a `.env.local` file in the project root:
   ```bash
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```
3. Do NOT commit `.env.local` to version control (it's already in `.gitignore`)
4. Restart the dev server after adding the env var

### Testing Web3Forms API

Test the API directly with curl:

```bash
curl -X POST https://api.web3forms.com/submit \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "access_key": "your-access-key-here",
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

Expected response on success:
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```
