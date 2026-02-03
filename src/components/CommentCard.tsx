import StarIcon from "../Icons/StarIcon";

const CommentCard = () => {
  return (
    <article className="grid justify-stretch items-center gap-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <h5 className="font-semibold text-lg">Alex Daewn</h5>
          <div className="flex justify-center items-center gap-1">
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary w-4 h-auto" />
            <StarIcon className="text-primary/50 w-4 h-auto" />
          </div>
        </div>
        <span className="text-gray-600 text-md">4 months ago</span>
      </div>
      <h6 className="text-md font-normal">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed
      </h6>
    </article>
  );
};

export default CommentCard;
