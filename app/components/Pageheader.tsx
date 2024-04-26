const Pageheader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default Pageheader;
