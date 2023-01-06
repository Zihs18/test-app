const Cards = () => {
    const items =["Github","Vercel","Firebase","Netlify","AWS","Heroku","Surge","Render","Static server"]
    return ( 
        <div id="cards">
            <h4 className="sub">Developers often search for free ways to deploy a react app</h4>
            <h2 className="title">Here are 9 free ways to do so :</h2>
            <div className="content">
                {
                    items.map(elem=> <h4>{elem}</h4>)
                }
            </div>
        </div>
     );
}
 
export default Cards;