woronpop();
function woronpop() {
    window.scrollTo(0, 0);
    var maintop = document.getElementById("main-top");

    var xhr = new XMLHttpRequest();
    var url = 'crosentra.html';
    xhr.open('GET', url, true);
    xhr.onload = function() {
    if (xhr.status === 200) {
        maintop.innerHTML = xhr.response;
        combesscri()
    }
    else {
        console.log('Request failed.  Returned status of ' + xhr.status);
    }
    };
    xhr.send();
}
function combesscri(){
    var script = document.createElement('script');
    var surl = 'js/custom.js';
    script.src = surl;
    document.body.appendChild(script);
    var sccript = document.createElement('script');
    var scurl = 'DataTables/DataTables-1.11.3/js/jquery.dataTables.min.js';
    sccript.src = scurl;
    document.body.appendChild(sccript);
    var scccript = document.createElement('script');
    var sccurl = 'js/mdrwapte.js';
    scccript.src = sccurl;
    document.body.appendChild(scccript);
}