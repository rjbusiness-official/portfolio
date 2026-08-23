# Foreign Client Portfolio

A Next.js, TypeScript, and Tailwind CSS portfolio built to help attract foreign clients from OnlineJobs.ph and similar remote job platforms.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Customize

Update your name, email, location, services, projects, workflow, and skills in `app/page.tsx`.

Update the site title and description in `app/layout.tsx`.

## Deploy To GitHub Pages

This project is configured for GitHub Pages at:

```text
https://rjbusiness-official.github.io/portfolio/
```

In the GitHub repository, open `Settings > Pages` and set `Build and deployment > Source` to `GitHub Actions`.

Then push the project:

```bash
git init
git branch -M main
git remote add origin https://github.com/rjbusiness-official/portfolio.git
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push -u origin main
```

After the push, open the repository `Actions` tab and wait for `Deploy Next.js site to Pages` to finish.
