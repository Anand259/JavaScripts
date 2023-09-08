/* 
####### Custom AJAX Handler ####### 
---- Developer : Anand Pandey ----
---- Made with love in Vanilla JavaScript ----
---- Feel free to use, if don't want to use depandencies like JQuery ---
*/
ajax = (req, url, success, data=null) => {
    if(req=="get"){
        ajaxget(url, success);
    }
    else if(req=="post"){
        ajaxpost(url, success, data);
    }
    else{
        console.error("Invalid AJAX Request...");
    }
}

ajaxget = (url, success) => {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

ajaxpost = (url, data, success) => {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));// Comment this line if don't need XSS security
    xhr.send(params);
    return xhr;
}
