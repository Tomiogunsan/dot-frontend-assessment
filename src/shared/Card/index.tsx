import Button from "../Button";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

type ICard = {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  onClick: () => void;
  productId: number;
};

const Card = ({
  imageUrl,
  name,
  price,
  description,
  rating,
  reviews,
  onClick,
  productId,
}: ICard) => {
  return (
    <div className="bg-white max-h-max">
      <div className="flex flex-col gap-4 ">
        <Link to={`/products/${productId}`}>
          <div className="relative w-full h-[20rem]">
            <img
              src={imageUrl}
              alt="/"
              className="absolute object-cover rounded-md w-full h-full"
              onError={(e) => {
                e.currentTarget.src =
                  "https://content.hostgator.com/img/weebly_image_sample.png";
              }}
            />
          </div>
          <div className="flex justify-between px-4 pt-4">
            <span className="font-medium">{name}</span>
            <span className="font-semibold">${price}</span>
          </div>
          <div className="flex gap-2 items-center px-4">
            <span className="flex gap-[3px] items-center">
              {" "}
              <MdOutlineStarPurple500 className="text-yellow-500" /> {rating}
            </span>
            <span className="text-gray-500 text-sm">({reviews} reviews)</span>
          </div>
          <div className="text-sm text-gray-500 px-4">{description}</div>
        </Link>

        <Button className="bg-[#29337b]" onClick={onClick}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
// sm:w-[45%] md:w-[80%]  lg:w-[70%] bg-white   md:h-[78%] h-max