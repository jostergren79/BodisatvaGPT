## Initial Project Folder Structure

PROJECT-DRADON/
├── .vscode/
│  └── settings.json 
│
├── client/                  # Frontend code
│   ├── assets/              # Game assets like sprites, audio files, and animations
│   │   ├── images/
│   │   ├── audio/
│   │   └── animations/
│   │
│   ├── css/                 # Stylesheets
│   │   └── main.css   
│   │
│   ├── js/                  # JavaScript files
│   │   ├── scenes/          # Game scenes (e.g., main menu, game world)
│   │   ├── utils/           # Utility functions
│   │   └── game.js          # Main game initialization file
│   │
│   └── index.html           # Entry point HTML file
│
├── docs/                    # Game documents 
│   └──GameDesignDocument.md 
│
├── server/                  # Backend code
│   ├── config/              # Configuration files (e.g., database config)
│   ├── models/              # Database models (e.g., user, game state)
│   ├── routes/              # API routes (e.g., authentication, game progress)
│   └── app.js               # Main server file
│
├── shared/                  # Code shared between the client and server (if any)          
│
├── .env                     # Environment variables (e.g., database connection strings)
├── .gitignore
├── package-lock.json        # NPM package configuration
├── package.json             
└── README.md                # Project overview and setup instructions
