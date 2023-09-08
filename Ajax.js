/* 
####### Custom AJAX Handler ####### 
---- Developer : Anand Pandey ----
---- Made with love in Vanilla JavaScript ----
---- Feel free to use, if don't want to use depandencies like JQuery ---

*** How to use ***
#1 Import this file using <script src='path/to/your/library/file'></script>
#2 To inject GET request simply call ajax('GET','path/to/your/server/script'+param,function(data){ //your code e.g. console.log(data);})
#2 To inject POST request simply call ajax('POST','path/to/your/server/script',{param1:value1,param2:value2,...},function(data){ //your code e.g. console.log(data);})
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
    xhr.setRequestHeader('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
    xhr.send(params);
    return xhr;
}
