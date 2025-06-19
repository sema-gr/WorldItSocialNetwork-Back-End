import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const UPLOAD_DIR = path.join(__dirname, "../public/uploads/");

async function saveBase64Image(base64: string): Promise<string> {
  const matches = base64.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!matches) {
    console.error("Invalid base64 format:", base64.substring(0, 50) + "...");
    throw new Error("Invalid base64 image format");
  }

  const [_, ext, data] = matches;
  const filename = `${uuidv4()}.${ext}`;
  const filePath = path.join(UPLOAD_DIR, filename);

  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  console.log(
    `Directory ${UPLOAD_DIR} exists:`,
    await fs
      .access(UPLOAD_DIR)
      .then(() => true)
      .catch(() => false)
  );

  try {
    await fs.writeFile(filePath, data, { encoding: "base64" });
    console.log(`File saved: ${filePath}`);
    return `uploads/${filename}`;
  } catch (err) {
    console.error("Error saving file:", err);
    throw new Error("Failed to save image");
  }
}

export { saveBase64Image };
