# 📅 Meetup Events

**Meetup Events** is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to help users discover and explore various events. It features a list of meetup events with filtering options for online and offline events, making it easy to find relevant gatherings. A search bar allows users to quickly locate specific events by keywords. When a user clicks on an event, they are directed to a detailed view, providing comprehensive information such as date, location, description, and organizer details.

> Built with a **React** frontend, **Node.js/Express** backend, **MongoDB** database

---

## 🔗 Demo Link

[🚀 Live Demo](https://meet-up-frontend-chi.vercel.app/)

---

## ⚙️ Quick Start

```bash
git clone https://github.com/alok-kumar21/MeetUp-frontend.git
cd MeetUp-frontend
npm install
npm run dev
```

---

## 🛠️ Technologies Used

- React JS
- React Router
- Node.js
- Express.js
- MongoDB
- Bootstrap

---

## 🎥 Demo Video

Watch a walkthrough (5–7 minutes) of all major features of this app:  
📽️ [Loom Video Link]()

---

## ✨ Features

### 🔍 Search

- Instantly search for events by typing the title in the search bar.

### 🧭 Events Filtering

- Users can filter events by:
  - ✅ Online (virtual)
  - 📍 Offline (in-person)

### 📋 Event Listing

- Displays a list of upcoming meetup events in a clean, user-friendly interface.

### 📄 Event Details

- Clicking an event opens a dedicated page with full details:
  - Date & Time
  - Location
  - Description
  - Organizer Info

---

## 📡 API Reference

### `GET /events`

List all events.  
**Sample Response**:

```json
[
  {
    "_id": "1",
    "name": "React Meetup",
    "description": "Event description..."
  }
]
```

### `GET /events/title/:titleName`

Get details for a specific event by title.  
**Sample Response**:

```json
{
  "_id": "1",
  "name": "React Meetup",
  "description": "Event description...",
  "images": []
}
```

### `POST /events`

Create a new event (protected).  
**Sample Response**:

```json
{
  "_id": "2",
  "title": "New Event",
  "name": "Event Organizer"
}
```

---

## 📬 Contact

For bugs or feature requests, please reach out to:  
📧 **alok.8kumar21@gmail.com**
