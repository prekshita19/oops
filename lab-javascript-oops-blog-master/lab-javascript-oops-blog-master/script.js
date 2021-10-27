/* Fill your code*/
class blog
{
    constructor(title, detail)
    {
        this.title = title
        this.detail = detail
    }
    
    addTitle()
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        // console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML = this.title;
    }

    addDescription()
    {
        var description = document.createElement('p');
        description.setAttribute("id","blog-description");
        // console.log(description);
        document.getElementById('card-text').appendChild(description);
        description.innerHTML = this.description;
    }
}


document.getElementById("addBlog").addEventListener("click" , function  ()
  {
     document.getElementById("popupContact").style.display="block"
     document.getElementsByClassName(".body-div2").style.display="none"
}
)

document.getElementById("close").addEventListener("click" , function  ()
{
    document.getElementById("popupContact").style.display = "none";
    document.getElementsByClassName("body-div2").style.display = "flex";
})



document.getElementById("post").addEventListener("click" , function  ()

{
    document.getElementById("popupContact").style.display="none"
    document.getElementsByClassName("body-div2").style.display="flex"

    let inputtitle = document.getElementById("title")
    let inputdescription = document.getElementById("detail")

    //object initalization
    let object = new Blog(inputtitle.value , inputdescription.value)
    
    //outer div
    let divisontag = document.createElement("div")
    divisontag.setAttribute("class","article-card")

    //image
    let image = document.createElement("img")
    let path="assets/"+object.title.toLowerCase()+".svg"
    image.setAttribute("src",path)


    //nesteddiv card
    let innerdiv = document.createElement("div")
    innerdiv.setAttribute("class","card-text")
    innerdiv.setAttribute("id","card-text")
    
    //append it 
    divisontag.appendChild(image)
    divisontag.appendChild(innerdiv)
    document.querySelector(".body-div2").appendChild(divisontag)

    console.log(divisontag)
    
    //method initalization
    object.addTitle(innerdiv)
    object.addDescription(innerdiv)
}
)