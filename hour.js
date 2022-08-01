function date_heure(id)
{
        date = new Date;
        
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        
        resultat = h+':'+m;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure("'+id+'");','1000');
        return true;
}
function date_heure2(id)
{
        date2 = new Date;
        
        h = date2.getHours();
        h=h+4;
        if(h==24){
                h=0;
        }
        if(h==25){
                h=1;
        }
        else if(h==26){
                h=2;
        }
        else if(h==27){
                h=3;
        }
        else if(h==28){
                h=4;
        }
        if(h<10)
        {
                h = "0"+h;
        }
        m = date2.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        

        resultat = h+':'+m;
        document.getElementById(id).innerHTML = resultat;
        setTimeout('date_heure2("'+id+'");','1000');
        return true;
}
