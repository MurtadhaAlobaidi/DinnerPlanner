function DetailsPresenter(props){
    return (
    promiseNoData(props.model.currentDish, props.model.currentDishDetails, props.model.currentDishError) ||
    <DetailsView 
                isDishInMenu={props.model.dishes.find(dish=> props.model.currentDish === dish.id)}
			    people={props.model.numberOfGuests}
			    dish={props.model.currentDishDetails}
                dishAdded = {() => props.model.addToMenu(props.model.currentDishDetails)}
   />);
}


