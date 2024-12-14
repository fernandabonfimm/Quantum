import BaseLayout from "../components/baseheader";

export default function Home() {
  return (
    <BaseLayout>
      <h2 className="text-3xl font-bold text-gray-800">
        Bem-vindo à Home Page
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Este é o conteúdo da página inicial.
      </p>
    </BaseLayout>
  );
}
