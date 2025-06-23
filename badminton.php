<?php
echo "<body bgcolor='lavender'>";

define('DB_HOST', 'localhost'); 
define('DB_NAME', 'badminton');  
define('DB_USER', 'root'); 
define('DB_PASSWORD', ''); 

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
if (!$con) {
    die("MySQL not connected: " . mysqli_connect_error());
}

$db = mysqli_select_db($con, DB_NAME); 
if (!$db) {
    die("MySQL DB not selected: " . mysqli_error($con));
}

$fname  = $_POST['fname'] ?? '';
$lname  = $_POST['lname'] ?? '';
$mobnum = $_POST['mnum'] ?? '';
$city   = $_POST['City'] ?? '';

echo "<h3>ENTERED VALUES ARE:</h3><br/>";
echo "First Name = $fname<br/>";
echo "Last Name = $lname<br/>";
echo "Mobile Number = $mobnum<br/>";
echo "City = $city<br/>";

// Prepare query with parameter binding (safer)
$stmt = $con->prepare("INSERT INTO badminton (F_NAME, L_NAME, Mobile, City) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fname, $lname, $mobnum, $city);

if ($stmt->execute()) {
    echo "<h3><mark>INSERTED ONE ROW SUCCESSFULLY</mark></h3>";
    
    echo "<table align='center' border='2'>";
    echo "<tr><td>First Name</td><td>Last Name</td><td>Mobile Number</td><td>City</td><td>id</td></tr>";
    
    $f = mysqli_query($con, "SELECT * FROM badminton");
    while ($row = mysqli_fetch_assoc($f)) {
        echo "<tr>";
        echo "<td><h1>{$row['F_NAME']}</h1></td>";
        echo "<td><h1>{$row['L_NAME']}</h1></td>";
        echo "<td><h1>{$row['Mobile']}</h1></td>";
        echo "<td><h1>{$row['City']}</h1></td>";
        echo "<td><h1>{$row['id']}</h1></td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "Unable to insert the record: " . $stmt->error;
}

echo "</body>";
$con->close();
?>
