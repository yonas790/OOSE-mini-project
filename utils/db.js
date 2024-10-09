const mysql = require('mysql');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'HospitalManagementSystem'
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

let admin = `CREATE TABLE IF NOT EXISTS admin(
    admin_id int primary key auto_increment,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) not null,
    designation varchar(255),
    password varchar(255) not null,
    salary varchar(255) not null,
    address varchar(255)
)`

let bill = `CREATE TABLE IF NOT EXISTS bill(
    bill_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_email VARCHAR(255) NOT NULL,
    medicine_cost DECIMAL(10, 2) NOT NULL,
    room_charge DECIMAL(10, 2) NOT NULL,
    misc_charge DECIMAL(10, 2) NOT NULL,
    operation_charge DECIMAL(10, 2) NOT NULL,
    total_cost DECIMAL(10, 2) GENERATED ALWAYS AS 
      (medicine_cost + room_charge + misc_charge + operation_charge) STORED
)`

let assignDoctor = `CREATE TABLE IF NOT EXISTS assign_doctor(
    assign_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)
);`

let users = `CREATE TABLE IF NOT EXISTS users(
    user_id INT AUTO_INCREMENT PRIMARY KEY,      
    firstname VARCHAR(50) NOT NULL,       
    lastname VARCHAR(50) NOT NULL,         
    email VARCHAR(100) NOT NULL UNIQUE,    
    password VARCHAR(255) NOT NULL          
)`;

let patient = `CREATE TABLE IF NOT EXISTS patient(
    patient_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100) UNIQUE,
    phone_no VARCHAR(20),
    password VARCHAR(255),
    disease VARCHAR(100)
)`;

let doctors = `CREATE TABLE IF NOT EXISTS doctors(
    doctors_id INT AUTO_INCREMENT PRIMARY KEY,    
    first_name VARCHAR(50) NOT NULL,      
    last_name VARCHAR(50) NOT NULL,       
    address VARCHAR(255) NOT NULL,        
    email VARCHAR(100) NOT NULL UNIQUE,    
    salary DECIMAL(10, 2) NOT NULL,       
    specialisation VARCHAR(100) NOT NULL,  
    shift_time VARCHAR(50) NOT NULL,     
    password VARCHAR(255) NOT NULL         
)`;

db.query(admin, (err, result) => {
    if (err) throw err
    console.log("Admin table created")
})

db.query(bill, (err, result) => {
    if (err) throw err
    console.log("Bill table created")
})

db.query(patient, (err, result) => {
    if (err) throw err
    console.log("Patient table created")
})

db.query(users, (err, result) => {
    if (err) throw err
    console.log("Users table created")
})

db.query(doctors, (err, result) => {
    if (err) throw err
    console.log("Doctors table created")
})

db.query(assignDoctor, (err, result) => {
    if (err) throw err
    console.log("Assing-Doctor table created")
})


module.exports = db;