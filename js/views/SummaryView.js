function SummaryView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        
        <div>
            <button class = "backToSearch" onClick={() => window.location.hash="#search"}>Back to search</button>
            <br></br>
            <div id = "cartTitle">
            Dinner for <span title="nr. guests">{props.persons}</span> guests:
            </div>
            <table class = "summaryViewTable">
            <tbody>
                    <tr>
                            <th>Ingredient</th>
                            <th>Aisle</th>
                            <th>Quantity</th>
                    </tr>
                    
                        {props.ingredients.sort(compareIngredients).map(x=>

                            <tr>
                                <td>{x.name}</td>
                                <td>{x.aisle}</td>
                                <td>{x.amount*props.persons.toFixed(1)} {x.unit}</td>
                            </tr>
                        )
                        }    
                </tbody>
            </table>
       </div>
    );
}
