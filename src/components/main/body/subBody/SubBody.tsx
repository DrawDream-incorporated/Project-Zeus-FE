import dummyData from "../../../../stores/dummyData.json";
import "./SubBody.css";
import {
  IconRefresh,
  IconSearch,
  IconArrowLeft,
  IconArrowRight,
  IconPencil
} from "@tabler/icons-react";
import { Input } from "@mantine/core";
import SubBodyPost from "./SubBodyPost";

interface Body {
  postInfo: any;
  title: string;
  description: string;
  sortList: string[];
}

const SubBody: React.FC<Body> = ({
  postInfo,
  title,
  description,
  sortList
}) => {
  return (
    <div className="body">
      <div className="subBodyContainer">
        <img
          className="bodyBanner"
          src={dummyData.bodyBannerURL}
          alt="banner"
        />
        <div
          className="subBodyPostTitle"
          style={{
            backgroundImage: `url(${dummyData["q&aBackgroundURL"]})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <div className="subBodySortingRow">
          <button className="questionButton">
            <IconPencil />
            Ask
          </button>
          <div>
            {sortList.map((sortText) => (
              <span>{sortText}</span>
            ))}
          </div>
          <div>
            <button>All</button>
            <button>the latest</button>
          </div>
        </div>
        <hr />
        <div className="subBodySearchRow">
          <IconRefresh className="subBodyRefresh" color="grey" />
          <Input
            ml="xl"
            mr="xl"
            placeholder="Search"
            radius={"xl"}
            leftSection={<IconSearch size={16} />}
          />
          <div className="subBodyPaiginationTop">
            <span>1/13083 page</span>
            <IconArrowLeft className="subBodyArrowLeft" />
            <IconArrowRight className="subBodyArrowRight" />
          </div>
        </div>
        <div>
          <div>
            <SubBodyPost postInfo={postInfo} sortList={sortList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBody;
