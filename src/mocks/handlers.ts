import { http, HttpResponse } from "msw";

const users = [
  {
    name: "Bruce Wayne",
  },
  {
    name: "Clark Kent",
  },
  {
    name: "Princess Diana",
  },
];

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json(users, { status: 200 });
  }),
];
