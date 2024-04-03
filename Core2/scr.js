document.addEventListener('DOMContentLoaded', function(){
    const like1=documnet.getElementById('like1');
    const like2=documnet.getElementById('like2');
    const like3=documnet.getElementById('like3');

    const cona1=document.querySelector('.co1 h5');
    const cona2=document.querySelector('.co2 h5');
    const cona3=document.querySelector('.co3 h5');

    let lik1=0;
    let lik2=0;
    let lik3=0;

    function sup(boton,cont){
        boton.addEventListener('click', function(){

            if (cont === cona1){
            like1++;
            cona1.textContent = lik1=== 1 ?'1 like(s)': lik1+'like';
            }else if(cont === cona2){
            like2++;
            cona2.textContent=lik2=== 1 ?'1 like(s)': lik2+'like';
            }else if(cont === cona3){
            like3++;
            cona3.textContent=lik3=== 1 ?'1 like(s)': lik3+'like'
            }
        });
    }
    
    sup(like1,cona1);
    sup(like2,cona2);
    sup(like3,cona3);

});