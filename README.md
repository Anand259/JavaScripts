# Custom AJAX Handler
#### Developer : Anand Pandey
- Made with love in Vanilla JavaScript
- Feel free to use, if don't want to use depandencies like JQuery 

#### How to use 
> Import using CDN
```sh
  <script src='https://cdn.jsdelivr.net/gh/Anand259/Javascripts/Ajax.js'><script>
```

> Import using locally (hosted on your server)
```sh
  <script src='path/to/your/script/file'></script>
```

> To inject GET request simply call
```sh
  let param = "param";
  ajax('GET','path/to/your/server/script'+param,function(data){
    //your code e.g. console.log(data);
  })
  ```

> To inject POST request simply call
```sh
  let param1 = document.querySelector('#param1').value;
  let param2 = document.querySelector('#param2').value;
  ajax('POST','path/to/your/server/script',{param1:param1,param2:param2},function(data){
    //your code e.g. console.log(data);
  })
```
