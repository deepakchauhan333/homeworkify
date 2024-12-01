import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdyhunevljcgyrokyzii.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkeWh1bmV2bGpjZ3lyb2t5emlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwMzcwNjUsImV4cCI6MjA0ODYxMzA2NX0.iqpWycRTcMyGRSYGWfMg0WG9oXAKdBTH_w6gUyTm6i4';

export const supabase = createClient(supabaseUrl, supabaseKey);