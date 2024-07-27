document.addEventListener('DOMContentLoaded', function(e){
    const slider = document.querySelector('.slider');
    const leftnavbar = document.querySelector('.leftnavbar');

    console.log(slider)
    console.log(leftnavbar);

    slider.addEventListener('click', function(e){
        if( leftnavbar.style.width==='270px' ){
            leftnavbar.style.width='75px';
        }else{
            leftnavbar.style.width='270px';
        }
    } )
} )