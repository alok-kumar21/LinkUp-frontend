# Linkup Events

The LinkUp App is a MERN stack (MongoDB, Express, React, Node.js) application designed to help users discover and explore various events. It features a list of LinkUp events with filtering options for online and offline events, making it easy to find relevant gatherings. A search bar allows users to quickly locate specific events by keywords.

Built with a **React** frontend, **Node.js/Express** backend, **MongoDB** database

---

## Demo Link

[Live Demo](https://link-up-frontend-kohl.vercel.app/)

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

[Loom Video Link](https://www.loom.com/share/d923cc677f254ace9bd56503a1e4124d?sid=2b4e2f05-80c6-4e18-8b80-d8cfc056c7f6)

## Features

**Search**

- Instantly search for Event by typing title in the search bar.

**Events Filtering**

- Users can filter events by online (virtual) or offline (in-person) Linkup.

**Event Listing**

- Displays a list of upcoming Linkup events in a clean, user-friendly interface.

**Event Details**

- Clicking an event opens a dedicated page with full details (date, time, location, description, organiser info)

## API Reference

### **GET /events**<br>

List all Events<br>
Sample Response:<br>
`[{id: ObjectId(67caca659c47b951a156ff4a)title: "Marketing Seminar", details: "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"... }]`

### **GET /events/title/:titleName**<br>

Get details for one Product<br>
Sample Response:<br>
`[{id: ObjectId(67caca659c47b951a156ff4a)title: "Marketing Seminar", details: "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"... }]`

## Contact

For bugs or feature requests, please reach out to alok.8kumar21@gmail.com
