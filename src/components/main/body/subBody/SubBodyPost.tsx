import { IconMessageDots } from "@tabler/icons-react";
import {
  IconPlayerRecordFilled,
  IconThumbUp,
  IconEye,
  IconArrowLeft,
  IconArrowRight
} from "@tabler/icons-react";

interface PostInfo {
  notice: {
    profilePictureURL: string;
    userId: string;
    boltPoint: number;
    tagTitle: string;
    hashTag: string[];
    views: number;
    thumbsUp: number;
    comments: number;
    noticeTitle: string;
    createdTime: string;
  }[];
  posts: {
    profilePictureURL: string;
    userId: string;
    boltPoint: number;
    tagTitle: string;
    hashTag: string[];
    views: number;
    thumbsUp: number;
    comments: number;
    postTitle: string;
    postContent: string;
    createdTime: string;
  }[];
}

interface Body {
  postInfo: PostInfo;
  sortList: string[];
}

const SubBodyPost: React.FC<Body> = ({ postInfo, sortList }) => {
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
      {postInfo.notice.map((posts) => (
        <div className="subBodyPostNotice">
          <div className="postIconsLeft">
            <div className="userProfilePictureBackground">
              <img
                className="userProfilePicture"
                src={posts.profilePictureURL}
                alt=""
              />
            </div>
            <span>{posts.userId}</span>
            <IconPlayerRecordFilled size={5}> </IconPlayerRecordFilled>
            <span>
              {dateDiffIndays(posts.createdTime)}
              <span> Days Before</span>
            </span>
          </div>
          <div className="postSubBodyContent">
            {posts.noticeTitle.length > 50 ? (
              <div>
                {posts.noticeTitle.substring(0, 50)}
                <span>...</span>
              </div>
            ) : (
              <div>{posts.noticeTitle}</div>
            )}
          </div>
          <div className="postSubBodyBottomRow">
            <div>
              <button className="postSubBodyNoticeButton">Notice</button>
              {posts.hashTag.map((hash) => (
                <span>{hash}</span>
              ))}
            </div>
            <div className="postIconsRight">
              <IconEye />
              <span>{posts.views}</span>
              <IconThumbUp></IconThumbUp>
              <span>{posts.thumbsUp}</span>
              <IconMessageDots></IconMessageDots>
              <span>{posts.comments}</span>
            </div>
          </div>
        </div>
      ))}
      {postInfo.posts.map((post) => (
        <div className="subBodyPost">
          <div className="subBodyPostComment">
            <span>Answer</span>
            <span>{post.comments}</span>
          </div>
          <div className="subBodyPostContent">
            <div className="postIconsLeft">
              <div className="userProfilePictureBackground">
                <img
                  className="userProfilePicture"
                  src={post.profilePictureURL}
                  alt=""
                />
              </div>
              <span>{post.userId}</span>
              <IconPlayerRecordFilled size={5}> </IconPlayerRecordFilled>
              <span>
                {dateDiffIndays(post.createdTime)}
                <span> Days Before</span>
              </span>
            </div>
            <div className="postSubBodyContent">
              {post.postTitle.length > 50 ? (
                <div>
                  {post.postTitle.substring(0, 50)}
                  <span>...</span>
                </div>
              ) : (
                <div>{post.postTitle}</div>
              )}
            </div>
            <div className="postSubBodyBottomRow">
              <div>
                <button className="postSubBodyNoticeButton">
                  {post.tagTitle}
                </button>
                {post.hashTag.map((hash) => (
                  <span>{hash}</span>
                ))}
              </div>
              <div className="postIconsRight">
                <IconEye />
                <span>{post.views}</span>
                <IconThumbUp />
                <span>{post.thumbsUp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="subBodyPaiginationBottom">
        <div className="subBodyPaiginationLeft">
          <IconArrowLeft />
          <span>Previous</span>
        </div>
        <div className="subBodyPaiginationMiddle">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>...</span>
          <span>13086</span>
        </div>
        <div className="subBodyPaiginationRight">
          <span>Next</span>
          <IconArrowRight />
        </div>
      </div>
    </div>
  );
};

export default SubBodyPost;
