// react router dom imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "skills",
				element: <Skills />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
