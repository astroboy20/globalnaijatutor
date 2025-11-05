import Login from "./container/login";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const account_type = params.type || null;

  return (
    <main>
      <Login account_type={account_type} />
    </main>
  );
}
