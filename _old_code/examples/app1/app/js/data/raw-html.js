define(function (require) {
    return `
<!--Top black bar:-->
<header class="top">
    <div class="name">
        <p><i class="fa fa-book menu-icon" aria-hidden="true"></i>Book Store</p>
    </div>
    <div class="headermenu">
        <ul class="topmenu">
            <!-- Links to be added:-->
            <li><a href="#" onClick="document.getElementById('id02').style.display='block'" class="">Help Center</a></li>
            <li><a href="#" onClick="document.getElementById('id03').style.display='block'" class="">Our Support</a></li>
            <li id="replace"><a href="#" onclick="document.getElementById('id01').style.display='block'">Login <i class="fa fa-check-circle" aria-hidden="true"></i></a>
                <div id="id01" class="w3-modal">
                    <div class="w3-modal-content">
                        <div class="w3-container">
                            <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                            <div class="include-login-html">
                                <script>
                                    $(".include-login-html").load("login.html");
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li id="logout" style="visibility: hidden" onclick="logout()"> <a href="#">Logout</a></li>
        </ul>
    </div>
    <script src="js/login.js"></script>

</header>

<!--Left side bar:-->
<nav class="sidenav">
    <div class="navmenu">
        <ul class="mainmenu">
            <!-- Links to be added:-->
            <li>
                <a href="#">
                    <i class="fa fa-globe menu-icon" aria-hidden="true"></i>Browse</a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-shopping-cart menu-icon" aria-hidden="true"></i>Buy Books</a>

            </li>
            <li>
                <a id="favourite" href="#">

                    <i class="fa fa-star menu-icon" aria-hidden="true"></i>Favourite Books</a>
            </li>
            <li>
                <a href="#">
                    <i class="fa fa-th-list menu-icon" aria-hidden="true"></i>Wishlist</a>
            </li>
        </ul>
    </div>
</nav>

<main>

    <!--MODAL MENUS-->

    <div id="id03" class="w3-modal">
        <div class="w3-modal-content">
            <div class="w3-container">
                <span onclick="document.getElementById('id03').style.display='none'" class="w3-button w3-display-topright">&times;</span>

                <!--Modal menu Support-->
                <div class="mainStyleForModals">
                    <p>Please fill in the following information</p>
                    <div>
                        <div class="left" id="accountinfo">
                            <p>YOUR ACCOUNT INFORMATION</p>
                            <p>First name*</p>
                            <form action="firstname">
                                <input type="text" name="First name">
                            </form>
                            <p>Last name*</p>
                            <form action="lastname">
                                <input type="text" name="Last name">
                            </form>
                            <p>Your e-mail address*
                                <p>
                                    <form action="email">
                                        <input type="text" name="Your e-mail adress">
                                    </form>
                        </div>
                        <div class="contacts" id="contacts">
                            <p>CONTACTS</p>
                            <p>Call us: +370 61125644</p>
                            <p>e-mail: bookstore@bookstore.lt</p>
                        </div>
                        <p>TELL US HOW WE CAN HELP</p>
                        <p>Please provide some details about your problem.*</p>
                        <form action="question">
                            <textarea name="question" placeholder="Enter your question" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your question'"></textarea>
                            <input type="submit" value="Send">
                        </form>
                        <form action="upload">
                            <p>Attach a file or screenshot to give us a better idea of the problem (optional)</p>
                            <input type="file" name="Choose file">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Modal menu help:-->
    <div id="id02" class="w3-modal">
        <div class="w3-modal-content">
            <div class="w3-container">
                <span onclick="document.getElementById('id02').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                <div>
                    <div class="mainStyleForModals">

                        <div class="up" id="howtopay">
                            <h4>HOW TO PAY</h4>
                            <h5>How can I pay?</h5>
                            <p>You can pay with Master card, Visa, American Express or via Paypal.</p>
                        </div>
                        <div class="up" id="delivery">
                            <h4>DELIVERY</h4>
                            <h5>How long it takes to receive your order?</h5>
                            <p>We encourage sellers to ship an item as soon as they receive a payment. Most sellers ship within 7 days. (Allow extra time for international shipments.)</p>
                        </div>
                        <div class="down" id="ordering">
                            <h4>ORDERING</h4>
                            <p>How to make an order?</p>
                            <ol>
                                <li>Login using your USD username and password (or shop as a guest).</li>
                                <li>Select the appropriate book and add it to your cart, check out.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Top grey part:-->
    <h2 class="browse">Browse Available Books</h2>
    <div class="toppart">
        <ul class="inlinemenu">
            <li><a href="#" id="allBooks">All Books</a></li>
            <li><a href="#" id="recentBooks">Most Recent</a></li>
            <li><a href="#" id="popularBooks">Most Popular</a></li>
            <li><a href="#" id="freeBooks">Free Books</a></li>
        </ul>

        <!--Search field. (Possible solution to use relative/absolute for magnifying glass):-->
        <div class="search-container">
            <span class="fa fa-search"></span>
            <input placeholder="Enter Keywords">
        </div>
    </div>

    <!--Books part:-->
    <div id="bookList"></div>
</main>

<footer>
    <!--Footer part:-->
    <!--        Bubbles:-->
    <div class="cont" id="container">
        <button class="nav-button" onclick="plusDivs(-1)">&#10094;</button>
        <div class="object1" id="one"></div>
        <div class="object2" id="two"></div>
        <div class="object3" id="three"></div>
        <button class="nav-button" onclick="plusDivs(+1)">&#10095;</button>
    </div>
    <!--       Other:-->

    <ul class="help">
        <li>
            <a href="#">
                <i class="fa fa-question-circle" aria-hidden="true"></i>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-cog" aria-hidden="true"></i>
            </a>
            <!--place for down-top menu of settings
            <ul class="downtop">
                 
            </ul>
-->
        </li>
    </ul>
</footer>
<div id="peri">Hello World</div>
<!-- <script src="js/final.js" type="text/babel"></script> -->
`;
});