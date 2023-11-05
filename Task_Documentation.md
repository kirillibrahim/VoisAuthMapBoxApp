# _Vois Frontend Task Documentation

This documentation provides an overview of the frontend task, including requirements, key features, and instructions for running the project.

## Task Description

The goal of this task is to create a simple map-box web application using ReactJS. The application should have the following pages:

1. User Registration Page
2. Login Page
3. User List Page
4. Map Page
5. 404 Page

The application should include authentication, user registration, user listing, and map visualization features.

## Requirements

- The implementation follows React best practices and the latest standards.
- The project uses Redux for state management.
- TypeScript and hooks are used for development.
- Styling is done using React Material UI.
- Two external endpoints are available to interact with: `/login` and `/register` for authentication and `/users` and `/polygons` for data retrieval.
- The map page displays a map using Mapbox as the base layer and uses DeckGL to visualize regions.

## Libraries used for Render map

npm install deck.gl --save 
npm install --save react-map-gl mapbox-gl @types/mapbox-gl

Mapbox GL JS is a Javascript library that uses WebGL to render maps and deck.gl is Uber’s data visualization library that is built on top of Mapbox GL. Using these in conjunction will allow you to display a map with data overlays.

