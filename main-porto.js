function sideBar(){
    document.querySelector('.nav-side').addEventListener('click', () =>{
        const selectDiv1 = document.querySelector('.nav-container div:nth-child(1)');
        const selectDiv2 = document.querySelector('.nav-container div:nth-child(2)');
        const selectDiv3 = document.querySelector('.nav-container div:nth-child(3)');
        const selectNavContainer = document.querySelector('.nav-container');
        const selectNavSide = document.querySelector('.nav-side');

        selectDiv1.classList.toggle('change-shape1');
        selectDiv2.classList.toggle('change-shape2');
        selectDiv3.classList.toggle('change-shape3');
        selectNavContainer.classList.toggle('position-change');
        selectNavSide.classList.toggle('change-nav-side');
        
        const selectDivSide = document.querySelector('.side-menu');
        const selectList = document.querySelector('.list-menu');
        selectDivSide.classList.toggle('change-side-menu');
        selectList.classList.toggle('change-list-menu');
    }); 
};

function showMore(){
    const selectMoreBtn = document.querySelector('.more div');
    selectMoreBtn.addEventListener('click', ()=>{
        const selectSkills = document.querySelector('#skills .details');
        const selectListDetails = document.querySelectorAll('.details ul li');
        const selectBarControl = document.querySelectorAll('.details ul li span.bar-control');
        const selectBarControlSpan = document.querySelectorAll('.details ul li span.bar-control span');
        const selectIconBtn = document.querySelector('.more div svg');
        const selectSpanBtn = document.querySelector('.more div span');
        
        selectSkills.classList.toggle('show-all');
        selectSpanBtn.classList.toggle('change-text-btn-more');        
        selectListDetails.forEach(val => val.classList.toggle('change-li'));
        selectBarControl.forEach(val => val.classList.toggle('change-bar-control'));
        selectBarControlSpan.forEach(val => val.classList.toggle('change-bar-control-span'));
        if(selectSpanBtn.classList.contains('change-text-btn-more')){
            setTimeout(() => {
                selectSpanBtn.innerHTML = 'Less Details';
                selectIconBtn.classList.remove('fa-angle-down');
                selectIconBtn.classList.add('fa-angle-up');                
            }, 800);
        } else{
            setTimeout(() => {
                selectSpanBtn.innerHTML = 'More Details';
                selectIconBtn.classList.remove('fa-angle-up');
                selectIconBtn.classList.add('fa-angle-down');
            }, 800);
        }
    });
};

function showExDetails(){
    const getMoreBtn = document.querySelectorAll('.list-ex button');
    getMoreBtn.forEach(val => {
        val.addEventListener('click', ()=> {
            const getParent = val.parentElement;
            const getWorkDesc = getParent.querySelector('.list-ex .work-desc');
            const getWorkImg = getParent.querySelector('.list-ex img');
            const getHideMore = getParent.querySelector('.list-ex .work-desc .hide-more');
            val.classList.toggle('change-text-btn-more-ex');
            if(val.classList.contains('change-text-btn-more-ex')){
                setTimeout(() => {
                    val.innerHTML = 'Less Details';
                }, 500);
            } else{
                setTimeout(() => {
                    val.innerHTML = 'More Details';
                }, 500);
            }          
            getWorkImg.classList.toggle('change-height-desc');
            getWorkDesc.classList.toggle('change-more-work-desc');            
            getHideMore.classList.toggle('change-hide');
        });
    });
};

function closeAlert(){
    const selectCloseBtn = document.querySelector('#contact-me .alert-message span');
    selectCloseBtn.addEventListener('click', ()=> {
        const selectAlertMsg = document.querySelector('#contact-me .alert-message');
        selectAlertMsg.classList.toggle('change-alert-msg');
    })
}

function moreMyWork(){
    const selectMoreBtn = document.querySelectorAll('.work-list button');
    const selectCloseBtn = document.querySelectorAll('.msg-in .header-msg span');
    selectMoreBtn.forEach(val => val.addEventListener('click', ()=>{
        const getParent = val.parentElement;
        const selectMessagePop = getParent.querySelector('.msg-in');
        selectMessagePop.classList.toggle('change-msg-in-display');
        setTimeout(() => {
            selectMessagePop.classList.toggle('change-msg-in');
        }, 100);
    }))
    selectCloseBtn.forEach(val => val.addEventListener('click', ()=> {
        const getParent = val.parentElement.parentElement.parentElement.parentElement;
        const selectMessagePop = getParent.querySelector('.msg-in');
        if(selectMessagePop.classList.contains('change-msg-in')){
            selectMessagePop.classList.toggle('change-msg-in');
            setTimeout(() => selectMessagePop.classList.toggle('change-msg-in-display'), 800);
        }        
    }))
}

function sendFormData(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxpD_KtOHUNnxttfIHGW7ilbZRqMGnLi6ao1GD8uh849PvSaWF-Q3SJNVtr2gsvOig/exec';
    const form = document.forms['contact-form-submit'];
    const btnSubmit = document.querySelector('.contact-form button');
    const btnLoading = document.querySelector('.contact-form button.btn-loading');
    const selectAlertMsg = document.querySelector('#contact-me .alert-message');
    form.addEventListener('submit', e => {
        e.preventDefault();
        setTimeout(() => {
            btnSubmit.classList.toggle('display-none');
            btnLoading.classList.toggle('display-none');
        }, 200);
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response);
                btnSubmit.classList.toggle('display-none');
                btnLoading.classList.toggle('display-none');
                selectAlertMsg.classList.toggle('change-alert-msg');
                setTimeout(() => {
                    if(selectAlertMsg.classList.contains('change-alert-msg')){
                        selectAlertMsg.classList.toggle('change-alert-msg')
                    };
                }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
    })
}



sideBar();
showMore();
showExDetails();
closeAlert();
moreMyWork()
sendFormData();
