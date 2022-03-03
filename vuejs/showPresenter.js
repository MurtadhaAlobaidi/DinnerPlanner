const Show={ 
    data(){ return {hashState:window.location.hash}; },
    props:["hash"],
    created(){
        this.listener=()=> this.hashState= window.location.hash;
        window.addEventListener("hashchange", this.listener);
        },          // lifecycle 1, execute at creation
    unmounted(){ 
            window.removeEventListener("hashchange", this.listener); 
    },
    render(){ 
        return (
        <div class={(this.hash=== this.hashState)?"":"hidden"} >{this.$slots.default()}</div>
        );}

}