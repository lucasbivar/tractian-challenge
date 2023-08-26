import { Sidebar } from "./components/Sidebar";
import { PageRoutes } from "./routes";

export default function App(): JSX.Element {
	return <Sidebar pages={<PageRoutes />} />;
}
