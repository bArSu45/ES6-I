
const api_key = "AIzaSyA-MFwoBzwh668zwzHL06HujHB0oyBWMM4";


//  youtube 
// url
//  fetch() --> it return the data


// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Bhool%20bhulaiya%202&key=[YOUR_API_KEY]'


let search = async () => {
    try{
        let query = document.getElementById("query").value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
    
        let res = await fetch(url)
    
        let data = await res.json();
    
        append(data.items)

        console.log(data);
    }
   catch(err){
       console.log(err);
   }

    
};

let append = (data) => {
  
    let container = document.getElementById("results");

    data.forEach(({id: {videoId}, snippet:{title}}) => {
        let div = document.createElement("div");
       
        let iframe = document.createElement("iframe");
        iframe.src =`https://www.youtube.com/embed/${videoId}`;
        let h3 = document.createElement("h3");
        h3.innerText = title;


        div.append(iframe,h3);

        let video = {
            title,
            videoId,
        };
        div.onclick = () => {
            playvideo();
        }

        container.append(div)
    });

    };
    
    let playvideo = (video) => {
       

        localStorage.setItem("video", JSON.stringify(video));

        //window.location.href = "";
    }
    


/*
 <iframe width="560" height="315" 
 src="https://www.youtube.com/embed/q3nIItk0-wU"
  title="YouTube video player" 
  frameborder="0" allow="accelerometer;
   autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture" allowfullscreen></iframe>

 */