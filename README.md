# Next.js App Template
This is a very basic template for a Next.js app. I've taken out most of Vercel's boilerplate code and added a few things that I like to have in my projects.

## Defaults
- **TypeScript**
- **ESLint**
- **Tailwind CSS**
- **Directory Structure**: A `src` directory is used to contain all the source code and a `public` directory for static assets.
- **App Router**
- **Turbopack**
- **Default Import Alias**: The import alias is `@/*` for the `src` directory.
- **Style note**: I've added some CSS to prevent the "rubber banding" effect seen on trackways.

## Installation
1. Clone the repository:
   ```bash
   gh repo clone beck1888/next-app-template
    ```

2. Install dependencies:
    ```bash
    npm i
    ``` 

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000` to see the app running.

5. (Optional) Remove my git folder and initialize your own source control.

6. (Optional) Delete `README.md` and add your own.

## Recommended Tooling
- **Editor**: [Visual Studio Code](https://code.visualstudio.com/)
- **Extensions**:

  - [Code Spell Checker](https://marketplace.visualstudio.com/items/?itemName=streetsidesoftware.code-spell-checker)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
  - [Path Intellisense](https://marketplace.visualstudio.com/items/?itemName=christian-kohler.path-intellisense)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

- **Theme**: [Catppuccin](https://marketplace.visualstudio.com/items/?itemName=Catppuccin.catppuccin-vsc) and [Catppuccin Icons](https://marketplace.visualstudio.com/items/?itemName=Catppuccin.catppuccin-vsc-icons)

## Recommended Directory Structure
Here is the basic structure I recommend for this app. You can for sure add components, routes, etc.

```
.
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── next-env.d.ts
├── node_modules/
├── public/
│   ├── images/
│   ├── icons/
│   └── sounds/
└── src/
    └── app/
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
```