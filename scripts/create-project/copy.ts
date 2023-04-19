import { cp } from "fs";
import { randomBytes } from "crypto";

const random = randomBytes(5).toString("hex");

//console.log(random);

const projectName = `new-project-${random}`;

cp(
  "./src/projects/_project-template",
  `./src/projects/${projectName}`,
  { recursive: true },
  (err) => {
    /* callback */
    console.log(`project created: ${projectName}`);
  }
);
