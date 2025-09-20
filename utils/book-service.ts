import { supabase } from './supabase';
import { Book } from './types';

// ดึงข้อมูลทั้งหมด
export async function getBooksDatabase(): Promise<Book[]> {
  const { data, error } = await supabase.from('books').select('*');
  if (error) throw error;
  return data || [];
}

// ดึงข้อมูลตาม id
export async function getBookByIdDatabase(id: string): Promise<Book | null> {
  const { data, error } = await supabase.from('books').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}

// เพิ่มข้อมูลใหม่
export async function addBookDatabase(book: Book) {
  const { data, error } = await supabase.from('books').insert([book]);
  if (error) throw error;
  return data;
}

// อัปเดตข้อมูล
export async function updateBookDatabase(id: string, book: Partial<Book>) {
  const { data, error } = await supabase.from('books').update(book).eq('id', id);
  if (error) throw error;
  return data;
}

// ลบข้อมูล
export async function deleteBookDatabase(id: string) {
  const { data, error } = await supabase.from('books').delete().eq('id', id);
  if (error) throw error;
  return data;
}
