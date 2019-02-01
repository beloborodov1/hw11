var alarm = [{name:'alarm1',time:(Date.now()+ 2000),sound:'3'},{name:'alarm2',time:(Date.now()+ 6000),sound:'4'}];

Array.prototype.check = function (arr){
    for(var i = 0; i <arr.length; i++)
    for (key in arr[i])
        if (((arr[i].time > Date.now()) && (arr[i].time < (Date.now()+800))))
        return (arr[i].name);
}

function task(){
    if ((Array.prototype.check(alarm)))
        document.getElementById(Array.prototype.check(alarm)).innerHTML = (Array.prototype.check(alarm));
t = setTimeout('task()',500);
startTime()
}

function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();  
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('time').innerHTML=h+":"+m+":"+s;
}

function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}