<!DOCTYPE html>
<html lang="br">
	<head>
        <?php require_once "head.php";?>
        <!--ScrollReveal-->
        <script src="js/componentes/scrollreveal/scrollreveal.min.js"></script>
        <script>
            var config = {reset:true};
            window.sr = ScrollReveal(config);
        </script>
        <style>
            .sr .hero{ visibility: hidden;}
            .sr .intro{ visibility: hidden;}
            .sr .block{ visibility: hidden;}
        </style>
        <!--CSS-->
		<link rel="shortcut icon" href="imagens/favicon.png">
		<link rel="stylesheet" href="css/pages/index.css">
		<link rel="stylesheet" href="css/style_mob_375.css" media="screen and (max-width: 375px)">
        <title>ASLAN KELVIN | WEBMASTER</title>
	</head>
	<body style="height:755px;width:1440px;" onload="start();">
	<!--PC Web -->
		<div id="pc-web" class="layout">
			<div class="main" style="transform: translate3d(0px, 0%, 0px);">
				<!--1ºscreen -->
					<?php //include"screen_one.php";?>
				<!--2ºscreen -->
					<?php //include"screen_two.php";?>	
				<!--3ºscreen -->
					<?php //include"screen_three.php";?>
				<!--4ºscreen -->
					<?php //include"screen_four.php";?>
				<!--5ºscreen -->
					<?php //include"screen_five.php";?>	
			</div>
		</div>
	<!--Fim PC Web-->
	<?php //include"header_footer.php";?>
        <center>
            <strong>Novo Portfolio</strong>
        </center>
	</body>
</html>	