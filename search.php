<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="format-detection" content="telephone=no"/>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <title>Page Result</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Links -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/search.css" rel="stylesheet">

    <!--JS-->
    <script src="js/jquery.js"></script>
    <script src="js/jquery-migrate-1.2.1.min.js"></script>

    <!--[if lt IE 9]>
    <div style=' clear: both; text-align:center; position: relative;'>
        <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
            <img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                 alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
        </a>
    </div>
    <script src="js/html5shiv.js"></script>
    <![endif]-->
    <script src='js/device.min.js'></script>
</head>
<body>
<div class="page">
   <!--========================================================
                               HEADER
     =========================================================-->
    <header class="clearfix">
        <div id="stuck_container" class="stuck_container clearfix">
            <nav class="navbar navbar-default navbar-static-top clearfix">
                <div class="container">
                    <div class="navbar-header">
                        <h1 class="navbar-brand">
                            <a data-type='rd-navbar-brand' href="./">School District
                            </a>
                        </h1>
                    </div>

                    <ul class="inline-list">
                        <li><a class="fa fa-facebook" href="#"></a></li>
                        <li><a class="fa fa-twitter" href="#"></a></li>
                        <li><a class="fa fa-google-plus" href="#"></a></li>
                    </ul>

                    <ul class="navbar-nav sf-menu" data-type="navbar">
                        <li >
                            <a href="./">Home</a>
                        </li>
                        <li class=" dropdown">
                            <a href="index-1.html">About District </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#"> Who we are</a>
                                </li>
                                <li>
                                    <a href="#">Departments</a>
                                </li>
                                <li>
                                    <a class="act" href="#">Schools</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Business Department</a></li>
                                        <li><a href="#">Community Schools</a></li>
                                        <li><a href="#">Curriculum Office</a></li>
                                        <li><a href="#">Federal Programs</a></li>
                                        <li><a href="#">Food Services</a></li>
                                        <li><a href="#">Maintenance and Operations</a></li>
                                        <li><a href="#">Nursing Services</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Staff</a>
                                </li>
                                <li>
                                    <a href="#">Calendars & news </a>
                                </li>
                                <li>
                                    <a href="#">Useful Links</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="index-2.html">Gallery</a>
                        </li>
                        <li>
                            <a href="index-3.html">News</a>
                        </li>

                        <li>
                            <a href="index-4.html">Contacts</a>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    </header>

  <!--========================================================
                            CONTENT
  =========================================================-->
  <main>
    <section id="content" class="content well">
        <div class="container">
          <div class="search-form">
                  <form class="search-form" action="search.php" method="GET" accept-charset="utf-8">
                                             <label class="search-form_label">
                                                 <input class="search-form_input" type="text" name="s" autocomplete="off"
                                                        placeholder=""/>
                                                 <span class="search-form_liveout"></span>
                                             </label>
                                             <button class="search-form_submit" type="submit"></button>
                                         </form>
            </div>  
            <h3 class="text-primary">Search Results</h3>
            <div id="search-results"></div>
        </div>
    </section>
  </main>  

    <!--========================================================
                            FOOTER
    =========================================================-->
    <footer>

        <section class="clearfix well4">
            <div class="container">
                <div class="contact pull-left">
                    <span class="material-icons-location_on"></span>
                    <address class="h4 text-primary">New York, 4578 Marmora Road, <br/>
                        Glasgow D04 89GR
                    </address>
                </div>


                <div class="contact pull-right">
                    <span class="material-icons-local_phone"></span>
                    <a href="callto:#">800-2345-6789; </a>
                    <a href="callto:#"> 800-2345-6790</a>

                    <p class="offs">7 days a week from 8:00 am to 7:00 pm</p>
                </div>
            </div>
        </section>
        <hr/>
        <div class="container">
            <p class="copyright">
                <a href="#">School District </a> &#169; <span id="copyright-year"></span>.
                <a class="text-primary" href="index-5.html">Privacy Policy</a>

            </p>
        </div>
    </footer>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/tm-scripts.js"></script>
<!-- </script> -->

</body>
</html>