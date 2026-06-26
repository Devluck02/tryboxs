const CouponDetailLoading = () => (
  <div className="mt-6 animate-pulse sm:mt-8">
    <div className="mb-5 h-4 w-48 rounded-full bg-gray-200" />
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300" />
      <div className="flex flex-col gap-6 px-6 py-7 sm:px-10">
        <div className="h-14 rounded-2xl bg-gray-100" />
        <div className="flex flex-col gap-2">
          <div className="h-3 w-32 rounded-full bg-gray-200" />
          <div className="h-3 w-full rounded-full bg-gray-100" />
          <div className="h-3 w-3/4 rounded-full bg-gray-100" />
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-7 w-7 shrink-0 rounded-full bg-gray-200" />
              <div className="h-3 flex-1 rounded-full bg-gray-100" />
            </div>
          ))}
        </div>
        <div className="h-12 rounded-2xl bg-gray-200" />
      </div>
    </div>
  </div>
);

export default CouponDetailLoading;
