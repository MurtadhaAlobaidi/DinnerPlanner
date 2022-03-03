function SearchFormView(props){
    return (
        <div>          
            <input id="searchItem"
                onKeyUp = {e => {(e.keyCode === 13)? window.location.hash = "#search":""}}
                onInput= {e => props.onText(e.target.value)} 
                placeholder="pizza" />
            <select id="searchItem"
            onChange= {evt=>props.onDishType(evt.target.value)}>
            <option>Choose:</option>
            {props.options.map(
               function(opt){return <option key= {opt}>{opt}</option>})}
            </select>
            <button id="searchItem" 
            onClick = {()=>{props.onSearch(); window.location.hash="#search"}}>
                    Search!</button>
            <button id="summaryButton" onClick={() => window.location.hash="#summary"}>Cart</button>

        </div>
    );
}

function SearchResultsView(props){
    return (
        <div>
            {props.searchResults.map(dish =>
                <span id="dishItem" onClick={()=>{props.dishChosen(dish.id); window.location.hash="#details";}}
                key = {dish.id} class = "searchResult">
                    <img src = {"https://spoonacular.com/recipeImages/" + dish.image} height = "100"/>
                    <div>{dish.title}</div>
                </span>
            )
            }
        </div>
    );
}
