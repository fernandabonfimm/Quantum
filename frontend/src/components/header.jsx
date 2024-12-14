import Logo from "../assets/img/logo.png";
export default function Header() {
  return (
    <div className="flex shadow-lg py-4 px-4 w-full bg-white">
      <div className="flex items-center justify-between gap-4 w-full">
        <a className="">
          <img src={Logo} alt="logo" className="w-32" />
        </a>
      </div>
      <div className="flex justify-end w-full gap-4">
        <button className="font-semibold py-0 text-[10px] border-none outline-none text-[#007bff] hover:underline">
          Continuar progresso
        </button>
        <button className="relative font-semibold text-white bg-blue-500 py-0 rounded-lg text-[10px] shadow-lg hover:shadow-blue-400 hover:-translate-y-1 active:translate-y-0 active:shadow-md transition-transform duration-300">
          COMEÇAR AGORA
        </button>
      </div>
    </div>
  );
}
