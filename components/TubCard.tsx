import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface TubCardProps {
    img: string;
    price: string;
    rating: number;
    description: string;
    title: string
}

const TubCard: React.FC<TubCardProps> = ({
    img, price, rating, description, title
}) => {

    const generateRating  = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className="flex gap-1 text-[#ff9529]">
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                )
            case 2:
                return (
                    <div className="flex gap-1 text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                )
            case 3:
                return (
                    <div className="flex gap-1 text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                )
            case 4:
                return (
                    <div className="flex gap-1 text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                )
            case 5:
                return (
                    <div className="flex gap-1 text-[#ff9529]">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                )
                break;
        
            default:
                return null;
        }
    }

  return (
    <div className="p-4 border border-gray-200 rounded-xl max-w-[500px]">
        <div>
            <Image
                className="w-full h-[200px]"
                src={img}
                alt={title}
                width={300}
                height={300}
            />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent uppercase font-medium">
            {title}
        </h2>
        <p className="text-gray-400 max-w-[150px]">
            {description}
        </p>
        <div>
            {generateRating(rating)}
        </div>
        <div className="font-bold flex gap-4">
            $ {price}.00
            <div className="font-normal">
                <span className="text-accent">Was: </span> 
                <del className="text-gray-500">
                    $ {parseInt(price) + 500}.00
                </del>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TubCard
