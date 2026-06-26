const Loading = () => {
  return (
    <div className="mt-6 sm:mt-8">
      <div className="mb-6 h-10 w-64 animate-pulse rounded-lg bg-gray-200 sm:mb-8" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-64 animate-pulse rounded-2xl bg-gray-200" />
        ))}
      </div>
    </div>
  );
};

export default Loading;
