import React from "react";

type ErrorModalProps = {
  error: string;
};

const ErrorModal = ({ error }: ErrorModalProps) => {
  return (
    <div className="w-full mt-3">
      <div className="bg-red-100 border border-red-600 text-red-600 font-medium px-4 py-3 rounded-xl relative" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>
    </div>
  );
};

export default ErrorModal;
