function setValue()
{
dropdown=document.getElementsByTagName('select');
    for(i=0;i<dropdown.length;++i){
        for(j=0;j<256;j++)
        {
            let option=document.createElement('option');
            option.text=option.value=j;
            dropdown[i].appendChild(option);
        }
   }  
}

function convertRGB()
{
    let red, green,blue,n1,n2,n3,tr;
    let data=[];
    red=document.getElementById('red');
    green=document.getElementById('green');
    blue=document.getElementById('blue');
    n1=Number.parseInt(red.options[red.selectedIndex].value);
    n2=Number.parseInt(green.options[green.selectedIndex].value);
    n3=Number.parseInt(blue.options[blue.selectedIndex].value);
    r=(n1/255).toFixed(2);
    g=(n2/255).toFixed(2);
    b=(n3/255).toFixed(2);
    float="("+r+","+g+","+b+")";
    integer="("+n1+","+n2+","+n3+")";
    color='rgb'+integer;
    str="#"+n1.toString(16).toUpperCase()+n2.toString(16).toUpperCase()+n3.toString(16).toUpperCase();
    clr=["white","white",color];
    data.push(float);
    data.push(str);
    data.push('');
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    tr = document.createElement('tr');
    for (let i=0;i<data.length;++i)
    {
        let td = document.createElement('td');
        td.setAttribute('class','text-center');
        td.style.backgroundColor=clr[i];
        let cell= document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function convertCMY()
{
    let red, green,blue,n1,n2,n3,tr;
    let data=[];
    red=document.getElementById('red');
    green=document.getElementById('green');
    blue=document.getElementById('blue');
    n1=255-Number.parseInt(red.options[red.selectedIndex].value);
    n2=255-Number.parseInt(green.options[green.selectedIndex].value);
    n3=255-Number.parseInt(blue.options[blue.selectedIndex].value);
    r=(n1/255).toFixed(2);
    g=(n2/255).toFixed(2);
    b=(n3/255).toFixed(2);
    float="("+r+","+g+","+b+")";
    integer="("+n1+","+n2+","+n3+")";
    color='rgb'+integer;
    str="#"+n1.toString(16).toUpperCase()+n2.toString(16).toUpperCase()+n3.toString(16).toUpperCase();
    clr=["white","white",color];
    data.push(float);
    data.push(str);
    data.push('');
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    tr = document.createElement('tr');
    for(let i=0;i<data.length;++i)
    {
        let td = document.createElement('td');
        td.setAttribute('class','text-center');
        td.style.backgroundColor=clr[i];
        let cell= document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function generateRandomColors()
{
    let r,g,b;
    data=[];
    random1=Math.round(Math.random()*255);
    random2=Math.round(Math.random()*255);
    random3=Math.round(Math.random()*255);
    r=Number((random1/255).toFixed(2));
    g=Number((random2/255).toFixed(2));
    b=Number((random3/255).toFixed(2));
    float="("+r+","+g+","+b+")";
    integer="("+random1+","+random2+","+random3+")";
    color='rgb'+integer;
    str="#"+random1.toString(16).toUpperCase()+random2.toString(16).toUpperCase()+random3.toString(16).toUpperCase();
    clr=["white","white",color];
    data.push(float);
    data.push(str);
    data.push('');
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    tr = document.createElement('tr');
    for (let i=0;i<data.length;++i)
    {
        let td = document.createElement('td');
        td.setAttribute('class','text-center');
        td.style.backgroundColor=clr[i];
        let cell= document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);
    }
    
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function displaySafeColors()
{
    let r,g,b;
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    hex=["00","33","66","99","CC","FF"];
    for(r=0;r<6;r++){
       for(g=0;g<6;g++){
        row=document.createElement('row');
           for(b=0;b<6;b++){
            clr="#"+hex[r]+hex[g]+hex[b];
            let td = document.createElement('td');
            td.setAttribute('class','text-center');
            td.style.backgroundColor=clr;
            td.style.borderRadius="8px";
            td.style.borderCollapse="separate";
            td.style.borderSpacing="0px";
            let cell= document.createTextNode(clr);
            td.appendChild(cell);
            row.appendChild(td);
           }
           tbody.appendChild(row);
       }
   }   
   table.appendChild(tbody);
}

function rgb(){
    var red=document.getElementsByClassName('red');
    for(var i=0;i<red.length;i++)
    red[i].style.color='red';

    var green=document.getElementsByClassName('green');
    for(var i=0;i<green.length;i++)
    green[i].style.color='green';

    var blue=document.getElementsByClassName('blue');
    for(var i=0;i<blue.length;i++)
    blue[i].style.color='blue';
}

function cmy(){
    var cyan=document.getElementsByClassName('cyan');
    for(var i=0;i<cyan.length;i++)
    cyan[i].style.color='cyan';

    var magenta=document.getElementsByClassName('magenta');
    for(var i=0;i<magenta.length;i++)
    magenta[i].style.color='magenta';

    var yellow=document.getElementsByClassName('yellow');
    for(var i=0;i<yellow.length;i++)
    yellow[i].style.color='yellow';
}