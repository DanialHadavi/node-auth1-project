exports.seed = function (knex) {
  const roles = [
    {
      name: "admin", // will get id 1
    },
    {
      name: "user", // will get id 2
    },
  ];

  return knex("roles").insert(roles);
};
