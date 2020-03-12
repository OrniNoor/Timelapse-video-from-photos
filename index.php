<?php
$path    = 'images';
$files = array_diff(scandir($path), array('.', '..'));
$files=array_values($files);

if(!empty($files)){
 $json_array = json_encode($files);
 file_put_contents("data/images.json",$json_array);
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Timelapse</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900" rel="stylesheet">
   
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css' integrity='sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ' crossorigin='anonymous'>
   <link rel="stylesheet" href="css/style.css">
 <link rel="stylesheet" href="css/bootstrap.min.css">

 
</head>
<body>
<div class="container-fluid p-0">
<div class="row" id="test-row">
<div class="col-xs-1 col-sm-1 col-md-1 col-ld-1"></div>
<div class="col-xs-10 col-sm-10 col-md-10 col-ld-10">
<div id="bg-container"></div>
<div id="progress-bar">
<div id="progress"></div>
</div>
<div id="controls">
<a href="#" id="play"><i class="fas fa-play"></i></a>

<a href="#" id="previous" ><i class="fas fa-step-backward"></i></a>
<a href="#" id="next" ><i class="fa fa-step-forward"></i></a>
</div>
<input type="text" id="speed" placeholder="milliseconds"/><input type="button" id="getspeed" value="Set Speed"/>
</div>
<div class="col-xs-1 col-sm-1 col-md-1 col-ld-1"></div>
</div>
</div>
	  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
    <script src="js/app-main.js"></script>

</body>
</html>