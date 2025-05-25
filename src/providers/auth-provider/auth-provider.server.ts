import type { AuthProvider } from "@refinedev/core";
import { createSupabaseServerClient } from "@utils/supabase/server";

export const authProviderServer: Pick<AuthProvider, "check"> = {
  check: async () => {
    const supabase = supabaseServerClient();
    const { data } = await supabase.auth.getSession();
  
    if (!data.session) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
    return { authenticated: true };
  },
};
