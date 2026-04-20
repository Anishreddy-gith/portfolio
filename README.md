# Assignment 4 - Portfolio Website

This project is a personal portfolio built with React Router and prepared for GitHub Pages deployment.

## Features

- Home page with:
  - About Me
  - Research Interests
  - Personal Details
  - Profile Picture
- Projects page with GitHub repository links
- Navigation using `NavLink`
- Routing with `HashRouter` for GitHub Pages compatibility
- Responsive custom CSS design

## Run Locally

```bash
npm install
npm run dev
```

## Deployment (GitHub Pages)

1. Create a new public repository named `portfolio`.
2. Update `homepage` in `package.json`:

```json
"homepage": "https://your-username.github.io/portfolio"
```

3. Ensure scripts exist in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Push source code to GitHub:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

5. Deploy:

```bash
npm run deploy
```

6. GitHub Pages setting:
- Repository -> Settings -> Pages
- Source branch -> `gh-pages`

## Submission

- GitHub repository link
- Live website link (example: `https://your-username.github.io/portfolio`)
