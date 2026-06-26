"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-bold text-slate-900">Something went wrong!</h2>
      <p className="text-sm text-gray-500">{error?.message || "Please try again."}</p>
      <button
        onClick={reset}
        className="rounded-xl bg-[#3E80DD] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
