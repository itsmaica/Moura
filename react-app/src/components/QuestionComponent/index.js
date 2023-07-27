import './PostComponent.css'

function PostComponent(){
return(
    <>
        <div id='post-container'>

            <div id='p-user-section'>

                <div id='p-user-prof-pic-container'>
                    <img id='p-user-prof-pic' src='https://assets.morningconsult.com/wp-uploads/2022/09/30112634/sidney-crosby-penguins-scaled.jpg' alt='user profile picture'/>
                </div>

                <div id='p-user-deets'>
                    <p id='p-username'>User Name</p>
                    <p id='p-date'>Jul 26</p>
                </div>

            </div>

            <div id='p-content-container'>
                <div id='p-headline-cont'>
                    <p>This is a headline!</p>
                </div>

                <div id='p-body-cont'>
                    <p>This is the body of the question. More text will go here, and I'm thinking about implementing a conditional 'see more' so the posts are more uniform. Will need to figure out how images will fit into posts.</p>
                </div>

            </div>

            <div id='p-votess-comments'>

            </div>

        </div>
    </>
)
}

export default PostComponent;
