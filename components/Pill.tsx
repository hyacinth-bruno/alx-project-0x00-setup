import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 shadow-sm">
      {title}
    </div>
  );
};

export default Pill;
