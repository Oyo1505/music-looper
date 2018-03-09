<!DOCTYPE html>
<html lang="fr">
<head>

	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="RIGOULET Henri-Pierre" />
    <meta name="Keywords" content="RIGOULET Henri-Pierre, rigoulet henri-pierre, rigoulet, responsive design, mobile, html, xhtml, css, html5, css3, web, javascript, jquery, laravel, php, sublime text, reseaux, network, bootstrap, sass, compass " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Henri-Pierre RIGOULET Développeur Web</title>

    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">

	<link href="../stylesheets/screen.css" media="screen" rel="stylesheet" type="text/css" />
	<link href="../stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="js/modernizr.js"></script> <!-- Modernizr -->


	

	 <!--[if IE]>
	     <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css"/>
	 <![endif]-->

</head> 

<body>

<header class="header">
		
		<div class="l-container">
		 	<div class="header-content">
			
				<h1 class="title">Lab</h1>	
		
			</div>	
	</div>
	<div class="clear"></div>
</header>

<section class="nav-bar">
	
		<div class="l-container">
		
				<nav class="menu">
						
					<a href="../" class="item-menu">Acceuil</a>
					<a href="../blog/lab.php" class="item-menu">Lab</a>
					<a href="../blog/trip.php" class="item-menu">Mes Voyages</a>
					
						
				</nav>
		</div>
		
</section>
	<main class="cd-main-content">
	<nav class="cd-side-nav">
		<ul>
			<li class="cd-label">Instruments</li>
			<li class="has-children">
				<a id="percusions" href="#0">Percussion</a>
			</li>
			<li class="has-children">
				<a id="guitar" href="#0">Vent</a>
			</li>
			<li class="has-children active">
				<a href="#0">Cordes</a>
					
				<ul>
					<li><a href="#0">Guitar</a></li>
					<li><a href="#0">Mandolin</a></li>
					<li><a href="#0">Violon</a></li>
					</ul>
				</li>

			<li id="mandolin" class="has-children overview">
				<a  href="#0">Mandolin</a>
			</li>
			<li id="bass" class="has-children overview">
				<a href="#0">Bass</a>
				<ul>
						<li><a href="#0">Bass</a></li>
						<li><a href="#0"></a></li>
						<li><a href="#0"></a></li>
				</ul>

			</li>	
				<ul>
					<!-- other list items here -->
				</ul>
			</li>
 
			<!-- other list items here -->
			<li class="cd-label">Effects</li>
		</ul>
 
		<!-- other unordered lists here -->
	</nav>

	<div class="content-wrapper">	
		<button class="play">play</button>
		<button class="stop">stop</button>
		<input type="range" class="bpm" min="10" max="230" name="progress" value="60">
		<form>
			


			
			<div class="instruments">

				<label>Tom</label>
				<div class=" instrument" >		
					<input class="tom" type="checkbox" name="tom" value="0" />			
					<input class="tom" type="checkbox" name="tom" value="1" />
					<input class="tom" type="checkbox" name="tom" value="2" />
					<input class="tom" type="checkbox" name="tom" value="3" />
					<input class="tom" type="checkbox" name="tom" value="4" />			
					<input class="tom" type="checkbox" name="tom" value="5" />
					<input class="tom" type="checkbox" name="tom" value="6" />
					<input class="tom" type="checkbox" name="tom" value="7" />
					<input class="tom" type="checkbox" name="tom" value="8" />			
					<input class="tom" type="checkbox" name="tom" value="9" />
			
		
			
				</div>

				<label>Cymbal</label>
				<div class=" instrument "  >
					<input class="cymbal" type="checkbox" name="cymbal" value="0"  />					
					<input class="cymbal" type="checkbox" name="cymbal" value="1"  />
					<input class="cymbal" type="checkbox" name="cymbal" value="2"  />
					<input class="cymbal" type="checkbox" name="cymbal" value="3" />
					<input class="cymbal" type="checkbox" name="cymbal" value="4" />			
					<input class="cymbal" type="checkbox" name="cymbal" value="5" />
					<input class="cymbal" type="checkbox" name="cymbal" value="6" />
					<input class="cymbal" type="checkbox" name="cymbal" value="7" />
					<input class="cymbal" type="checkbox" name="cymbal" value="8" />			
					<input class="cymbal" type="checkbox" name="cymbal" value="9" />

				</div>


				<label>Snare</label>
				<div class=" instrument "  >
					<input class="snare" type="checkbox" name="snare" value="0" />			
					<input class="snare" type="checkbox" name="snare" value="1" />
					<input class="snare" type="checkbox" name="snare" value="2" />
					<input class="snare" type="checkbox" name="snare" value="3" />
					<input class="snare" type="checkbox" name="snare" value="4" />			
					<input class="snare" type="checkbox" name="snare" value="5" />
					<input class="snare" type="checkbox" name="snare" value="6" />
					<input class="snare" type="checkbox" name="snare" value="7" />
					<input class="snare" type="checkbox" name="snare" value="8" />			
					<input class="snare" type="checkbox" name="snare" value="9" />
				</div>
	


				<label>Kick</label>
				<div class=" instrument" >
					
					<input class="kick" type="checkbox" name="kick" value="0" />	
					<input class="kick" type="checkbox" name="kick" value="1" />
					<input class="kick" type="checkbox" name="kick" value="2" />
					<input class="kick" type="checkbox" name="kick" value="3" />
					<input class="kick" type="checkbox" name="kick" value="4" />			
					<input class="kick" type="checkbox" name="kick" value="5" />
					<input class="kick" type="checkbox" name="kick" value="6" />
					<input class="kick" type="checkbox" name="kick" value="7" />
					<input class="kick" type="checkbox" name="kick" value="8" />			
					<input class="kick" type="checkbox" name="kick" value="9" />
				</div>
				<label>Tambourine</label>
				<div class=" instrument" >
					
					<input class="tambourine" type="checkbox" name="tambourine" value="0" />	
					<input class="tambourine" type="checkbox" name="tambourine" value="1" />
					<input class="tambourine" type="checkbox" name="tambourine" value="2" />
					<input class="tambourine" type="checkbox" name="tambourine" value="3" />
					<input class="tambourine" type="checkbox" name="tambourine" value="4" />			
					<input class="tambourine" type="checkbox" name="tambourine" value="5" />
					<input class="tambourine" type="checkbox" name="tambourine" value="6" />
					<input class="tambourine" type="checkbox" name="tambourine" value="7" />
					<input class="tambourine" type="checkbox" name="tambourine" value="8" />			
					<input class="tambourine" type="checkbox" name="tambourine" value="9" />
				</div>

			</div>
		</form>
		
		
		<div class="clear"></div>
	</div>
<div class="clear"> </div>
	</div> <!-- .content-wrapper -->
	</main> <!-- .cd-main-content -->
<div class="clear"> </div>
<audio  class="kick" src="../sounds/1.wav"></audio>
<audio   class="snare" src="../sounds/2.wav"></audio>
<audio   class="tom" src="../sounds/3.wav"></audio>
<audio   class="cymbal" src="../sounds/4.wav"></audio>
<audio   class="tambourine" src="../sounds/tambourine.mp3"></audio>
<footer>
	<div class="links">
		<div class="l-container">
					<p id="copyright">Copyright 2017 RIGOULET Henri-Pierre - Built With Passion</p>
					<div class="social-network">
						<a href="https://www.instagram.com/oyo1505/"><i class="icon icon-instagram"></i></a>
						<a href="https://www.facebook.com/henripierre.rigoulet"><i class="icon icon-facebook"></i></a>
						<a href="https://www.linkedin.com/in/henri-pierre-rigoulet-6501aaba/"><i class="icon icon-linkedin"></i></a>
						<a href="https://www.youtube.com/watch?v=DljStQsY80I"><i class="icon icon-sloth"></i></a>		
					</div>	
		</div>		
	</div>		
</footer>
<script src="../js/jquery.menu-aim.js"></script>
<script src="../js/main.js"></script>
<script src="../js/music_looper.js" type="text/javascript"></script>
</body>

</html>