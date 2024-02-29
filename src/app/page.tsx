import RedirectForm from '@/ui/components/forms/redirect-form';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Resume generator</h1>
        <RedirectForm />
        <p className="mt-4">As a software startup owner I really enjoy when people send us their resumes and they include their github account so we can see tangible work they have done.</p>
      </div>
    </main>
  );
}
