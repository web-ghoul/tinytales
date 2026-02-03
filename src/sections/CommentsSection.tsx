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
    </section>
  );
};

export default CommentsSection;
