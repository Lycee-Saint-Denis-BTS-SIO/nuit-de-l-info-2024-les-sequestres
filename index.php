<?php
    function randomSize(){
        $size[] = null;
        $size[0] = rand(20,70);
        $size[1] = rand(20,70);
 
        return $size;
    }
 
    function randomPos(){
        $position[] = null;
        $position[0] = rand(0,800);
        $position[1] = rand(-700,300);
 
        return $position;
    }
 
    function addLogo($position, $size, $logoId){
        echo '<img src="images/LyrecoNegatif2.png" alt="" id="'.$logoId.'" style="right:'.$position[0].'px; bottom:'.$position[1].'px; width:'.$size[0].'px; height:'.$size[1].'px; position: absolute; opacity: 50%;" onclick=animation('.$logoId.')>';
    }
 
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protection des Océans</title>
    <link rel="stylesheet" href="./styles/styles.css">


    <link rel="stylesheet" href="styles/styles.css">


</head>
<body>
    <header>
        <div class="container">
            <h1 class="site-title">Protection des Océans</h1>
            <nav>
                <ul class="menu">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="./vues/credit.html">Credits</a></li>    
                    <li><a href="./vues/index_retro.html">Retro</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        
        <div class="container">
            <section class="section" id="home">
                <div class="video-wrapper">
                    <iframe 
                        src="https://www.youtube.com/embed/lD_79Ic4yhw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <h2>Bienvenue</h2>
                <p>Projet nuit de l'info de l'équipe les séquestrés pour Race for Water, en cliquant sur le bouton "Jouer" vous accédez à plein de mini-jeux sur le thème du corps et de l'océan </p>
                <div class="button-container">
                    <a href="./vues/app.html" target="_blank">
                        <button class="cta-button">Jouer</button>
                    </a>
                    <?php
                        $position = randomPos();
                        $size = randomSize();
                        $logoId = 1;
                        addLogo($position, $size, $logoId);
                    ?>
                <h2>Qu'est-ce que Race For Water ?</h2>
                <p>Race for Water est une fondation suisse dédiée à la protection des océans contre la pollution plastique.
                 Elle utilise un bateau innovant alimenté par des énergies renouvelables (solaire, éolienne et hydrogène) pour sensibiliser le public et promouvoir des solutions durables. Son objectif est de préserver les ressources en eau et de lutter contre les déchets marins.</p>
                 <img src="images/img1.jpg" class="responsive-image" alt="Description de l'image">
                <h2>Plus de détails</h2>
                <p>Race for Water lutte pour préserver les océans grâce à des expéditions innovantes et des actions concrètes. Depuis 2015, ses Odyssées mondiales déploient les programmes LEARN, SHARE, ACT pour étudier, sensibiliser et promouvoir des solutions durables face à la pollution plastique et au changement climatique.

                    En 2025, un nouveau catamaran zéro émission, le MODX 70, marquera une nouvelle étape pour la décarbonation maritime et la protection des écosystèmes marins. Ensemble, protégeons les océans !</p>
            </section>
            </div>
        </div>
    </main>

    <footer>
        <div class="container">
            <p>© 2024 - Protection des Océans</p>
        </div>
    </footer>

</body>
</html>
