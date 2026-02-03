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
    <section className="contain py-12">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-black pb-2 px-1 relative inline-block">
          Rating & Reviews
          <div className="absolute bottom-0 left-0 w-12 h-[4px] bg-primary rounded-full"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12 items-center">
        {/* Left: Average Score */}
        <div className="flex items-baseline gap-2">
          <span className="text-9xl font-medium text-black tracking-tighter">
            4,5
          </span>
          <span className="text-2xl font-medium text-gray-400">/5</span>
        </div>

        {/* Middle: Rating Breakdown */}
        <div className="flex flex-col gap-4">
          {ratings.map((item) => (
            <div key={item.stars} className="flex items-center gap-6">
              <div className="grid grid-cols-[1fr_auto] items-center gap-2 w-8">
                <Star size={20} className="fill-primary text-primary" />
                <span className="text-md font-semibold text-gray-700">
                  {item.stars}
                </span>
              </div>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-md font-semibold text-gray-600 w-10 text-left">
                %{item.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Summary & Action */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-center grid gap-4">
            <p className="text-gray-400 text-sm font-medium mb-1">
              Total Reviews
            </p>
            <h3 className="text-7xl font-semibold text-black tracking-tight">
              3.0K
            </h3>
          </div>

          <Button>
            Add Comment
            <MessageSquareMore size={18} className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
