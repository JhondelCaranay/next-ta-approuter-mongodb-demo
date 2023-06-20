const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-8xl">Our Works</h1>
      {children}
    </div>
  );
};
export default layout;
