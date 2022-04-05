import { getAllCharactersResponse } from "@backend/types/response/characters";
import Link from "next/link";
import ContentLoader from "react-content-loader";
import {
  ContainCharactersDetail,
  ContainLoader,
} from "./CharactersItem.styled";

const descriptionLength = 90;

function CharactersItem({
  data,
}: {
  data: getAllCharactersResponse["data"]["results"][0];
}) {
  const { name, description, id, thumbnail } = data;
  return (
    <Link href={"/character/" + id} as={"/character/" + id}>
      <ContainCharactersDetail img={thumbnail.path + "." + thumbnail.extension}>
        <div className="cover">
          <div>
            <div>{/* <span className="price">${price}</span> */}</div>
          </div>
        </div>
        <div className="contain">
          <div>
            <span>#{id}</span>
          </div>
          <h4>
            <span>{name} </span>
          </h4>
          <p>
            {description.length > descriptionLength
              ? `${description.substring(0, descriptionLength) + "..."}`
              : description}
          </p>
        </div>
      </ContainCharactersDetail>
    </Link>
  );
}

export const CharactersItemLoader = () => {
  return (
    <ContainLoader>
      <ContentLoader width={"100%"} />
    </ContainLoader>
  );
};

export default CharactersItem;
