import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig(); // lấy runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseKey;

  console.log(supabaseUrl, supabaseKey);

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });

  return {
    provide: {
      supabase,
    },
  };
});
