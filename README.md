# Smart Registration Form

A simple and responsive registration form built using HTML, CSS, and JavaScript. The form includes client-side validation for user inputs and provides real-time feedback to enhance the user experience.

## Features

- User-friendly registration form
- Name, Email, Password, Confirm Password, and Bio fields
- Email format validation
- Password length validation (minimum 6 characters)
- Confirm password matching validation
- Character counter for the bio field
- Error messages displayed for invalid inputs
- Submit button remains disabled until all fields are valid
- Responsive and clean user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Validation Rules

### Name
- Cannot be empty

### Email
- Cannot be empty
- Must be in a valid email format

### Password
- Cannot be empty
- Must contain at least 6 characters

### Confirm Password
- Must match the password field

### Bio
- Cannot be empty
- Maximum 200 characters

## Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your web browser.

No additional setup or dependencies are required.

## Future Improvements

- Add password strength indicator
- Store form data using Local Storage
- Integrate backend API for form submission
- Add success notification after submission

## Author

Developed as a simple JavaScript form validation project for learning and practice purposes.
