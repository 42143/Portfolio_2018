<!DOCTYPE html>
<html lang="br">
	<head>
        <?php require_once "head.php";?>
         <!--Jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="js/componentes/jquery.mousewheel.js"></script>
		<script src="js/common.js"></script>
        <script src="js/cursor.js"></script>
        <script src="js/common_screen_one.js"></script>
        <script src="js/common_screen_two.js"></script>
        <!--ScrollReveal-->
        <script src="js/componentes/scrollreveal/scrollreveal.min.js"></script>
        <script>
            var config = {reset:true};
            window.sr = ScrollReveal(config);
        </script>
        <style>
            .sr .neve{ visibility: hidden;}
            .sr .hero{ visibility: hidden;}
            .sr .intro{ visibility: hidden;}
            .sr .block{ visibility: hidden;}
        </style>
        <!--CSS-->
		<link rel="shortcut icon" href="favicon.png">
		<link rel="stylesheet" href="css/pages/index.css">
        <link rel="stylesheet" href="css/pages/screen_one.css">
        <link rel="stylesheet" href="css/pages/screen_two.css">
        <link rel="stylesheet" href="css/pages/screen_three.css">
        <link rel="stylesheet" href="css/componentes/animate/animate.css">
        <link rel="stylesheet" href="css/componentes/fontawesome-free-5.0.12/web-fonts-with-css/css/fontawesome-all.min.css">
        <title>Aslan kelvin | Webmaster</title>
        
        <script type="text/javascript">
		
	</script>

	</head>
	<body style="height:755px;width:1440px;" onload="start();">
        <div class="layout">
            <div class="main" style="transform: translate3d(0px, 0%, 0px);">
                    <!--1ºscreen -->
                        <?php include"screen_one.php";?>
                    <!--2ºscreen -->
                        <?php include"screen_two.php";?>	
                    <!--3ºscreen -->
                        <?php include"screen_three.php";?>
                    <!--4ºscreen -->
                        <?php //include"screen_four.php";?>
                    <!--5ºscreen -->
                        <?php //include"screen_five.php";?>	
            </div>
        </div>    
        <script>
          var hero = {
            origin   : "top",
            distance : "24px",
            duration : 1500,
            scale    : 1.05,
          }

          var intro = {
            origin   : "bottom",
            distance : "40px",
            duration : 900,
            delay    : 1200,
            scale    : 1,
          }
          var block = {
            origin   : "top",
            distance : "40px",
            duration : 900,
            delay    : 1200,
            scale    : 1.05,
          }
          var neve = {
            origin   : "left",
            distance : "40px",
            duration : 900,
            delay    : 1200,
            scale    : 1.05, 
          }
          sr.reveal(".neve", neve)
          sr.reveal(".hero", hero)
          sr.reveal(".intro", intro)
          sr.reveal(".block",block)    
        </script>
        <?php require_once "header.php"?>
	</body>
</html>	