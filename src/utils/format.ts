export const activePath = (route: string, path: string) => {
  const nowRoute = route.split("/")[1];

  const nowPath = path.split("/")[1];
  if (nowPath === nowRoute) {
    return true;
  }
  return false;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
