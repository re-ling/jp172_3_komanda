/*
<div class="headermenu">
<ul class="topmenu">
    <!-- Links to be added:-->
    <li id >
        <a href="#">Help Center</a>
    </li>
    <li>
        <a href="#">Our Support</a>
    </li>
    <li id="login" onclick="login()">
        <a href="login.html" id="replace">Login
            <i class="fa fa-check-circle " aria-hidden="true"></i>
        </a>
    </li>
    <li id="logout" style="visibility: hidden" onclick="logout()">
        <a href="#">Logout</a>
    </li>
</ul>
</div>*/

var topMenuList = [
    {
        id      : 0,
        class   : "",
        prompt  : "Help Center",
        onclick : null
    },
    {
        id      : 1,
        class   : "",
        prompt  : "Our Support",
        onclick : null
    },
    {
        id      : 2,
        class   : "",
        prompt  : "Login",
        onclick : null
    },
    {
        id      : 3,
        class   : "hidden",
        prompt  : "Logout",
        onclick : null
    }
];