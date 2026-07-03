import ImageData from "../json/images.json";
function home() {
  return (
    <div className="Homeclass">
   <div className="cardh1">
    <h1 >Recent Wallpapers</h1>
    </div>   
      <div className="cardrow">
        {
            ImageData.map((i)=>{
                return(
                <div className="cardcol">
                    <img src={i.src} alt={i.alt} className="ImageCard" />
                    
                    <p className="cardp">{i.alt}</p>
                </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default home;
