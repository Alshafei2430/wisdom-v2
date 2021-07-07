// import axios from "axios";

// export const checkUserIsAdmin = (currentUser) => {
//   if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
//   const { userRoles } = currentUser;
//   if (userRoles.includes("admin")) return true;

//   return false;
// };

// export const apiInstance = axios.create({
//   baseURL: "https://ecommercewebsiteapi.herokuapp.com/",
// });

export const formateDate = (date) => {
  const parsed = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
  return parsed.toLocaleString();
};
