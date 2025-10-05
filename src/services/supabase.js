import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zvgjvosmfedaritfeyew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2Z2p2b3NtZmVkYXJpdGZleWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMTM3NzUsImV4cCI6MjA3Mzg4OTc3NX0.XwT4YQuBzrX3RCSwMAGlQzubhP8Eq8cnZZ0zNSjVSRQ.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
