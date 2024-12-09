export const activePath = (route: string, path: string) => {
  const nowRoute = route.split("/")[1];

  const nowPath = path.split("/")[1];
  if (nowPath === nowRoute) {
    return true;
  }
  return false;
};
