import "./PostForm.css";

function PostForm() {
  return (
    <div id="pf-container">
      <div id="pf-top-cont">
        <div id="pf-user-pic-cont">
          <img
            src="https://www.si.com/.image/t_share/MTY4MDMwNTA1Nzc4MzU3NjMy/sidney-crosby-stanley-cupsjpg.jpg"
            alt="user"
          />
        </div>

        <div>
          <button id="pf-ask-share-button">
            What do you want to ask or share?
          </button>
        </div>
      </div>

      <div id="pf-bottom-cont">
        <button>
          <i className="fa-regular fa-circle-question" />
          Ask
        </button>

        <span>|</span>

        <button>
          <i className="fa-regular fa-pen-to-square" />
          Answer
        </button>

        <span>|</span>

        <button>
          <i class="fa-solid fa-pen" />
          Post
        </button>
      </div>
    </div>
  );
}

export default PostForm;
