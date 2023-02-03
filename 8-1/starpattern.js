<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>

<style>

span {
    border: 2px solid black;
    background-color: white;
    padding: 5px;
    display: inline-block;
    margin:5px;

}
</style>

</head>
<body>

    <div id = "demo">My name is akash </div>
<script>


let display = "";
for(let i = 9; i > 0; i--){

    display = display + "<div>";

    for(let j = i; j < 10; j++){
             display += "<span>" + j  + "</span>"
    }
    display += "</div>" ;
}
document.getElementById("demo").innerHTML   = display; 


</script>
    
</body>
</html>
