export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>This is blog</h1>
      {children}
    </section>
  );
}
