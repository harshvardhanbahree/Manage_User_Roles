const { ROLE } = require("../data");

function canView(user, project) {
  return user.role === ROLE.ADMIN || project.userId == user._id;
}

function scopeProject(user, projects) {
  if (user.role === ROLE.ADMIN) return projects;
  return projects.filter((project) => project.userId === user.id);
}
module.exports = { canView, scopeProject };
