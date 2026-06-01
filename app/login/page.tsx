import LoginCard from "@/components/LoginCard"

export default function Login() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full items-center justify-center py-32 px-16 bg-[url('/images/loginbg.png')] bg-cover bg-center sm:items-start">
       <LoginCard/>
      </main>
    </div>
  );
}
