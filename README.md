# rn-assignment4-11011833
202 assignment 4

# Jobizz App

Jobizz is a React Native application that allows users to log in and view job listings. The app features a login screen, a home screen with featured and popular job listings, and job cards to display job details.

## Features

- **Login Screen**: Allows users to log in with their name and email or via social login options (Apple, Google, Facebook).
- **Home Screen**: Displays featured and popular job listings.
- **Job Cards**: Shows job details including title, company, salary, location, and company logo.

## Components

### LoginScreen

The `LoginScreen` component renders the login screen with input fields for the user's name and email, a login button, and social login options. Upon successful login, it navigates to the home screen.

### HomeScreen

The `HomeScreen` component displays the user's profile information along with sections for featured and popular job listings. It includes horizontal scrolling for featured jobs and vertical scrolling for popular jobs.

### JobCard

The `JobCard` component is used to display job details in a horizontal format. It shows the job title, company name, salary, location, and company logo.

### JobCardVertical

The `JobCardVertical` component is used to display job details in a vertical format. Similar to `JobCard`, it shows the job title, company name, salary, location, and company logo.

## Assets

The application includes various assets such as logos for companies and icons for social login buttons.

## Navigation

The app uses React Navigation to handle screen transitions. The main navigation flow is from the `LoginScreen` to the `HomeScreen`.

## Styles

The app uses `StyleSheet` from React Native to manage styles for different components, ensuring a consistent and visually appealing design.
