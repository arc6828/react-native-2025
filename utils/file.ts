import { File, Directory } from 'expo-file-system';

// ดึงข้อมูลทั้งหมด SDK 54
export async function getFiles(): Promise<File[]> {
  const files = await FileSystem.readDirectoryAsync(Directory.Document);
  return files.map((name) => ({ name, uri: `${Directory.Document}/${name}` }));
}