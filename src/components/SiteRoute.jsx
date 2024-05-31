import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { setCurrSite } from "../redux/slices/appSlice";

export default function SiteRoute() {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const sitename = queryParams.get("sitename");
  const sitename = "dvm";
  const { currSite } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  if (!currSite || sitename) dispatch(setCurrSite(sitename));

  return <Outlet />;
}
