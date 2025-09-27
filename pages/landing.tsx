import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-14">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <header className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Feature Spotlight</p>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Landing Page</h1>
            <p className="max-w-2xl text-base text-slate-600">
              Explore premium stays curated for comfort, complete with flexible scheduling and modern amenities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              title="Small Rounded"
              styles="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm shadow-md hover:from-blue-600 hover:to-blue-700"
            />
            <Button
              title="Medium Rounded"
              styles="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 text-base shadow-md hover:from-emerald-600 hover:to-emerald-700"
            />
            <Button
              title="Large Rounded"
              styles="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 px-6 py-3 text-lg shadow-md hover:from-purple-600 hover:to-fuchsia-700"
            />
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Landing;
