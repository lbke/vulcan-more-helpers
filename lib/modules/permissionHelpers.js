import Users from "meteor/vulcan:users";
export const ownsOrInGroup = (groupOrGroups = []) => (user, document) => {
  return (
    Users.isAdmin(user) ||
    Users.isMemberOf(user, groupOrGroups) ||
    Users.owns(user, document)
  );
};
