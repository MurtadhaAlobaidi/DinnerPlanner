const REF= "dinnerModel"+ 36 ; //  NN is your TW2_TW3 group number

function persistModel(model){

    let loadingFromFirebase=false;
	model.addObserver(function(){ 
        if (loadingFromFirebase === true) return;
        firebase.database().ref(REF).set({  // object literal
       guests: model.numberOfGuests,
       dishes: model.dishes,
       currentDish: model.currentDish
   });
});
firebase.database().ref(REF).on("value", function(data){
	
    loadingFromFirebase = true;
    try{
        if(data.val()){
            model.setNumberOfGuests(data.val().guests);
            model.setDishes(data.val().dishes || []);
            model.setCurrentDish(data.val().currentDish || null)
        }
    } catch(e){console.log(e);}
    finally {loadingFromFirebase = false;}
    
});
}
