document.body.style.display="block"; a='<style>#master { margin: 0 auto;	font-size: 1.1em;	margin-top: 0%;}</style><h1>Iniciar Sessão na <span style="text-transform:uppercase;">UA</span></h1> <form action="http://www.cesam.ua.pt/files/login.php" method="post"> <div id="SPsite"><p>Autenticação solicitada pelo site <strong>elearning.ua.pt</strong></p></div><p><strong>Introduza os seus dados de Utilizador Universal da Universidade de Aveiro</strong></p><fieldset><legend>Iniciar Sessão</legend><div class="emailField"><div class="input"><label for="email">utilizador universal</label><input type="text" style="background-color:rgb(250, 255, 189);font-size: 1em;" value="jmr@ua.pt" name="j_username" size="30" tabindex="2"></div></div><div class="input"><label for="password">palavra-passe</label><input type="password" style="font-size: 1em;" name="j_password" size="30" tabindex="1" autofocus></div><div class="input"><input type="submit" name="Submeter" value="OK" tabindex="3"></div></fieldset></form><p class="disclaimer"><strong>Aviso legal</strong></p><p class="disclaimer">Esta página está alojada nos serviços da Universidade de Aveiro e nela é disponibilizado um mecanismo de autenticação federativa, garantindo que as credenciais nunca são disponibilizadas a entidades externas.Só é autorizado o acesso a este mecanismo de autenticação serviços web identificados e previamente aprovados.</p></div>';
document.getElementsByClassName("loginArea")[0].innerHTML=a;
