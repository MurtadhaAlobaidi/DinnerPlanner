function SidebarPresenter(props){
    return <SidebarView guests = {props.model.numberOfGuests}
                        setGuests = {x => {props.model.setNumberOfGuests(x); console.log("the user wants a dinner for " + x + " guests")} }
                        dishes={props.model.dishes}
                        dishChoice = {x => {props.model.setCurrentDish(x); console.log("the dish has been chosen dish: " + x);}}
                        removeDish = {x => {props.model.removeFromMenu(x); console.log("the dish " + x + " has been removed from the menu")}}
    />
} 