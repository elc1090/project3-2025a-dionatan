import React from "react";
import { ThemedLayoutV2 } from "@refinedev/mui";
import { Header } from "@components/header";
import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: React.PropsWithChildren) {
  const { authenticated, redirectTo } = await authProviderServer.check();
  
  if (!authenticated) {
    return redirect(redirectTo || "/login");
  }

  return <ThemedLayoutV2 Header={Header}>{children}</ThemedLayoutV2>;
}