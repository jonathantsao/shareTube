export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
};

export const verifyUsername = (username) => {
  return $.ajax({
    method: "GET",
    url: "/api/users",
    data: { user: { username, action: "verify" } },
  });
};

export const checkUsername = (username) => {
  return $.ajax({
    method: "GET",
    url: "/api/users",
    data: { user: { username, action: "check" } },
  });
};
