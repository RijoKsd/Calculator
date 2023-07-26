const select = document.querySelector('select');
const body =  document.querySelector('body');
function setTheme(e){
   const theme =  e.target.value;
   if( theme == 'dark'){
    body.style.cssText="background-color:  #131313; color:white;"
   }
   else{
    body.style.cssText="background-color: white; color:black;"
   }
}
select.addEventListener('change',setTheme)