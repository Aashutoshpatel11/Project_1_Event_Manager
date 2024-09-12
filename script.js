document.addEventListener('DOMContentLoaded', function(e){
    // localStorage.setItem( 'count' , '0' );
    let event_adding_1time = function(i){ 

            const event = document.createElement('div');
            event.className='event';
            
            const eventcoverpic = document.createElement('div');
            eventcoverpic.className='eventcoverpic';
            
            const expandbutton = document.createElement('div');
            expandbutton.className='coverbutton';
            expandbutton.id='expand';
            expandbutton.innerHTML='<i class="fa-solid fa-expand"></i>'

            const deletebutton = document.createElement('div');
            deletebutton.className='coverbutton';
            deletebutton.id='delete';
            deletebutton.innerHTML='<i class="fa-solid fa-trash"></i>';


            const eventcontent = document.createElement('div');
            eventcontent.className='eventcontent';
            
            const eventheading = document.createElement('div');
            eventheading.className='eventheading';
            
            const eventdescription = document.createElement('div');
            eventdescription.className='eventdescription';
            

            const eventhostprofile = document.createElement('div');
            eventhostprofile.className='eventhostprofile';

            const eventhostprofilepic = document.createElement('div');
            eventhostprofilepic.className='eventhostprofilepic';

            const eventhostname_time = document.createElement('div');
            eventhostname_time.className='eventhostname_time';

            const eventhostname = document.createElement('div');
            eventhostname.className='eventhostname';

            const eventposttime = document.createElement('div');
            eventposttime.className='eventposttime';

            event.appendChild(eventcoverpic);
                eventcoverpic.appendChild(expandbutton);
                eventcoverpic.appendChild(deletebutton);
                console.log(eventcoverpic);
            event.appendChild(eventcontent);
                eventcontent.appendChild(eventheading);
                eventcontent.appendChild(eventdescription);
                eventcontent.appendChild(eventhostprofile);
                    eventhostprofile.appendChild(eventhostprofilepic);
                    eventhostprofile.appendChild(eventhostname_time);
                        eventhostname_time.appendChild(eventhostname);
                        eventhostname_time.appendChild(eventposttime);

            document.querySelector('.eventsection').appendChild(event);

                eventheading.innerHTML = localStorage.getItem(`heading${i}`);
                eventdescription.innerHTML = ` <p> ${localStorage.getItem(`description${i}`)} </p> `;
                eventhostname.innerHTML = ` <h3> ${localStorage.getItem(`name${i}`)} </h3> `;
                eventcoverpic.style.backgroundImage= `url(${ localStorage.getItem(`cover${i}`) })`;
                eventhostprofilepic.style.backgroundImage= `url(${localStorage.getItem(`profile${i}`)})`;

    }
    let event_adding = function(){
        let count = parseInt(localStorage.getItem( 'count' ));
        for( let i=1 ; i<=count ; i++ ){
            event_adding_1time(i);
        }
    }
    event_adding();

    // *************************

    const slider = document.querySelector('.slider');
    const leftnavbar = document.querySelector('.leftnavbar');
    const sociallinkbuttons = document.querySelector('.sociallinkbuttons');
    const sociallinks = this.querySelector('.sociallinks');

    slider.addEventListener('click', function(e){
        if( leftnavbar.style.width==='270px' ){
            leftnavbar.style.width='75px';
            sociallinks.style.display='block';
            sociallinkbuttons.style.marginbottom='30px';
        }else{
            leftnavbar.style.width='270px';
            sociallinks.style.display='flex';
            sociallinkbuttons.style.marginbottom='0px';
        }
    } )

    // ***** left Nav Bar Navigation *****

    const eventsection = document.querySelector('.eventsection');
    const addeventsection = document.querySelector('.addeventsection');
    const editeventsection = document.querySelector('.editeventsection');
    const aboutsection = document.querySelector('.aboutsection');

    const homebutton = document.querySelector('#homebutton');
    const addbutton = document.querySelector('#addbutton');
    const editbutton = document.querySelector('#editbutton');
    const aboutbutton = document.querySelector('#aboutbutton');
    const quickbuttons = document.querySelector('.quickbuttons');


    homebutton.addEventListener('click' , function(){
        setDisplayProperty(eventsection);
        setBoxShadow(homebutton);
    })
    addbutton.addEventListener('click' , function(){
        setDisplayProperty(addeventsection);
        setBoxShadow(addbutton);
    })
    editbutton.addEventListener('click' , function(){
        setDisplayProperty(editeventsection);
        setBoxShadow(editbutton);
    })
    aboutbutton.addEventListener('click' , function(){
        setDisplayProperty(aboutsection);
        setBoxShadow(aboutbutton);
    })
    const setBoxShadow = function( buttonName ){
        homebutton.style.boxShadow='inset 0px 0px 0px #7069B6';
        addbutton.style.boxShadow='inset 0px 0px 0px #7069B6';
        editbutton.style.boxShadow='inset 0px 0px 0px #7069B6';
        aboutbutton.style.boxShadow='inset 0px 0px 0px #7069B6';
        buttonName.style.boxShadow='inset 0px 0px 4px #7469B6';
    }
    const setDisplayProperty = function (sectionName){
        eventsection.style.display='none';
        addeventsection.style.display='none';
        editeventsection.style.display='none';
        aboutsection.style.display='none';

        if(sectionName.className=='eventsection'){
            sectionName.style.display='flex';
        }else{
            sectionName.style.display='block';
        }
    }

    
    // ***** Event Addition *****
        
    const form = document.querySelector('form');
    console.log(form);
    
    
    form.addEventListener( 'submit' , function(e) {
        e.preventDefault();

        let count = parseInt(localStorage.getItem('count'));
        if( isNaN(count)){
            count=0;
        }
        count = count+1;

        const heading = document.querySelector('#heading').value;
        const description = document.querySelector('#description').value;
        const name = document.querySelector('#name').value;
        localStorage.setItem( `heading${count}` , heading );
        localStorage.setItem( `description${count}` , description );
        localStorage.setItem( `name${count}` , name );

        const coverimg = document.querySelector('#coverimg');
        const profileimg = document.querySelector('#profileimg');
        
        const coverFileReader = new FileReader();
        const profileFileReader = new FileReader();

        coverFileReader.readAsDataURL(coverimg.files[0]);
        profileFileReader.readAsDataURL(profileimg.files[0]);

        coverFileReader.addEventListener( 'load' , function () {
            const coverimgurl = coverFileReader.result;
            localStorage.setItem( `cover${count}` , coverimgurl );
        } )
        profileFileReader.addEventListener( 'load' , function () {
            const profileimgurl = profileFileReader.result;
            localStorage.setItem( `profile${count}` , profileimgurl );
        } )
        alert('Details Submitted Successfully!!');
        // eventheading.innerHTML = localStorage.getItem('heading');
        // eventdescription.innerHTML = `<p>${localStorage.getItem('description')}</p>`;
        // eventhostname.innerHTML = `<h3>${localStorage.getItem('name')}</h3>`;
        // eventcoverpic.style.backgroundImage=`url(${localStorage.getItem('cover')})`;
        // eventhostprofilepic.style.backgroundImage=`url(${localStorage.getItem('profile')})`;
        localStorage.setItem( 'count' , count );
        event_adding_1time(count);
    } )
    
    

    // ***** expand and delete *****
    const expand = document.querySelectorAll('#expand');
    const eventdeletebutton = document.querySelectorAll('#delete');

    Array.from(eventdeletebutton).forEach( (target) => {
        target.addEventListener( 'click' , function(e){
            target.parentElement.parentElement.remove();
            
        } )
    } )

    Array.from(expand).forEach( (target) => {
        target.addEventListener('click' , function(e){
            if( target.parentElement.parentElement.style.width != '250px' || target.parentElement.parentElement.style.height != '350px' ){
                target.parentElement.parentElement.style.width='250px';
                target.parentElement.parentElement.style.height='350px';
                target.parentElement.parentElement.style.backgroundSize='cover';
            }else{
                target.parentElement.parentElement.style.width='600px';
                target.parentElement.parentElement.style.height='350px';
                target.parentElement.parentElement.style.backgroundSize='contain';
            }
        } )
    } )


} )