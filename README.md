# 📄 React Employee Pagination App

#🧾 Overview

The Employee Pagination App is a ReactJS application that displays employee data fetched from a remote API in a paginated table format.

It allows users to navigate through the data seamlessly using Previous and Next buttons while maintaining an intuitive and responsive user interface — all built without any external UI libraries.

# ✨ Features

✅ Fetches employee data from a public API
✅ Displays records in a table (10 rows per page)
✅ Pagination using Previous and Next buttons
✅ Disables navigation when on the first or last page
✅ Error handling for failed API requests
✅ Clean UI built using only HTML, CSS, and React

# 🌐 API Endpoint

The data is fetched from the following endpoint:
```
https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
```

# 🧠 Application Behavior
# 🖥️ Initial Render

The app displays:

A table of 10 employee records

A Previous and Next button for pagination

A page indicator showing the current page number

# Example Table Layout:
```
ID	Name	Email	Role
1	John Doe	john@abc.com
	Admin
2	Jane Smith	jane@abc.com
	Member
...	...	...	...
```

# ⏮️ Previous Button

When on the first page, clicking Previous does nothing.

On any other page, clicking Previous takes the user to the previous page and updates the page number accordingly.

# ⏭️ Next Button

When on the last page, clicking Next does nothing.

On any other page, clicking Next takes the user to the next page and updates the page number accordingly.

# 📋 Pagination Rules

10 rows are displayed on each page.

The last page may contain fewer than 10 rows depending on the total data count.

The pagination state updates dynamically with user interaction.

# ⚠️ Error Handling

If the API request fails, an alert box is displayed with the message:

failed to fetch data

Additionally, the error is logged to the console using:

console.error("Error fetching data:", error);

# 🧩 Implementation Details

Built using React Functional Components

Used useState() and useEffect() hooks for data management and lifecycle handling

Pagination logic implemented manually — no external libraries

Buttons created using the standard <button> element

Data displayed using the HTML <table> element with semantic structure

# ⚙️ Tech Stack

Technology	Purpose

ReactJS	Component-based UI development

HTML5	Table and structure

CSS3	Styling and layout

JavaScript (ES6+)	Pagination and data fetching

Fetch API	To retrieve remote employee data

# 🚀 Installation and Setup

Follow the steps below to run the application locally:

Clone the Repository
```
git clone https://github.com/dhamodharanECE/Build-the-XPagination-Implementation.git
```
cd project

Install Dependencies
```
npm install
```
Start the Application
```
npm start
```

Open in Browser
```
http://localhost:3000
```

# 🧠 Learnings

Implementing manual pagination logic in React

Efficient use of React state to manage pages

API fetching and error handling best practices

Handling conditional rendering of buttons and table data

Creating a fully functional UI without external libraries

# 📸 UI Preview:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/785e1db2-c9fd-4c83-940e-4abc51c01e73" />

# Development Link:
```base
https://github.com/dhamodharanECE/Build-the-XPagination-Implementation.git

