import { Routes, Route } from "react-router-dom";
import { Overview } from "../pages/Overview";
import { Units } from "../pages/Units";
import { UnitProfile } from "../pages/UnitProfile";
import { CompanyProfile } from "../pages/CompanyProfile";
import { Companies } from "../pages/Companies";
import { Users } from "../pages/Users";
import { WorkOrders } from "../pages/WorkOrders";
import { Assets } from "../pages/Assets";
import { AssetProfile } from "../pages/AssetProfile";
import { PageWrapper } from "../components/PageWrapper";

export const PageRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<PageWrapper title="Overview">
						<Overview />
					</PageWrapper>
				}
			/>
			<Route
				path="/companies"
				element={
					<PageWrapper title="Companies">
						<Companies />
					</PageWrapper>
				}
			/>
			<Route
				path="/companies/:id"
				element={
					<PageWrapper>
						<CompanyProfile />
					</PageWrapper>
				}
			/>
			<Route
				path="/units"
				element={
					<PageWrapper title="Units">
						<Units />
					</PageWrapper>
				}
			/>
			<Route
				path="/units/:id"
				element={
					<PageWrapper>
						<UnitProfile />
					</PageWrapper>
				}
			/>
			<Route
				path="/assets"
				element={
					<PageWrapper title="Assets">
						<Assets />
					</PageWrapper>
				}
			/>
			<Route
				path="/assets/:id"
				element={
					<PageWrapper>
						<AssetProfile />
					</PageWrapper>
				}
			/>
			<Route
				path="/work-orders"
				element={
					<PageWrapper title="Work Orders">
						<WorkOrders />
					</PageWrapper>
				}
			/>
			<Route
				path="/users"
				element={
					<PageWrapper title="Users">
						<Users />
					</PageWrapper>
				}
			/>
			<Route path="/*" element={<PageWrapper title="Not Found" />} />
		</Routes>
	);
};
