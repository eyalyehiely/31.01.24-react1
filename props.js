



function Image(props){
    return(

        <img src = {props.filename}/>
        
    )
}



function ImageStory(props){
    return(
        <div>
        <img src = {props.filename}/>
        <p>{props.story}</p>
        </div>
    )
}

function ImageStories(){
    return(
        <div>
       <ImageStory filename = 'dog.jpg'/>
       <ImageStory filename = 'cat1.jpg'/>
        </div>
    )
}


function DogStory(props){
    return(
        <div>
        <img src = {props.filename}/>
        <p>{props.story}</p>
        <p>{props.name}</p>
        <a href = {props.link}>link</a> 
        </div>
    )
}


function DogStories(){
    return(
        <div>
            <DogStory filename='dog.jpg' story='a doggy' name='rocky' link = 'link1'/>
            <DogStory filename='dog.jpg' story='a big dog' name='moish' link = 'link2'/>
        </div>
    )
}


// const main = ReactDOM.createRoot(document.getElementById('main'));
// main.render(<ImageStories/>)




// const dog = ReactDOM.createRoot(document.getElementById('dog'));
// main.render(<DogStory name='rocky'/>)



const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(<DogStories/>)