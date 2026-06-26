const Loading = () => {
  return (
    <div className="mt-12 space-y-16 sm:mt-16">
      {[1, 2, 3].map((section) => (
        <div key={section}>
          <div className="mb-5 h-8 w-48 animate-pulse rounded-lg bg-gray-200 sm:mb-7" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[1, 2, 3, 4].map((card) => (
              <div
                key={card}
                className="h-48 animate-pulse rounded-2xl bg-gray-200"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
