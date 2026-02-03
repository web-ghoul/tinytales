import Image from "next/image";
import bg from "../assets/images/comment_bg.png";
import Button from "../components/Button";
import CommentCard from "../components/CommentCard";

const CommentsSection = () => {
  return (
    <section className={`grid justify-stretch items-center gap-8 contain py-6`}>
      <CommentCard />
      <hr className="border-gray-300" />
      <CommentCard />
      <hr className="border-gray-300" />
      <CommentCard />
      <hr className="border-gray-300" />
      <CommentCard />
      <Button variant="secondary" className={`w-fit m-auto`}>
        View More Comments
      </Button>
      <div className="relative">
        <Image
          src={bg}
          alt={"comment background"}
          width={100}
          className="absolute left-0 -bottom-10"
        />
      </div>
    </section>
  );
};

export default CommentsSection;
