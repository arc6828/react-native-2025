import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://oiwawzxxtshouhrgksax.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pd2F3enh4dHNob3Vocmdrc2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxNTk3MTIsImV4cCI6MjA2ODczNTcxMn0.3rSYuH4_aYUt-yGNIoIwqDaf3G5v70mIt4fjhm0YYmM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
