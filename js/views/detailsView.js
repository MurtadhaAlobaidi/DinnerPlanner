function DetailsView(props){
    return (
        <div id= "deatilsMainDiv">
            
            

            <h2 id="dishName">{props.dish.title}</h2>

            <div>
                <button class="navigationButtonAdd" 
                disabled={props.isDishInMenu === true}
                onClick= {() => {props.dishAdded(); window.location.hash="#search";}}><b>Add to menu</b></button>
                <button class="navigationButtonCancel" onClick={() => window.location.hash="#search"}><b>Cancel</b></button>
            </div>
            <div id = "PriceDiv" class= "detailsViewItems"><u>
                Price: {props.dish.pricePerServing}&nbsp;&nbsp;$<br></br><br></br>
                Total For <span>{props.people}</span> guests: {totalPrice(props.dish.pricePerServing, props.people)} &nbsp;&nbsp;$</u></div>
                <br></br>
            <img id = "detailsImage" src={props.dish.image} height="300" />
            
            <div id = "IngredientsDiv">
                <div id="detailsTitle"><u><b>Ingredients</b></u></div>
                <ul  id= "pointDetailsViewItems">{props.dish.extendedIngredients.map(
                x => <li>{x.name}: {x.amount.toFixed(1)} {x.unit}</li>
                )}</ul>
            </div>
            <br></br>

            <div id="instructionsDiv" class= "detailsViewItems">
                <div id="detailsTitle"><u><b>Instructions</b></u></div>
                {props.dish.instructions}
            
            </div>

            <div id="moreInformationLink"><a  href={props.dish.sourceUrl}>More Information</a></div>
        </div>
    );
}

function totalPrice(a, b){
    return (a*b).toFixed(2);
}