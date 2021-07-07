
var footer = `<footer data-portal-language="en" class="portal-footer"><div class="inner row" style="display:flex; align-items:center;"><div class="copyright col-md-1">© 2020 Sertifi </div><div class="col-md-2"><a href="http://www.sertifi.com" target="_new" style="color:#fff; text-decoration:underline">Sertifi Company Site</a></div><div class="col-md-3"><span style="font-size:10px;">222 W Merchandise Mart Plaza Suite 1270, Chicago, IL 60654</span></div><div class="col-md-2"><a href="https://sertifi.secure.force.com/help?portal=Support&portalURL=https://www.sertifi.com&accountNumber=0123456789" style="color:#fff; text-decoration:underline">Submit a Support Ticket</a></div><div class="col-md-4"><span class="q_social_icon_holder"><a href="https://twitter.com/sertifi" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-twitter" style="color:#fff;"></i></span></a></span><span class="q_social_icon_holder"><a href="https://www.linkedin.com/company/sertifi-inc-" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-linkedin" style="color:#fff;"></i></span></a></span><span class="q_social_icon_holder"><a href="https://www.instagram.com/sertifi/" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-instagram" style="color:#fff;"></i></span></a></span><span class="q_social_icon_holder"><a href="https://www.youtube.com/user/SertifiEsignatures" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-youtube" style="color:#fff;"></i></span></a></span><span class="q_social_icon_holder"><a href="https://corp.sertifi.com/blog/" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-wordpress" style="color:#fff;"></i></span></a></span><span class="q_social_icon_holder"><a href="https://www.facebook.com/SertifiInc/" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-2x"><i class="fa fa-facebook" style="color:#fff;"></i></span></a></span></div><div class="dropup languages pull-right col-md-2"><button data-toggle="dropdown" class="dropdown-toggle btn btn-default" aria-expanded="false">English <b class="caret"></b></button><ul class="dropdown-menu"><li><a class="language-item dropdown-item active" lang="en">English</a></li></ul></div></div></footer>`;
// On load, add the footer content to the container

/*$(function() {
    $('footer').replaceWith(footer);
});*/


$(function() {
    if (window.location.href.indexOf("index.html") > 0 || window.location.href.indexOf(".html") === -1) {
        $('footer').replaceWith(footer);
    }
});

$('#search.formcontrol.sear').attr('placeholder','Search Sertifi Support Center');

$(document).ready(function () {
    setWelcomeText();
    $(document).ajaxComplete(function () {
    setWelcomeText();
    });
});

function setWelcomeText(){
    for (var key in welcomeTextDict) {
        var element = $("header.portal-header[data-portal-language=" + key +"] h1");
        element.text(welcomeTextDict[key])
    }
}
var welcomeTextDict = { "en" : "Sertifi Support Center"};

