const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim veritatis consequuntur. Ab, porro facilis. Nihil a magni laborum quibusdam voluptate voluptatem soluta, distinctio, explicabo ipsam veniam nulla, animi ipsum?' },
        {id: '2', title: 'Charmander Laid an Egg', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim veritatis consequuntur. Ab, porro facilis. Nihil a magni laborum quibusdam voluptate voluptatem soluta, distinctio, explicabo ipsam veniam nulla, animi ipsum?'},
        {id: '3', title: 'A Helix Fossil was Found', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim veritatis consequuntur. Ab, porro facilis. Nihil a magni laborum quibusdam voluptate voluptatem soluta, distinctio, explicabo ipsam veniam nulla, animi ipsum?'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer
