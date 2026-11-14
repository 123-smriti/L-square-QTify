🎵 QTify -- Music Discovery Web Application
A React-based music discovery application that lets users explore
albums, browse songs by genre, search music content, and view album
details.
🌐 Live Demo
- Frontend: QTify
  Live
- Backend API: QTify Backend
  API
Replace the frontend URL above with your actual Vercel deployment URL
after deployment.

📌 Overview
QTify is a music discovery web application built with React. It fetches
music data from the QTify backend API and presents albums and songs
through a responsive interface. Users can explore top and newly added
albums, browse songs and genre filters, search available album content,
and open individual album pages.
✨ Features
- Top Albums -- Explore albums featured in the top albums
  collection.
- New Albums -- Discover recently added albums.
- Song Browsing -- View songs provided by the backend API.
- Genre Filters -- Browse music using available genre categories.
- Music Search -- Search album content through the navigation
  search interface.
- Album Details -- Open a dedicated page for an album.
- Responsive Interface -- Browse the application across different
  screen sizes.
- REST API Integration -- Retrieve album, song, and genre data
  from the QTify backend.
🛠️ Tech Stack
  Category          Technologies
  Frontend          React.js, JavaScript, HTML5, CSS3
UI Components     Material UI
Routing           React Router
HTTP Client       Axios
API               QTify REST API
Deployment        Vercel
Version Control   Git & GitHub
📁 Project Structure
L-square-QTify/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── api.js
│   ├── assets/
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
│   ├── helpers/
│   ├── pages/
│   │   ├── Albumpage/
│   │   └── Homepage/
│   ├── App.js
│   └── index.js
│
├── package.json
├── vercel.json
└── README.md
⚙️ Getting Started
Prerequisites
- Node.js (LTS version recommended)
- npm
- Git
Installation
1. Clone the repository:
   git clone https://github.com/<your-username>/<your-repository>.git
2. Move into the React application directory:
   cd <repository-folder>/qtify
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open http://localhost:3000 in your browser.
Production Build
To create an optimized production build, run:
npm run build
The generated production files will be available in the build/
directory.
🚀 Deployment
The frontend can be deployed on Vercel.
1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Set the Root Directory to qtify if the repository contains the
   application inside that folder.
4. Select Create React App as the framework preset.
5. Use the following build settings:
     Setting            Value
     Build Command      npm run build
   Output Directory   build
   Install Command    npm install
6. Deploy the project.
The vercel.json rewrite configuration supports client-side React
Router paths when users open or refresh an application route directly.
🔌 API Integration
QTify communicates with the Crio QTify backend API to retrieve
application data.

  Data         API Endpoint
  Top Albums   /albums/top
New Albums   /albums/new
Songs        /songs
Genres       /genres

Base URL: https://qtify-backend-labs.crio.do
🔮 Future Improvements
- Add audio playback and playlist functionality.
- Add user accounts and personalized music libraries.
- Implement advanced search, sorting, and filtering.
- Allow users to create and manage playlists.
- Add favorites and recently played tracks.
- Improve loading, empty, and error states.
👩‍💻 Author
Your Name
- GitHub: Your GitHub Profile
⭐ If you find this project useful, consider giving it a star!
