import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { RequireAuth } from "../shared/auth/RequireAuth";
import { paths } from "../shared/constants/paths";
import { PublicLayout } from "../layouts/PublicLayout";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import { ManageClassroomPage } from "../pages/admin/ManageClassroomPage";
import { ManageEnrollmentPage } from "../pages/admin/ManageEnrollmentPage";
import { ManageRolePage } from "../pages/admin/ManageRolePage";
import { ManageSubjectPage } from "../pages/admin/ManageSubjectPage";
import { ManageUserPage } from "../pages/admin/ManageUserPage";
import { ReviewDocPage } from "../pages/admin/ReviewDocPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { CellViewerPage } from "../pages/public/biology/CellViewerPage";

const LazyAdminLayout = lazy(async () => {
  const module = await import("../layouts/admin/AdminLayout");
  return { default: module.AdminLayout };
});

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={paths.BIOLOGY_CELLS} replace />,
  },
  {
    element: <PublicLayout />,
    children: [
      {
        path: "biology/cells",
        element: <CellViewerPage />,
      },
      {
        path: "biology/cells/:cellId",
        element: <CellViewerPage />,
      },
    ],
  },
  {
    path: paths.LOGIN,
    element: <LoginPage />,
  },
  {
    path: paths.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: paths.ADMIN,
    element: (
      <RequireAuth>
        <LazyAdminLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: paths.MANAGE_USER,
        element: <ManageUserPage />,
      },
      {
        path: paths.MANAGE_ROLE,
        element: <ManageRolePage />,
      },
      {
        path: paths.MANAGE_CLASSROOM,
        element: <ManageClassroomPage />,
      },
      {
        path: paths.MANAGE_SUBJECT,
        element: <ManageSubjectPage />,
      },
      {
        path: paths.MANAGE_ENROLLMENT,
        element: <ManageEnrollmentPage />,
      },
      {
        path: paths.REVIEW_DOC,
        element: <ReviewDocPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={paths.BIOLOGY_CELLS} replace />,
  },
]);
