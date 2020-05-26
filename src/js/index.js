import Search from './models/Search'

//global state of the app
// search object
// current recipe object
// shopping list object
// liked recipes

const state = {}


const controlSearch = async() =>{
    // 1. get query from view
    const query = 'pizza' //TODO
   
    if (query){
        //2)new search object and add to state
        state.search = new Search(query);

        //3) 
        //prepare ui for results

        //4) do the serach for recipes
        
       await state.search.getResults()
        //5)
        //render the results on UI
        console.log(state.search.result)
    }
    //

    console.log('SUB PLAYA')
}

document.querySelector('.search').addEventListener('click', e=> {
    e.preventDefault();
    controlSearch();
})





