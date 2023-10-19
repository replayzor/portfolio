import { Link } from "react-router-dom";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Home() {
	return (
		<div className="py-24 bg-gradient-to-t from-blue-300 to-blue-200">
			<div className="grid grid-cols-2 gap-8 px-8 mx-auto max-w-7xl">
				<article>
					<h1 className="text-5xl font-bold tracking-wider font-replay sm:text-7xl">
						I&apos;m Ionut
					</h1>
					<p className="mt-4 text-3xl tracking-wide capitalize text-slate-700">
						Frontend Developer
					</p>
					<p className="mt-2 text-lg tracking-wide capitalize text-slate-800">
						Self-Taught Frontend Developer: A Willingness to Learn, Adapt and
						Deliver Results
					</p>
					<div className="flex mt-4 gap-x-4">
						<Link to="https://github.com/replayzor" target="_blank">
							<FaGithubSquare className="w-10 h-10 duration-300 text-slate-500 hover:text-black" />
						</Link>
						<Link
							to="https://www.linkedin.com/in/ionut-oltean/"
							target="_blank"
						>
							<FaLinkedin className="w-10 h-10 text-blue-800 duration-300 hover:text-black" />
						</Link>
					</div>
				</article>
				<article className="hidden md:block">
					<img src={heroImg} alt="Home image" className="h-80 lg:h-96" />
				</article>
			</div>
		</div>
	);
}
export default Home;
