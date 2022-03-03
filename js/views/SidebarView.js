function SidebarView(props){
    return(
    <div class="sidebarMainDiv">
        
        <h2 id="websiteName" class ="summaryDivSpan1" ><i>Welcome to Dinner Planner</i></h2>
        <br></br>
        <div class="summaryDivSpan1">Add/delete guests</div>
 
        <div id="sidebarViewheaderDiv">
                <button id="summaryDivButton" 
                    disabled ={props.guests <= 1}
                    onClick = {()=>props.setGuests(props.guests-1)}
                >-</button> 
                <span id="summaryDivSpan2">{props.guests}</span>
                <button id="summaryDivButton"
                onClick = {()=>props.setGuests(props.guests+1)}>+</button>
        </div>
        <table id="sidebarTable">
                    <tr>
                            <th></th>
                            <th>Dish</th>
                            <th>Type</th>
                            <th>Price</th>
                    </tr>
                    
            <tbody>
                {[...props.dishes].sort(compareDishes).map(dish =>
                    <tr key = {dish.id}>
                        <td><button key = {dish.id} onClick={e => {props.removeDish(dish.id); console.log(e.key); window.location.hash="#details";}}>X</button></td>
                        <td class = "bold">
                            <a href="" onClick={e=>{e.preventDefault(); 
                                                     props.dishChoice(dish.id); window.location.hash="#details";} }>{dish.title}</a>
                         </td>
                        <td>{dishType(dish)}</td>
                        <td>{dish.pricePerServing}</td> 
                    </tr>        
                )
                    }
                    <tr>
                        <td></td>
                        <td class = "bold">TOTAL:</td>
                        <td></td>
                        <td><b>{(props.guests * props.dishes.reduce((a, dish) => a + dish.pricePerServing, 0)).toFixed(2)}</b> $</td>
                    </tr>
            </tbody>
        </table>
    </div>
    );
}

const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish.dishTypes){
    	const tp= dish.dishTypes.filter(value => types.includes(value));
    	if(tp.length)
	    return tp[0];
    }
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if (ai< bi) {return -1}
    else if (ai > bi) {return 1}
    else if (ai === bi){return 0} 
}