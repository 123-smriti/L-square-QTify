# 🎵 QTify – Music Discovery Web Application

A React-based music discovery platform that lets users explore albums, browse songs by genre, search music content, and view album details through a responsive interface.

## 🌐 Live Demo

- **Frontend:** [QTify Live](YOUR_VERCEL_DEPLOYMENT_URL)
- **Backend API:** [QTify Backend API](https://qtify-backend-labs.crio.do)

## 📌 Overview

QTify is a music discovery web application built with React.js. It fetches music data from the QTify REST API and presents albums and songs through a clean, responsive interface.

Users can explore top and newly added albums, browse songs, filter music by genre, search available content, and view individual album details.

## ✨ Features

- **Top Albums:** Explore featured albums.
- **New Albums:** Discover recently added music.
- **Song Browsing:** Browse songs available through the backend API.
- **Genre Filters:** Explore music by genre.
- **Music Search:** Search album content using the navigation search interface.
- **Album Details:** View dedicated pages for individual albums.
- **Responsive Design:** Optimized for different screen sizes.
- **REST API Integration:** Fetch albums, songs, and genres dynamically.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript |
| Markup & Styling | HTML5, CSS3 |
| UI Components | Material UI |
| Routing | React Router |
| HTTP Client | Axios |
| API | QTify REST API |
| Deployment | Vercel |
| Version Control | Git & GitHub |

## 📁 Project Structure

```text
QTify/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── api.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── button/
│   │   ├── card/
│   │   ├── carousel/
│   │   ├── filters/
│   │   ├── hero/
│   │   ├── logo/
│   │   ├── navbar/
│   │   ├── search/
│   │   └── section/
│   │
│   ├── helpers/
│   │
│   ├── pages/
│   │   ├── Albumpage/
│   │   └── Homepage/
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── vercel.json
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run QTify locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd QTify
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

**5. Open the application**

Visit:

```text
http://localhost:3000
```

## 🏗️ Production Build

To generate an optimized production build:

```bash
npm run build
```

The production-ready files will be generated inside the `build/` directory.

## 🚀 Deployment

QTify frontend can be deployed using [Vercel](https://vercel.com/).

### Deployment Steps

1. Push your project to GitHub.
2. Log in to Vercel.
3. Import your GitHub repository.
4. Select the project root directory.
5. Choose **Create React App** as the framework preset.
6. Configure the following build settings:

| Setting | Value |
|---|---|
| Build Command | `npm run build` |
| Output Directory | `build` |
| Install Command | `npm install` |

7. Click **Deploy**.

The `vercel.json` configuration supports React Router navigation and direct access to application routes.

## 🔌 API Integration

QTify uses the Crio QTify backend API to retrieve music-related data.

**Base URL:** https://qtify-backend-labs.crio.do

| Feature | API Endpoint |
|---|---|
| Top Albums | `/albums/top` |
| New Albums | `/albums/new` |
| Songs | `/songs` |
| Genres | `/genres` |

## 🔮 Future Improvements

- Add audio playback functionality.
- Implement playlist creation and management.
- Introduce user authentication and personalized libraries.
- Improve search with advanced filtering and sorting.
- Add favorites and recently played tracks.
- Enhance loading, error, and empty states.

## 👩‍💻 Author

**Smriti Kumari**

- GitHub: [123-smriti](https://github.com/123-smriti)

---

⭐ If you find this project useful, consider giving it a star!

**Built with React.js and ❤️ for music discovery.**




 
