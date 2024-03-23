const home_section = document.querySelector('.home_section');
const search_section = document.querySelector('.search_section');
const reels_section = document.querySelector('.reels_section');
const notifications_section = document.querySelector('.notifications_section');
const account_section = document.querySelector('.account_section');

home_btn.onclick = () => { setValue("home_section"); }
search_btn.onclick = () => { setValue("search_section"); }
reels_btn.onclick = () => { setValue("reels_section"); }
notify_btn.onclick = () => { setValue("notifications_section"); }
account_btn.onclick = () => { setValue("account_section"); }


function setValue(value1){
    let val1 = value1;
    home_section.classList.remove("active");
    search_section.classList.remove("active");
    reels_section.classList.remove("active");
    notifications_section.classList.remove("active");
    account_section.classList.remove("active");
    home_btn.className = "bi bi-house-door";
    reels_btn.className = "bi bi-camera-video";
    notify_btn.className = "bi bi-heart";
    account_btn.className = "bi bi-person";

    if(val1 == "home_section"){
        home_section.classList.add("active");
        home_btn.className = "bi bi-house-door-fill";
    } else if(val1 == "search_section"){
        search_section.classList.add("active");
    } else if(val1 == "reels_section"){
        reels_section.classList.add("active");
        reels_btn.className = "bi bi-camera-video-fill";
    } else if(val1 == "notifications_section"){
        notifications_section.classList.add("active");
        notify_btn.className = "bi bi-heart-fill";
    } else if(val1 == "account_section"){
        account_section.classList.add("active");
        account_btn.className = "bi bi-person-circle";
    }
}

// Home section - like btn
const post_likes = document.querySelectorAll('.container .home_section .bi-heart');
for(let i = 0; i < post_likes.length; i++){
    post_likes[i].onclick = () => {
        if((post_likes[i].classList.contains("bi-heart"))){
            post_likes[i].className = "bi bi-heart-fill";
        } else{
            post_likes[i].className = "bi bi-heart";
        }
    }
}



// reels video section
const video = document.querySelectorAll('.container video');

for(let i = 0; i < video.length; i++){
    video[i].addEventListener("mouseenter", () => {
        video[i].currentTime = 0;   
        video[i].play();
        video[i].loop = true;

        video[i].onclick = () => {
            if(video[i].paused){
                video[i].play();
            }else{
                video[i].pause();
            }
            like_counter.classList.remove("active");
            comment_counter.classList.remove("active");
            send_video.classList.remove("active");
            share_video.classList.remove("active");
        }

        // reels video like button setting 
        const parentDiv = video[i].parentElement;
        const like_btn = parentDiv.querySelector('.options .bi-heart');
        const comment_btn = parentDiv.querySelector('.options .bi-chat');
        const send_btn = parentDiv.querySelector('.options .bi-send');
        const share_video_btn = parentDiv.querySelector('.options .bi-three-dots-vertical');
        const like_btn_span = parentDiv.querySelectorAll('.options span');
        const setting_tools_btn = document.querySelector('.acc_top_part .right_part .bi-list');

        video[i].ondblclick = () => {
            if(!(like_btn.classList.contains("bi-heart-fill"))){
                setColor();
            }
        }

        const like_counter = parentDiv.querySelector('.like_counter');
        const comment_counter = parentDiv.querySelector('.comment_counter');
        // const send_video = parentDiv.querySelector('.send_video');
        const send_video = document.querySelector('.send_video');
        const share_video = parentDiv.querySelector('.share_video');
        const setting_tools = document.querySelector('.setting_tools');
        like_btn.onclick = () => {
            if(like_btn.classList.contains("bi-heart-fill")){
                removeColor();
            } else{
                setColor();
            }
        }

        for(let i = 0; i < like_btn_span.length; i++){
            if(i == 0){
                like_btn_span[0].onclick = () => {
                    like_counter.classList.toggle("active");
                }
            } else {
                like_btn_span[1].onclick = () => {
                    comment_counter.classList.toggle("active");
                }
            }
        }
        comment_btn.onclick = () => {
            comment_counter.classList.toggle("active");
        }
        send_btn.onclick = () => {
            send_video.classList.toggle("active");
        }
        share_video_btn.onclick = () => {
            share_video.classList.toggle("active");
        }
        setting_tools_btn.onclick = () => {
            setting_tools.classList.toggle("active");
        }

        const like_close_btn = document.querySelectorAll('.bi-x-lg');
        for(let counter_close of like_close_btn){
            counter_close.onclick = close_counter;
        }
        function close_counter(){
            like_counter.classList.remove('active');
            comment_counter.classList.remove('active');
            send_video.classList.remove('active');
            share_video.classList.remove('active');
            setting_tools.classList.remove('active');
        }

        // like reels video
        function setColor(){
            like_btn.className = "bi bi-heart-fill";
            like_btn.style.color = "red";
        }

        // unlike reels video
        function removeColor(){
            like_btn.style.color = "#fff";
                like_btn.classList.remove("bi-heart-fill");
                like_btn.classList.add("bi-heart");
        }
    });
    video[i].addEventListener("mouseleave", () => {
        video[i].pause();
    });
}



// Switch tabs in Account section
const switch_tabs = document.querySelectorAll('.switch-tab');
const line_lg = document.querySelector('.data_collection .line div');
for(let i = 0; i < switch_tabs.length; i++){
    switch_tabs[i].addEventListener("click", () => {
        line_lg.classList.toggle('l-50');
    })
}


// Open chat section
const user_chat = document.querySelector('.container .home_section .bi-messenger');
const user_chat_box = document.querySelector('.container .home_section .user_chat');
const back_home_section = document.querySelector('.container .home_section .user_chat .top-div .bi-arrow-left');


user_chat.onclick = () => {
    user_chat_box.classList.toggle("active");
    primary_chat.classList.add("active");
}
back_home_section.onclick = () => {
    remUnderClass();
    user_chat_box.classList.toggle("active");
    remChatClass();
}

// Chat tabs switch - primary, general and request
const chat_navigation = document.querySelectorAll('.container .home_section .user_chat .chat_navigation a');
const underline = document.querySelector('.container .home_section .user_chat .line .underline');
for(let i = 0; i < chat_navigation.length; i++){
    chat_navigation[i].addEventListener("click", () => {
        remUnderClass();
        underline.classList.add('l-'+i);
        openChatSection(i);
    });
}

// Remove user chat box underline classes
function remUnderClass(){
    underline.classList.remove('l-0');
    underline.classList.remove('l-1');
    underline.classList.remove('l-2');
}


const primary_chat = document.querySelector('.container .home_section .primary_chat');
const general_chat = document.querySelector('.container .home_section .general_chat');
const chat_request = document.querySelector('.container .home_section .chat_request');
function openChatSection(i){
    let val = i;
    remChatClass();
    if(i == 0){
        primary_chat.classList.add("active");
    } else if(i == 1){
        general_chat.classList.add("active");
    } else{
        chat_request.classList.add("active");
    }
}

// Return from chat_request to general chat section
const back_chat_request = document.querySelector('.container .home_section .user_chat .chat_request .bi-arrow-left');
back_chat_request.onclick = () => {
    underline.classList.remove('l-2');
    underline.classList.add('l-1');
    chat_request.classList.remove("active");
    general_chat.classList.add("active");
}

// Remove user chat box classes
function remChatClass(){
    primary_chat.classList.remove("active");
    general_chat.classList.remove("active");
    chat_request.classList.remove("active");
}

// Hide all highlights card box
const discover_people = document.querySelector('.discover_people');
frnd_sugg.addEventListener("click", () => {
    discover_people.classList.toggle("hide");
});


// Hide highlights card one by one
const cardBx = document.querySelectorAll('.cardBox .cardBx');
const card = document.querySelectorAll('.bi-x');
for(let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
        cardBx[i].classList.toggle("hide");
    });
}
for(let i = 0; i < card.length; i++) {
    see_all.addEventListener("click", () => {
        cardBx[i].classList.remove("hide");
    });
}
