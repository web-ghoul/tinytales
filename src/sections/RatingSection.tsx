import { MessageSquareMore, Star } from "lucide-react";
import Button from "../components/Button";

const RatingSection = () => {
  const ratings = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ];

  return (
    <section className="contain py-12 max-laptop:py-10 max-mobile:py-8">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-black pb-2 px-1 relative inline-block max-tablet:text-xl">
          Rating & Reviews
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] max-laptop:grid-cols-2 max-tablet:grid-cols-1 gap-12 max-laptop:gap-10 max-tablet:gap-8 items-center">
        {/* Left: Average Score */}
        <div className="flex items-baseline gap-2 max-mobile:justify-center">
          <span className="text-9xl max-mobile:text-8xl font-medium text-black tracking-tighter">
            4,5
          </span>
          <span className="text-2xl max-tablet:text-xl font-medium text-gray-400">
            /5
          </span>
        </div>

        {/* Middle: Rating Breakdown */}
        <div className="flex flex-col gap-4 max-tablet:gap-3 max-mobile:gap-2">
          {ratings.map((item) => (
            <div key={item.stars} className="flex items-center gap-6">
              <div className="grid grid-cols-[1fr_auto] items-center gap-2 w-8">
                <Star className="fill-primary text-primary w-5 h-auto max-mobile:w-4" />
                <span className="text-md max-mobile:text-sm font-semibold text-gray-700">
                  {item.stars}
                </span>
              </div>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-tablet:h-1.25">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-md max-mobile:text-sm font-semibold text-gray-600 w-10 text-left">
                %{item.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Summary & Action */}
        <div className="flex flex-col items-center gap-8 max-laptop:gap-7 max-tablet:gap-6 max-mobile:hidden">
          <div className="text-center grid gap-4">
            <p className="text-gray-400 text-sm font-medium mb-1">
              Total Reviews
            </p>
            <h3 className="text-7xl max-laptop:text-6xl max-tablet:text-5xl max-mobile:text-4xl font-semibold text-black tracking-tight">
              3.0K
            </h3>
          </div>

          <Button>
            Add Comment
            <MessageSquareMore className="text-white w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
