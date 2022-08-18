function doWelcomePage(alpha){
    colorChange(alpha);
}

function addDot(){
    const selectBar = document.querySelector('.bar');
    const createDotEl = document.createElement('span');
    document.querySelector('.loading h3').append(createDotEl);
    function createDot(){
        createDotEl.innerText += '.';
    }
    function ruleToCreate(){
        if(createDotEl.innerText.length < 5){
            createDot();
//             console.log(createDotEl.innerText.length);
        }
        if(createDotEl.innerText.length == 5){
            createDotEl.innerText = '';
            createDot();
        }
    }
    setInterval(() => {
        if(selectBar.childElementCount == 10){
            clearInterval();
            createDotEl.innerText = ` Complete`;
            createDotEl.classList.add('blink');
            document.querySelector('.loading h3').classList.add('blink');
            return;
        }
        ruleToCreate();
    }, 1000);
}

function newTimeout(time){
    function createBar(){
        const bar = document.createElement('div');
        bar.className = 'add-bar';
        document.querySelector('.bar').append(bar);
    }
    setTimeout(() => {
        createBar();
    }, time);
}

function createElement(){
    function newCreate(text, displayTime){
        const h1 = document.createElement('h1');
        fadeIn(h1);
//         console.log(arguments)
        if(arguments.length == 3){
            h1.classList.add(arguments[2]);
        }
        h1.innerText = text;
        document.querySelector('#welcome-page').append(h1);
        setTimeout(()=>{
            fadeOut(h1);
            setTimeout(()=>{
                h1.remove();
            },1000)
        },displayTime)
    }
    function fadeOut(element){
        element.classList.add('fade-out');
    }
    function fadeIn(element){
        element.classList.add('fade-in');
    }
    function newInput(){
        return document.createElement('input');
    }
    function newIcon(){
        return document.createElement('input');
    }
    function addBeforeLoading(element){
        document.querySelector('.loading').before(element);
    }
    function createLoading(time){
        setTimeout(() => {
            const icon = document.createElement('icon');
            const h2 = document.createElement('h2');
            h2.innerText = 'Redirecting you\nPlease Wait';
            icon.className = 'fa-solid ';
            icon.classList.add('fa-compact-disc');
            addBeforeLoading(icon);
            fadeIn(icon);
            setTimeout(() => {
                setTimeout(() => {
                    document.querySelector('.fa-compact-disc').after(h2);
                    h2.classList.add('up'); fadeIn(h2);
                }, 2000);
                document.querySelector('.fa-compact-disc').classList.remove('fade-in');
            }, 1000);
            setTimeout(() => {
                // fadeOut(document.querySelector('.fa-compact-disc'));
                window.location.replace('main.html');
            }, 8000);      
        }, time);
    }
  
    setTimeout(()=> newCreate('Hi!!!', 2000), 3000);
    newTimeout(3000), newTimeout(6000);
    setTimeout(() => newCreate('Welcome to my Portofolio Website',2000), 6000);
    newTimeout(8000); newTimeout(10000)
    setTimeout(() => newCreate('Can I Ask for Your Name?', 2000), 9000);
    newTimeout(12000);
    setTimeout(() => {
        const createDiv = document.createElement('div');
        const btnYes = newInput(); const btnNo = newInput(); const slash = newIcon();
        createDiv.className = 'btn-choice';
        slash.className = 'gg-format-slash'; btnYes.className = 'btn-yes'; btnNo.className = 'btn-no';
        fadeIn(btnYes); fadeIn(slash); fadeIn(btnNo);
        btnYes.type = 'button'; btnNo.type = 'button';
        btnYes.value = 'Yes'; btnNo.value= 'No';
        addBeforeLoading(createDiv);
        createDiv.append(btnYes); createDiv.append(slash); createDiv.append(btnNo);
        btnNo.addEventListener('click', ()=>{
            newTimeout(1500); newTimeout(2200); newTimeout(3500); newTimeout(4000); newTimeout(5000)
            createDiv.classList.add('fade-out');
            setTimeout(() => {
                createDiv.remove();
                newCreate("Ok, it's fine\nHave a Nice Day", 2000);
            }, 1000);  
            createLoading(7000);
        });
        btnYes.addEventListener('click', ()=>{
            newTimeout(1000); newTimeout(3000);    
            createDiv.classList.add('fade-out');
            setTimeout(() => {
                createDiv.remove();
                const guestName = newInput(); const btnSubmit = newInput();
                fadeIn(guestName); fadeIn(btnSubmit);
                guestName.id = 'guest-name'; btnSubmit.id = 'btn-submit';
                guestName.placeholder = 'Input your name here...';
                guestName.maxLength = '15'
                guestName.type = 'text'; btnSubmit.type = 'submit';
                btnSubmit.name = 'Submit';
                addBeforeLoading(guestName); addBeforeLoading(btnSubmit);
                btnSubmit.addEventListener('click', ()=>{
                    fadeOut(guestName); fadeOut(btnSubmit);
                    newTimeout(2000); newTimeout(3500); newTimeout(7500); 
                    setTimeout(() => {
                        const nameData = guestName.value;
                        guestName.remove(); btnSubmit.remove();
//                         console.log(nameData);
                        newCreate(`Thanks for your visit \n${nameData}`, 2000);
                    }, 1000);   
                    setTimeout(() => {
                        newCreate('Have a Nice Day', 2000, 'up');
                        const emote = document.createElement('i');
                        emote.className = 'fa-regular';
                        emote.classList.add('fa-face-smile-beam');
                        fadeIn(emote);
                        addBeforeLoading(emote);
                        setTimeout(() => {
                            document.querySelector('.fa-face-smile-beam').classList.add('fade-out');
                            setTimeout(() => {
                                document.querySelector('.fa-face-smile-beam').remove()
                            }, 1000);
                            createLoading(3000);
                        }, 2000);
                    }, 4000);
                })                    
            }, 1000);                        
        })
    },12000);
    
}

function colorChange(alpha){
    const getMain = document.querySelector('main');
    let r = 255;
    let g = 0;
    let b = 0;
    setInterval(()=>{
        if(r == 255 && g < 255 && b == 0){
            g++;
        } else if(g==255 && r>0 && b==0){
            r--;
        } else if(r==0 && g ==255 && b < 255){
            b++;
        } else if(r==0 && g>0 && b==255){
            g--;
        } else if(r<255 && g==0 && b==255){
            r++;
        } else if(r==255 && g==0 && b>0){
            b--;
        }
        
        const info = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        getMain.style.backgroundColor = info;
    },30);
    
}

export{doWelcomePage, createElement, addDot};
