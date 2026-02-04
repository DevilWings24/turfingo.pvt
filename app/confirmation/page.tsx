"use client";

export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";

const ConfirmationPage = dynamicImport(
  () => import("@/components/ConfirmationPage"),
  { ssr: false }
);

export default function Page() {
  return <ConfirmationPage />;
}
