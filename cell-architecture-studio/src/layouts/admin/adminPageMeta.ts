import { paths } from "../../shared/constants/paths";

const adminRoot = `/${paths.ADMIN}`;

/** Tiêu đề header theo route admin */
export function getAdminPageTitle(pathname: string): string {
  if (pathname === adminRoot || pathname === `${adminRoot}/`) {
    return "Tổng quan";
  }
  const map: Record<string, string> = {
    [`${adminRoot}/${paths.MANAGE_USER}`]: "Quản lý người dùng",
    [`${adminRoot}/${paths.MANAGE_ROLE}`]: "Quản lý vai trò",
    [`${adminRoot}/${paths.MANAGE_CLASSROOM}`]: "Quản lý lớp học",
    [`${adminRoot}/${paths.MANAGE_SUBJECT}`]: "Quản lý môn học",
    [`${adminRoot}/${paths.MANAGE_ENROLLMENT}`]: "Quản lý phân lớp",
    [`${adminRoot}/${paths.REVIEW_DOC}`]: "Duyệt tài liệu",
  };
  return map[pathname] ?? "Cell Studio Admin";
}
