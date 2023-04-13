import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAddToPhotos,
  MdFavorite,
  MdOutlineLan,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import Favorites from "views/admin/favorites";
import Services from "views/admin/services";

const routes = [
  {
    name: "Main Dashboard",
    visible: true,
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    visible: true,
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Create Dashboard",
    visible: true,
    layout: "/admin",
    icon: (
      <Icon as={MdAddToPhotos} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    visible: false,
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    visible: false,
    layout: "/auth",
    path: "/login",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  {
    name: "Favorites",
    layout: "/admin",
    path: "/favorites",
    icon: <Icon as={MdFavorite} width="20px" height="20px" color="inherit" />,
    component: Favorites,
    secondary: true,
  },
  {
    name: "Services",
    layout: "/admin",
    path: "/services",
    icon: <Icon as={MdFavorite} width="20px" height="20px" color="inherit" />,
    component: Services,
  },
];

export const navbarRoutes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Favorites",
    layout: "/admin",
    path: "/favorites",
    icon: <Icon as={MdFavorite} width="20px" height="20px" color="inherit" />,
    component: Favorites,
    secondary: true,
  },
  {
    name: "Create Dashboard",
    layout: "/admin",
    icon: (
      <Icon as={MdAddToPhotos} width="20px" height="20px" color="inherit" />
    ),
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Services",
    layout: "/admin",
    path: "/services",
    icon: <Icon as={MdOutlineLan} width="20px" height="20px" color="inherit" />,
    component: Services,
  },
];

export default routes;
