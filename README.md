# Meetup Events

The Meetup App is a MERN stack (MongoDB, Express, React, Node.js) application designed to help users discover and explore various events. It features a list of meetup events with filtering options for online and offline events, making it easy to find relevant gatherings. A search bar allows users to quickly locate specific events by keywords. When a user clicks on an event, they are directed to a detailed view, providing comprehensive information such as date, location, description, and organizer details. This app offers a seamless and interactive experience for event discovery, catering to both virtual and in-person meetups.

Built with a **React** frontend, **Node.js/Express** backend, **MongoDB** database

---

## Demo Link

[Live Demo](https://meet-up-frontend-chi.vercel.app/)

---

## Quick Start

```
git clone https://github.com/alok-kumar21/MeetUp-frontend.git
cd <your-repo>
npm install
npm run dev

```

## Technologies

- React JS
- React Router
- Node.js
- Express
- MongoDB
- Bootstrap

## Demo Video

Watch a walkthrough (5–7 minutes) of all major features of this app:
[Loom Video Link]()

## Features

**Search**

- Instantly search for Event by typing title in the search bar.

**Events Filtering**

- Users can filter events by online (virtual) or offline (in-person) meetups.

**Event Listing**

- Displays a list of upcoming meetup events in a clean, user-friendly interface.

**Event Details**

- Clicking an event opens a dedicated page with full details (date, time, location, description, organizer info)

## API Reference

### **GET /events**<br>

s
List all Events<br>
Sample Response:<br>
`[{ _id, name, description, ... }, …]`

### **GET /events/title/:titleName**<br>

Get details for one Product<br>
Sample Response:<br>
`{ _id, name, description, images}`

### **POST /events**<br>

Create a new recipe (protected)<br>
Sample Response:<br>
`{ _id, title, name, ... }`

## Contact

For bugs or feature requests, please reach out to alok.8kumar21@gmail.com
