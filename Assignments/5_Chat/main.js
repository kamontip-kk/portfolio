var topic;
var c1;
var c2;
var text;

function postFunction()
{
    topic = document.getElementById("topic1")
    c1 = document.getElementById("comment1")
    c2 = document.getElementById("comment2")
    text = document.getElementById("text1") //textarea

    if(topic.value == null && text.value != "" ){
        topic.innerHTML = "Topic: " + text.value
        topic.style.backgroundColor = "rgba(255, 182, 193, 0.801)"
        topic.value = !null
        text.value = null   
    } 
    else if(topic.value != null && c1.value == null && text.value != ""){
        c1.innerHTML = text.value
        c1.style.backgroundColor = "rgba(255, 182, 193, 0.801)"
        c1.value = !null
        text.value = null   
    }
    else if(c1.value != null && c2.value == null && text.value != ""){
        c2.innerHTML = text.value
        c2.style.backgroundColor = "rgba(255, 182, 193, 0.801)"
        c2.value = !null
        text.value = null
        console.log("Full")
    }
    else if(text.value != ""){
        alert("Areas are Full! Please 'Clear'")
    }
}

function clearFunction(){
    text.value = null
    topic.innerHTML = null
    c1.innerHTML = null
    c2.innerHTML = null
    topic.value = null
    c1.value = null
    c2.value = null

    topic.style.backgroundColor = null
    c1.style.backgroundColor = null
    c2.style.backgroundColor = null

    console.log("Clear")
}