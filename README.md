# Community Events - Frontend Developer Intern Assignment

A modern, responsive React application for discovering and joining local community events. Built with mobile-first design principles and clean architecture.

**Assignment Submission** - Frontend Developer Intern Position

## Overview

Community Events is a React-based web application that allows users to browse, filter, and RSVP for local community events. The application features a clean, intuitive interface with mobile-first responsive design, making it accessible across all devices.

### Key Features

- **Mobile-First Design**: Responsive layout that works seamlessly on mobile, tablet, and desktop
- **Advanced Filtering**: Filter events by type, location, date, and search text
- **Event Discovery**: Browse through curated community events with detailed information
- **RSVP System**: Join events with confirmation modal and status tracking
- **Fast Performance**: Built with Vite for optimal development and production builds
- **Modern UI**: Clean, professional design using Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 19.0.0
- **Build Tool**: Vite 7.3.1
- **Routing**: React Router DOM 7.0.2
- **Styling**: Tailwind CSS 3.4.17
- **State Management**: React Context API
- **Data**: Static JSON mock data

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aryan4766/community-events-frontend.git
   cd community-events-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/` (or the port shown in terminal)

## Usage

### Browsing Events
- View all available community events on the home page
- Events are displayed in a responsive grid layout
- Each event card shows key information and links to detailed view

### Filtering Events
- **Type Filter**: Select specific event types (Workshop, Music, Sports, Meetup, etc.)
- **Location Filter**: Choose events by city (Bangalore, Mumbai, Delhi, etc.)
- **Date Filter**: Find events from a specific date onwards
- **Search**: Text search across event titles and descriptions
- **Combined Filtering**: All filters work together for precise results

### Event Details & RSVP
- Click any event card to view full details
- See complete event information (date, location, host, description)
- RSVP to join events with confirmation modal
- Track your joined events status

### Responsive Design
- **Mobile (< 640px)**: Single column layout, stacked filters
- **Tablet (640px - 1024px)**: Two-column grid, improved spacing
- **Desktop (> 1024px)**: Three-column grid, horizontal filter bar

## Project Structure

```
community-events/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── EventCard.jsx       # Individual event display card
│   │   ├── FilterBar.jsx       # Event filtering controls
│   │   ├── Navbar.jsx          # Navigation header
│   │   └── RSVPModal.jsx       # Event confirmation modal
│   ├── context/
│   │   └── EventsContext.jsx   # Global state management
│   ├── data/
│   │   └── events.json         # Static event data
│   ├── pages/
│   │   ├── EventDetails.jsx    # Individual event page
│   │   └── Home.jsx            # Main events listing page
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles & Tailwind imports
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # Project documentation
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting (if configured)
npm run lint
```

## Design Decisions

### Mobile-First Approach
- Designed for mobile devices first, then enhanced for larger screens
- Ensures optimal experience on the most commonly used devices
- Responsive breakpoints: `sm:`, `md:`, `lg:`

### Clean Architecture
- Separation of concerns with dedicated folders for components, pages, and context
- Reusable components with clear responsibilities
- Context API for global state management (no external state libraries)

### User Experience
- Intuitive navigation with clear visual hierarchy
- Loading states and empty state handling
- Accessible design with proper contrast and spacing
- Touch-friendly interface for mobile users

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices and hooks patterns
- Maintain mobile-first responsive design
- Use Tailwind CSS utility classes for styling
- Keep components small and focused on single responsibilities
- Test responsiveness across different screen sizes

## Data Structure

Events are stored in `src/data/events.json` with the following structure:

```json
{
  "events": [
    {
      "id": 1,
      "title": "Community Yoga Session",
      "type": "Fitness",
      "date": "2025-08-20",
      "location": "Bangalore",
      "host": "Yoga with Anu",
      "description": "Join us for a peaceful yoga session in Cubbon Park."
    }
  ]
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of a Frontend Developer Intern assignment
- Uses modern React patterns and best practices
- Mobile-first responsive design principles
- Clean code architecture for maintainability

## Support

For questions or issues, please open an issue in the repository or contact the development team.

---

Built with React, Vite, and Tailwind CSS