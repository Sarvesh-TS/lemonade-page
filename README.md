# Learn AI - Interactive Learning Platform

This is an Angular application that replicates the Learn AI interface design with a modern, responsive layout.

## Features

- **Header Component**: Session code display, participant count, and launch button
- **Sidebar Navigation**: Chapter list with active state indicators
- **Learning Content**: Main content area displaying course information
- **Connection Card**: Interactive card with connection instructions
- **Responsive Design**: Clean, modern UI with smooth animations
- **SCSS Styling**: Modular component-based styling

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   │   ├── header.component.ts
│   │   │   ├── header.component.html
│   │   │   └── header.component.scss
│   │   ├── sidebar/
│   │   │   ├── sidebar.component.ts
│   │   │   ├── sidebar.component.html
│   │   │   └── sidebar.component.scss
│   │   ├── learning-content/
│   │   │   ├── learning-content.component.ts
│   │   │   ├── learning-content.component.html
│   │   │   └── learning-content.component.scss
│   │   └── connection-card/
│   │       ├── connection-card.component.ts
│   │       ├── connection-card.component.html
│   │       └── connection-card.component.scss
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.scss
├── styles.scss
├── index.html
└── main.ts
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Build

To build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Design Features

- **Color Scheme**: Purple gradient background with white cards
- **Typography**: Inter font family for clean, modern text
- **Animations**: Smooth hover effects and floating rocket animation
- **Layout**: Flexbox-based responsive layout
- **Components**: Standalone Angular components with encapsulated styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
