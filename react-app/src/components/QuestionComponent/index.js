import './QuestionComponent.css'

function QuestionComponent(){
return(
    <>
        <h1>Welcome from the question component. Like a post basically.</h1>
        <div id='question-container'>
            <div id='q-user-section'>
                <div id='q-user-prof-pic-container'>
                    <img id='q-user-prof-pic' src='https://assets.morningconsult.com/wp-uploads/2022/09/30112634/sidney-crosby-penguins-scaled.jpg' alt='user profile'/>
                </div>
                <div>
                    <p>User Name</p>
                    <p>Jul 26</p>
                </div>
            </div>

        </div>
    </>
)
}

export default QuestionComponent;
