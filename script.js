fetch('https://api.frankfurter.app/currencies').then(res=>res.json()).then(res=>displayCountry(res)
)
let option = document.querySelectorAll('.currency');
let btn=document.getElementById('btn');
let input=document.getElementById('input');
let result=document.getElementById('result');

function displayCountry(res){
  let arr=Object.entries(res);
  let opt='';
  for(let i=0;i<arr.length;i++)
  {
  opt= `<option value="${arr[i][0]}">${arr[i][1]}</option>`;
  option[0].innerHTML+=opt;
  option[1].innerHTML+=opt;
  }
}

btn.addEventListener('click',()=>{
let curr1=option[0].value;
let curr2=option[1].value;
let value1=input.value;
if(curr1===curr2){
  document.querySelector('.warning').innerHTML='Cannot convert to same country';

}
else if(value1===''){
  document.querySelector('.warning').innerHTML='Please enter any value';
}
else{
const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${value1}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    result.value=`${Object.values(data.rates)[0]} ${curr2}`;
    document.querySelector('.warning').innerHTML='';
  });
}})
 