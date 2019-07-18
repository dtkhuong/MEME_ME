var form = document.getElementById('form');
var linkInput = document.getElementById('linkInput');
var formTopText = document.getElementById('formTopText');
var formBottomText = document.getElementById('formBottomText');
var memeHolder= document.getElementById('memeHolder');

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    // creates a new meme image
    var memeDiv = document.createElement('div');
    memeDiv.className = "memeDiv";
    var newMeme = document.createElement('img');
    newMeme.setAttribute('src', linkInput.value);
    newMeme.className = "newMeme";
    var xImage = document.createElement('img');
    xImage.setAttribute('src', "https://tchol.org/images/white-close-icon-png-16.png");
    xImage.className = "xImage";
    memeHolder.appendChild(memeDiv);
    memeDiv.appendChild(newMeme);
    memeDiv.appendChild(xImage);
    
    //adds top text
    var paraT = document.createElement('P');
    var memeTopText = document.createTextNode(formTopText.value);
    paraT.appendChild(memeTopText);  
    paraT.id = "memeTopText";
    memeDiv.appendChild(paraT);

    //adds bottom text
    var paraB = document.createElement('P');
    var memeBottomText = document.createTextNode(formBottomText.value);
    paraB.appendChild(memeBottomText);  
    paraB.id = "memeBottomText";
    memeDiv.appendChild(paraB);

    //resets the form
    form.reset();

    // delete meme
    xImage.addEventListener('click', function() {
        memeDiv.parentNode.removeChild(memeDiv);
    });
})

