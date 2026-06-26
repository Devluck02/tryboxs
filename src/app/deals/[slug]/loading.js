const Loading = () => {
  return (
    <div className="mt-6 sm:mt-8">
      <div className="mb-5 h-5 w-32 animate-pulse rounded-lg bg-gray-200" />
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-80 animate-pulse bg-gray-100 lg:h-auto" />
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div className="h-6 w-24 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-10 w-3/4 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-8 w-40 animate-pulse rounded-lg bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-100" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-gray-100" />
            </div>
            <div className="mt-4 h-12 animate-pulse rounded-2xl bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
