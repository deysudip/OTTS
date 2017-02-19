<?php

//get post data. based on input value it will either read the file or write to file
$method ='';
$fileName = '';
$content = '';

if ($_POST["ops"]!= ''){
    $method = $_POST["ops"];
}

if ($_POST["fileName"] != ''){
    $fileName = $_POST["fileName"];
}

if ($_POST["content"] != ''){
    $content = $_POST["content"];
}

if ($method == 'read'){

    $myfile = fopen($_SERVER['DOCUMENT_ROOT'] ."/otts/temp/".$fileName.".json", "r") or die("Unable to open file!");
    echo fread($myfile,filesize($_SERVER['DOCUMENT_ROOT'] ."/otts/temp/".$fileName.".json"));
    fclose($myfile);
}

if ($method == 'write'){

}
?>