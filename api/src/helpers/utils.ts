import formidable from "formidable";
import { AuthorizedRequest } from "../users/users.middleware";

export const parseFormDataWithFiles = (req: AuthorizedRequest) =>
  new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => {
    const form = new formidable.IncomingForm({ keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      return err ? reject(err) : resolve({ fields, files });
    });
  });

export const getFileExtension = (fileName: string) => fileName.slice((Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1);