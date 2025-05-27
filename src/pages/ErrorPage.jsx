import { AiFillHome } from "react-icons/ai";

export default function ErrorPage({ code  }) {
	let style = {};
	let title = ''

	if(code == '404'){
    style = { backgroundImage: "url('/img/404.png')" }
		title = "Page Not Found"
	} else if(code == '401'){
		style = { backgroundImage: "url('/img/401.png')" }
		title = "Undifinied"
	}
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={style}
    >
      <div className="bg-black bg-opacity-40 rounded-xl p-10 flex flex-col md:flex-row items-center gap-8 text-white max-w-3xl">
        <div className="text-6xl font-bold relative">{code}</div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">{title}</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Interdum viverra cras
            aliquam tellus nibh. Congue risus et eros dignissim fringilla nulla
            tincidunt platea eget. Ipsum quis neque morbi vulputate sodales
            sodales. Eleifend blandit ultrices eget molestie in.
          </p>
          <AiFillHome onClick={() => (window.location.href = "/")} /> Back Home
        </div>
      </div>
    </div>
  );
}
