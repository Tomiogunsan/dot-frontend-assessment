import Button from "../Button";


const Card = () => {
  return (
    <div className="flex flex-col gap-4 sm:w-[45%] md:w-[80%]  lg:w-[70%] bg-white">
      <div className="relative w-full h-[20rem]">
        <img
          src="/toyosi.png"
          alt="/"
          className="absolute object-cover rounded-md w-full h-full"
        />
      </div>
      <div className="flex justify-between px-4">
        <span className="font-medium">bag</span>
        <span className="font-semibold">$0.00</span>
      </div>
      <div className="text-sm text-gray-500 px-4">a fashion bag</div>
      <Button>Add to Cart</Button>
    </div>
  );
}

export default Card