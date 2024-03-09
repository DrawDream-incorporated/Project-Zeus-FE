import dummyData from "../../../stores/dummyData.json";
import {
  IconThumbUp,
  IconMessageDots,
  IconPlayerRecordFilled
} from "@tabler/icons-react";

interface PostInfo {
  profilePictureURL: string;
  userId: string;
  boltPoint: number;
  createdTime: string;
  thumbsUp: number;
  comments: number;
  postTitle: string;
}

interface Body {
  postInfo: PostInfo[];
  postTitle: string;
}

const Post: React.FC<Body> = ({ postInfo, postTitle }) => {
  const dateDiffIndays = function (date1: string): number {
    const dt1 = new Date(date1);
    const dt2 = new Date();
    console.log(dt1.getHours());
    console.log(dt2.getHours());
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };
  return (
    <div>
      <div className="postBody">
        <div
          className="postTitle"
          style={{
            backgroundImage: `url(${dummyData["q&aBackgroundURL"]})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <span>{postTitle}</span>
        </div>
        {postInfo.map((items, index) => (
          <div key={index} className="post">
            <div className="postIcons">
              <div className="postIconsLeft">
                <div className="userProfilePictureBackground">
                  <img
                    className="userProfilePicture"
                    src={items.profilePictureURL}
                    alt=""
                  />
                </div>
                <span>{items.userId}</span>
                <IconPlayerRecordFilled size={5}> </IconPlayerRecordFilled>
                <span>
                  {dateDiffIndays(items.createdTime)}
                  <span> Days Before</span>
                </span>
              </div>
              <div className="postIconsRight">
                <IconThumbUp></IconThumbUp>
                <span>{items.thumbsUp}</span>
                <IconMessageDots></IconMessageDots>
                <span>{items.comments}</span>
              </div>
            </div>
            <div className="postContent">
              {items.postTitle.length > 50 ? (
                <div>
                  {items.postTitle.substring(0, 50)}
                  <span>...</span>
                </div>
              ) : (
                <div>{items.postTitle}</div>
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
