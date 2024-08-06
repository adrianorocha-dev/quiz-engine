# Quiz Engine

## Global Requirements

### Objective

Develop a quiz engine using React and CSS/SCSS that renders quiz questions one by one based on a JSON structure. The quiz engine should support different types of questions, including:

- One-choice
- Multiple-choice
- Input questions

Additionally, it should support conditional navigation between questions based on user answers. Each slide, apart from the question itself, can have an image, title, and description.

### Tech Stack

- React
- TailwindCSS
- Next.js
- Bun (only as package manager)
- Node.js 20

### Running the project locally

To run the project locally, you need to have Node.js 20 and Bun installed on your machine. Then, run the following commands:

```bash
bun install # Install dependencies
bun run dev # Start the development server
```

This will start the development server on port 3000.
After that, you can access the quizzes at `http://localhost:3000/quiz/<quiz-id>`.

The available quiz IDs are:

- `basic`: Basic quiz
- `personality`: Personality quiz
- `hobbies`: Hobbies quiz

## Project Structure

The project is structured as follows:

```bash
public # Static assets
├── json-examples # Contains all example JSON files
src
├── app # Contains all the pages and page-specific components
├── components # Contains reusable components
├── server # Contains server-side logic
├── styles # Contains global styles
├── utils # Contains utility functions
. # Config files
```

## Caveats

If the quiz JSON file contains images from a remote URL, the domain must be whitelisted in the `next.config.js` file, in the `remotePatterns` section.
