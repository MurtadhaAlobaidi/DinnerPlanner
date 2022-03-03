function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){     
   return  ( 
        <div class="flexParent">
             <div class="sidebar debug"><SidebarPresenter model={props.model}/></div>  
             <div class="mainContent debug">
                   <div id = "searchDiv"><Show hash="#search"><SearchPresenter model={props.model} /></Show></div>
                   <div id = "detailsDiv"><Show hash="#details"><DetailsPresenter model={props.model} /></Show></div>
                   <div id = "summaryDiv"><Show hash="#summary"><SummaryPresenter model={props.model} /></Show></div>

             </div>
            
         </div>  
    );
}

function defaultRoute(){
          if(!["#search", "#summary", "#details"]
          .find((knownRoute)=> knownRoute === window.location.hash)) window.location.hash="#search";
 }

 defaultRoute(); 
 window.addEventListener("hashchange", defaultRoute);