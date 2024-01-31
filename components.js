

function Cat(){
    return(
        <img src='cat1.jpg'/>
    )
}

function Dog(){
    return(
        <img src ='dog.jpg'/>
    )

}



function Links(){
    return(
        <div className='links'>
            <a href='#'>link1</a>
            <a href='#'>link2</a>
            <a href='#'>link3</a>
        </div>
    )

}


function Pictures(){
    return(
   <div className='picturs'>
    <Cat/>
    <CatStory/> 
    <Cat/>
    <CatStory/>
    <Dog/>
    <DogStory/>
    <Links/>
    </div>
    )
}


function CatStory(){
    return(
        <div>
            The cat is a nice animal.
        </div>
    )
}


function DogStory(){
    return(
        <p>
            The dog is a nice animal.
        </p>
    )
}

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(<Pictures/>)