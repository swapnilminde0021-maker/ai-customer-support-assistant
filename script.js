function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase();

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<div class="user">${input.value}</div>`;

    let response = "Sorry, I didn't understand.";

    if(message.includes("hello")){
        response = "Hello! Welcome to customer support.";
    }
    else if(message.includes("price")){
        response = "Our plans start from ₹499.";
    }
    else if(message.includes("contact")){
        response = "You can contact us at support@email.com";
    }
    else if(message.includes("refund")){
        response = "Refund requests are processed within 5-7 days.";
    }

    chatbox.innerHTML += `<div class="bot">${response}</div>`;

    input.value = "";
}
