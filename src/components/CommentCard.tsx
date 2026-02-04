import StarIcon from "../Icons/StarIcon";

const CommentCard = () => {
  return (
    <article className="grid justify-stretch items-center gap-4 max-tablet:gap-3 max-mobile:gap-2">
      <div className="flex justify-between items-center gap-4 max-tablet:gap-3 max-mobile:gap-2">
        <div className="flex justify-center items-center gap-4 max-tablet:gap-3 max-mobile:gap-2">
          <h5 className="font-semibold text-lg max-tablet:text-md">
            Alex Daewn
          </h5>
          <div className="flex justify-center items-center gap-1">
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary/50 w-4 h-auto" />
          </div>
        </div>
        <span className="text-gray-600 text-md max-tablet:text-sm">
          4 months ago
        </span>
      </div>
      <h6 className="text-md font-normal max-tablet:text-sm">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed
      </h6>
    </article>
  );
};

export default CommentCard;
