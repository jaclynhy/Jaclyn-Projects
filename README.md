# Jaclyn's Projects

# Bug Tracker (JavaScript)

## Overview

This is a simple bug tracking web application built using HTML, CSS, and JavaScript.
The app allows users to log bugs, assign severity levels, and track their status.

I built this project to strengthen my understanding of frontend logic, state management, and to apply my QA testing experience in a practical way.

Testing

---

## Features

* Add bugs with title, description, and severity
* View a list of all reported bugs
* Toggle bug status (Open / Closed)
* Persistent storage using browser localStorage
* Basic input validation

---

## Tech Stack

* HTML
* CSS
* JavaScript (Vanilla)
* Browser Local Storage

---

## How It Works

1. User inputs bug details (title, description, severity)
2. A bug object is created and stored in an in-memory array
3. The UI dynamically renders the bug list
4. Users can toggle the status of each bug
5. Data is saved to localStorage to persist across page reloads

---

## Installation

```bash
git clone https://github.com/yourusername/bug-tracker
cd bug-tracker
```

---

## Usage

Open the `index.html` file in your browser:

```bash
open index.html
```

---

## Testing

As part of my QA background, I tested several edge cases:

* Empty input validation (e.g. missing title)
* Rapid multiple submissions
* Handling large text input
* Status toggle consistency
* Data persistence after page reload

---

## Challenges & Learnings

* Learned how to manage application state using JavaScript arrays
* Improved understanding of DOM manipulation
* Practiced thinking from both developer and QA perspectives
* Gained experience handling edge cases and user input validation

---

## Future Improvements

* Filter bugs by status (Open / Closed)
* Add edit and delete functionality
* Assign bugs to users
* Improve UI/UX design
* Convert to a full-stack app with backend database

---

## Author

Jaclyn

