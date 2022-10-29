# Interview Scheduler

## Project Description
Interview Scheduler is a Single Page Application (SPA) to visualize student interviews with interviewers by using modern tools and practices.
This application allows users to add, edit and delete appointments. It features the React framework, as well as many accompanying testing suites including Jesy, Cypress and Storybook.
The database is managed by an API server using PostgreSQL. The client application communicates with an API server using the JSON format.

## Project Features
- Appointment days (Monday to Friday) are conveniently displayed for easy interaction. 
- The days show the number of empty appointment slots available and update based on user interaction.
- The user can choose a day to book and see which appointments are available based on the timeslot.
- A user can book interviews by typing in their name and clicking a potrait of an interviewer. A loading component is shown as well.
- A user can edit the details of an interview by simplying clicking the edit button.
- A user can cancel an appointment by clicking the delete button which will prompt a response to verify their action.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
