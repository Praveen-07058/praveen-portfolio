# Praveen Sidharth — Frontend Developer Portfolio

A responsive React + Vite portfolio with a white, navy, and blue visual theme. It includes an introduction, skills, six project cards, GitHub repository links, Netlify live demos, and email contact.

## Requirements
- Node.js (current LTS version recommended)
- npm (included with Node.js)

## Run locally on Windows
1. Extract the ZIP folder.
2. Open the extracted `praveen-portfolio` folder.
3. In File Explorer, click the address bar, type `cmd`, and press Enter. Alternatively, open the folder in VS Code and use Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To stop the development server, click its terminal and press `Ctrl + C`.

## Test a production build
Run:
```bash
npm run build
npm run preview
```
Vite creates the production website in the `dist` folder.

## Deploy to Netlify (GitHub method)
1. Push this project folder to a new GitHub repository.
2. Sign in to Netlify and choose **Add new site → Import an existing project**.
3. Connect GitHub and select the new portfolio repository.
4. Use these settings:
   - **Base directory:** leave blank (the `package.json` is in the repository root).
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Choose **Deploy site**. Netlify will build and publish it.
6. Optional: change the generated Netlify site name under Site configuration / Domain management.

The included `public/_redirects` file is useful if client-side routes are added later. This portfolio currently uses in-page sections rather than React Router.

## Personal files already included
- Your profile photo is saved at `public/profile.jpg` and displayed in the hero section.
- Your resume PDF is saved at `public/resume.pdf`. The **Download Resume** button downloads it as `Praveen-Sidharth-Resume.pdf`.
- No LinkedIn link is shown because no URL was supplied. Add one after you have your profile URL.
- **Project descriptions:** Descriptions are based on the project names and supplied URLs. Review and edit them in the `projects` array in `src/App.jsx` so each description matches the exact functionality in your app.
- **Project stack tags:** The technology labels are starter descriptions based on project type. Verify them against each repository before publishing, and correct them if necessary.

## Project URLs
GitHub profile: https://github.com/Praveen-07058

1. Travel Agency Landing Page — https://travel-agency-landing-page-12.netlify.app/
2. Card Flipping Memory Game — https://card-flipping-memory-game-12.netlify.app/
3. Income & Expense Calculator — https://income-expense-calculator-task-12.netlify.app/
4. Add to Cart — Modal — https://add-to-cart-task-using-modal-12.netlify.app/
5. Add to Cart — React Router — https://add-to-cart-task-using-router-12.netlify.app/
6. Movie Search App — https://movies-search-app-12.netlify.app/
