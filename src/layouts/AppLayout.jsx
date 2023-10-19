// react router dom imports
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

function AppLayout() {
	return (
		<div>
			<Navbar />

			<main>
				<Outlet />
			</main>
		</div>
	);
}
export default AppLayout;
