# Lord of Strings Badminton Academy

## 📘 Project Description

A responsive website for a badminton academy built using HTML, CSS, JavaScript, and PHP. The homepage links to sections such as Hall of Fame, Academy Details, About, Mission and Vision, Registration Form, and Contact. The interface includes scrolling text, image galleries, styled content via CSS, and real-time validation using JavaScript. PHP handles data storage from the registration form into a local database via XAMPP. Media assets like player images and logos are organized in the `images` folder. The site enables online registration, displays batch schedules and fees, and celebrates notable alumni. Future enhancements include video sessions and online payment integration.

---

## ✨ Features

- Homepage with navigation to all major sections
- Hall of Fame showcasing alumni and achievers
- Academy details including fee structure and batch timings
- About, Mission and Vision sections with academy insights
- Online registration form with validation
- Contact form with mail and call hyperlinks
- JavaScript-based input validation
- PHP integration to store and display registration data
- Clean, modular design with multiple CSS files

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (client-side validation)
- PHP (server-side processing)
- XAMPP (Apache, MySQL for local server/database)
- Image assets (JPG, PNG)

---

## ⚙️ Installation Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/Simple-badminton-academy-website.git
   ```

2. **Move Files to XAMPP Directory**

    ```bash
   C:/xampp/htdocs/ 
   ```

3. **Launch XAMPP Control Panel**

    Start `Apache` and `MySQL`

4. **Set Up the Database and Table**

    - Visit `http://localhost/phpmyadmin`
    - Create a database (e.g., `badminton`)
    - Select the `badminton` database, then click on SQL tab and run the following query to create the required table: (or optionally import an SQL file if available)
    ```bash
    CREATE TABLE `badminton_table` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `F_NAME` VARCHAR(50) NOT NULL,
    `L_NAME` VARCHAR(50) NOT NULL,
    `Mobile` VARCHAR(15) NOT NULL,
    `City` VARCHAR(50) NOT NULL
    );
   ```

5. **Run the Application**

    - Visit `http://localhost/Simple-badminton-academy-website/` in your browser
    - Navigate to the Registration page, fill out the form, and submit it to test PHP and MySQL integration