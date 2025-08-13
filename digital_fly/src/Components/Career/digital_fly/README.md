# Digital Fly High Job Portal

Welcome to the Digital Fly High Job Portal! This project is designed to help users find and apply for job postings in a user-friendly manner. Below is an overview of the project's structure and functionality.

## Project Structure

```
digital_fly
├── src
│   ├── Components
│   │   └── Career
│   │       ├── JobPosts.jsx          # Main component for displaying job postings
│   │       ├── JobApplicationModal.jsx # Modal component for job application form
│   │       └── filp.css              # CSS styles for Career components
│   └── App.js                        # Main entry point of the application
├── package.json                      # Configuration file for npm
└── README.md                         # Documentation for the project
```

## Features

- **Job Postings**: The application displays a list of job postings with relevant details such as company name, job title, location, salary, and application deadline.
- **Job Application Modal**: Users can apply for jobs through a modal that opens when the "APPLY" button is clicked. The modal includes:
  - A form for uploading a CV in PDF format.
  - Fields for entering mobile number, address, experience, skills, and education.
  - A toggle to indicate whether the applicant is a fresher or experienced.
  - Full validation for all fields to ensure accurate submissions.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd digital_fly
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.