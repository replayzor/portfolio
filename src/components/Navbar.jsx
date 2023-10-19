import { Link } from "react-router-dom";
import { links } from "../data";

function Navbar() {
	return (
		<nav className="bg-blue-200 ">
			<div className="flex flex-col justify-between px-8 py-4 mx-auto sm:gap-x-16 sm:items-center sm:py-8 sm:flex-row max-w-7xl">
				<h2 className="text-3xl font-bold text-orange-500">
					Replay <span className="text-blue-600">Dev</span>
				</h2>
				<div className="flex gap-x-3">
					{links.map((link) => {
						const { id, href, text } = link;
						return (
							<Link
								className="text-lg tracking-wide capitalize duration-300 hover:text-blue-600"
								key={id}
								to={`${href}`}
							>
								{text}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
