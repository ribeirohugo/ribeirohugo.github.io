# Hugo Ribeiro - Personal Website

A modern, responsive personal website built with React showcasing my skills, projects, and experience as a Software Developer & Backend Engineer.

## 🌟 Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Overview of my background and expertise
- **Skills Section**: Comprehensive display of technical skills organized by category
- **Projects Section**: Featured open-source projects from my GitHub profile
- **Contact Section**: Easy ways to get in touch via social platforms
- **Responsive Design**: Fully responsive and mobile-friendly
- **Smooth Navigation**: Smooth scrolling between sections
- **Modern UI**: Clean design with gradient colors and smooth animations

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **Create React App** - Toolchain for React development
- **CSS3** - Modern styling with animations and transitions
- **GitHub Pages** - Deployment platform

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ribeirohugo/ribeirohugo.git
cd ribeirohugo
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the app in development mode:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Build

Build the app for production:
```bash
npm run build
```

This builds the app for production to the `build` folder, optimizing the build for the best performance.

### Deploy to GitHub Pages

Deploy the website to GitHub Pages:
```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

## 📁 Project Structure

```
ribeirohugo/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

To customize the website with your own information:

1. Update the content in each component file (`Hero.js`, `About.js`, `Skills.js`, `Projects.js`, `Contact.js`)
2. Modify the colors and styles in the corresponding CSS files
3. Update the project information in `Projects.js` with your own GitHub repositories
4. Change the social links in `Contact.js` to your profiles

## 📝 License

This project is open source and available under the MIT License.

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Setup Instructions:**

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select:
   - Source: **GitHub Actions**
3. Push your changes to the `main` branch
4. The workflow will automatically build and deploy your site
5. Your site will be available at `https://ribeirohugo.github.io/ribeirohugo`

### Option 2: Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

**Setup for manual deployment:**

1. Go to repository Settings > Pages
2. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
3. Run `npm run deploy` from your local machine
4. Your site will be available at `https://ribeirohugo.github.io/ribeirohugo`

## 👤 Author

**Hugo Ribeiro**
- GitHub: [@ribeirohugo](https://github.com/ribeirohugo)

## 🙏 Acknowledgments

- Built with Create React App
- Icons and design inspiration from modern portfolio websites
- Color scheme using gradient combinations
