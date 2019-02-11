var alarm = [{name:'alarm1',time:(Date.now()+ 2000),sound:'3'},{name:'alarm2',time:(Date.now()+ 6000),sound:'4'}];

Array.prototype.check = function (){
    for(var i = 0; i <this.length; i++)
        if ((this[i].time > Date.now()) && (this[i].time < (Date.now()+800)))
        return (this[i].name);
}

function task(){
    if (alarm.check())
        document.getElementById(alarm.check()).innerHTML = (alarm.check());
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