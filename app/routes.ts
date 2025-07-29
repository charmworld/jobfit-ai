import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "root.tsx", [
    index("routes/home.tsx"),
    route("/auth", "routes/auth.tsx"),
    route("/upload", "routes/upload.tsx"),
    route("/resume/:id", "routes/resume.tsx"),
    route("/wipe", "routes/wipe.tsx"),
  ]),
];
