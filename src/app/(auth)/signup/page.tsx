import React, { Suspense } from "react";
import SignUpContainer from "./container/signup";

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const account_type = params.type || null;
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpContainer account_type={account_type} />
      </Suspense>
    </div>
  );
}
