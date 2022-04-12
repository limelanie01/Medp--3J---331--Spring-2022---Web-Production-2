<?php
    //server info and log-in details
    //keep servername the same and change to your username, password, and database name

    /* $servername = "localhost:3308";
    $username = "webp2";
    $password = "Web22web331";
    $dbname = "webp2"; */
    $servername = "localhost:3308";
    $username = "web07";
    $password = "SP2022web07";
    $dbname = "web07db";
    
    //create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    //check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "connected successfully<br>";

    //pull form data and store in variables
    if (isset($_POST['name'], $_POST['title'], $_POST['season'], $_POST['genre'])) {
        $name = $_POST['name'];
        $title = $_POST['title'];
        $season = $_POST['season'];
        $genre = $_POST['genre'];

    } else {
        echo 'You need to input all the details.';
    }

    //inserting form data into a table in your database
    //student is the name of the table i created and name, title, season, genre are the names of my columns
    $sql = "INSERT INTO students (name, title, season, genre)
    VALUES ('$name', '$title', '$season', '$genre')";
    
    //return status to user
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

    //close connection
    mysqli_close($conn);
?>