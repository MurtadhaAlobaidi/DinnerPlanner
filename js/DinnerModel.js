class DinnerModel
{
    constructor(numberOfGuests =2, dishes=[], currentDish=null, observers=[], currentDishDetails=null, currentDishError=null){
        this.observers = [];
        this.setNumberOfGuests(numberOfGuests);
        this.dishes=[];
        this.setCurrentDish(currentDish);
    }

    addToMenu(dish){
        if(this.dishes.find(x=> x.id === dish.id)){
            throw "dish "+ dish.title +" already in the menu";}
        this.dishes=[...this.dishes, dish];
        this.notifyObservers();

    }
  
    setNumberOfGuests(x){ 
        if(!(x >0 && Number.isInteger(x)))
            throw new Error("Not valid input value")
        if (x != this.numberOfGuests){
            this.numberOfGuests= x;
            this.notifyObservers();
        }
    }

     setCurrentDish(id){
        if(id === this.currentDish){
            return;
        }
        this.currentDish = id;
        this.currentDishDetails= null;
        this.currentDishError= null;
        this.notifyObservers();

        if(this.currentDish){
            DishSource.getDishDetails(this.currentDish)   
            .then(results => {if(this.currentDish === id){this.currentDishDetails = results; this.notifyObservers();}})
            .catch(error => {if(this.currentDish === id){this.currentDishError = error; this.notifyObservers();}} )
        }
    }

     removeFromMenu(dishId){
       /*  if(this.dishes.find(x=>x.id===dishId)){ return;} */
        this.dishes = this.dishes.filter(dish => dish.id != dishId);
        this.notifyObservers();
    }

    addObserver(callback){
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback){
        this.observers = this.observers.filter(cb => cb != callback);
    }

    notifyObservers(){ 
        this.observers.forEach(
            cb =>{
            
                    try {
                      cb();
                    } catch(e) {
                      console.error(e);
                    }

                })
    }

    setDishes(dishes){ this.dishes= [...dishes]; 
        this.notifyObservers();
        ;}    
}



function getIngredients(dishArr){
    const result={}; // object used as mapping
    dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
         if(!result[i.id])
            // ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
         // we copy just in case, as we’ll change the object below
         result[i.id]={...i};
        else
          {result[i.id].amount+=i.amount}
    }))
   return Object.values(result);
 }

 function compareIngredients(a,b){
    if(a.aisle < b.aisle)
       return -1;
    // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!
    if(a.aisle > b.aisle) 
        return 1;
    // At this point, we know that a.aisle===b.aisle


    // TODO compare a.name with b.name, return 1 or -1 based on that
    if(a.name < b.name)
        return -1;
    if(a.name > b.name) 
        return 1;
    throw new Error("there was a problem, try later :(")
    /* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
       there’s a bug */
}