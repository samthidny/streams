import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iqenpywxshkpavdsuqab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxZW5weXd4c2hrcGF2ZHN1cWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzOTAzODMsImV4cCI6MjAyMDk2NjM4M30.-mCoaXFzs8vaFpe4wswHRK1anETeqPbr9oT6bwUAQAw';
export const supabase = createClient(supabaseUrl, supabaseKey);

