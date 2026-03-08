# Meme Generator

A fun and simple React application that allows users to create custom memes by adding text to randomly selected meme images.

## Features

- **Random Meme Images**: Fetches a collection of popular meme templates from the Imgflip API
- **Custom Text**: Add your own top and bottom text to create personalized memes
- **Real-time Preview**: See your meme update instantly as you type
- **Responsive Design**: Works well on different screen sizes

## Technologies Used

- **React 19**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS**: Custom styling with gradients and text effects
- **Imgflip API**: Source of meme images

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd meme-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter your desired text in the "Top Text" and "Bottom Text" input fields
2. Click the "Get a new meme image" button to load a random meme template
3. Your custom meme will appear below with the text overlaid on the image
4. Repeat the process to create more memes!

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # App header with title and logo
│   ├── Main.jsx        # Main content with form and meme display
│   └── Meme.jsx        # Reusable meme component (currently unused)
├── assets/
│   └── images/
│       └── troll-face.png  # Header logo
├── App.jsx             # Main app component
├── index.jsx           # App entry point
├── App.css             # Component styles
└── index.css           # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API

This app uses the [Imgflip API](https://api.imgflip.com/get_memes) to fetch meme templates. No API key is required for this endpoint.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is part of the Scrimba learn React course.
