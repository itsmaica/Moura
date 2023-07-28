import PostForm from '../PostForm';
import PostComponent from '../PostComponent';

import './Feed.css'

function Feed(){
    return(

      <div id='f-main-container'>


        <div id='f-postform-cont'>
            <PostForm />
        </div>

        <div id='f-post-comp-container'>
            <PostComponent />
        </div>



      </div>
    )

}

export default Feed;
