import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to default locale with basePath
  redirect('/temor/en');
}