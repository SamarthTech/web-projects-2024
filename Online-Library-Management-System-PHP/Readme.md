How to run this Library Management System Project


1. Put library folder inside�root directory

Database Configuration

Open phpmyadmin
Create Database�library
Import database library.sql (available inside zip package)

For User

Open Your browser put inside browser �http://localhost/library�
Login Details for user:�
Username: test@gmail.com
Password: Test@123

For Admin Panel

Open Your browser put inside browser �http://localhost/library/admin�
Login Details for admin :�
Username: admin
Password:Test@123

Here's a README documentation for your Online Library Management System using PHP:

---

# Online Library Management System

This project is an **Online Library Management System** built with PHP and MySQL. The system allows users to manage and browse library resources online. It supports key functionalities like user authentication (login and registration), session management, and book management. This documentation provides an overview of how to set up, configure, and run the project.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Configuration](#configuration)
7. [Database Setup](#database-setup)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- User login, signup, and session management.
- Dashboard for users to access library resources.
- Admin panel to manage users, books, and library functions.
- Secure password encryption using MD5.
- Error handling and form validation.
- Responsive UI built with Bootstrap.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](http://www.wampserver.com/en/) (for PHP, MySQL, and Apache server)
- PHP >= 7.0
- MySQL >= 5.6
- Web browser (e.g., Chrome, Firefox)
- Code editor (e.g., VS Code, Sublime)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd library-management-system
   ```

3. **Move the project to your server root directory:**
   - For XAMPP: Move the project folder to `C:/xampp/htdocs/`.
   - For WAMP: Move the project folder to `C:/wamp/www/`.

4. **Start the Apache and MySQL servers using XAMPP/WAMP control panel.**

5. **Install dependencies:**
   - If using Composer for dependency management, install the required packages:

   ```bash
   composer install
   ```

---

## Usage

1. Open your web browser and navigate to:

   ```bash
   http://localhost/library-management-system/
   ```

2. You'll be directed to the login page, where users can log in or register.
3. After logging in, users will be redirected to the dashboard to manage library resources.

---



## Configuration

### Database Configuration

1. Open the `includes/config.php` file.
2. Modify the following section with your database credentials:

   ```php
   <?php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'root');  // Database username
   define('DB_PASS', '');      // Database password
   define('DB_NAME', 'library');  // Database name

   try {
       $dbh = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
   } catch (PDOException $e) {
       exit("Error: " . $e->getMessage());
   }
   ?>
   ```

---

## Database Setup

1. Open **phpMyAdmin** by navigating to:

   ```bash
   http://localhost/phpmyadmin/
   ```

2. Create a new database named `library`.
3. Import the provided SQL file (if any) into the database or run the following SQL script to create the necessary tables:

   ```sql
   CREATE TABLE `tblstudents` (
     `StudentId` int(11) NOT NULL AUTO_INCREMENT,
     `EmailId` varchar(100) NOT NULL,
     `Password` varchar(100) NOT NULL,
     `Status` int(1) DEFAULT '1',
     PRIMARY KEY (`StudentId`)
   );
   ```

4. Modify and add other tables as per project requirements (e.g., books, authors, etc.).

---

## Contributing

Feel free to contribute to the project. Fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Credits

- Developed using PHP and MySQL.
- Frontend powered by Bootstrap and Font Awesome.

---

This README provides the basic steps to get started with the Online Library Management System. Make sure to modify the content according to your project's requirements and expand functionalities as needed.

