import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base ${
        className || ""
      }`}
    >
      <img src={loading} className="w-5 h-5 mr-4" alt="loading" />
      CompAInion is working...
    </div>
  );
};

export default Generating;
