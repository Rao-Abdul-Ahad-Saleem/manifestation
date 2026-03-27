import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2 } from "@/lib/r2";
import { env } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const { fileName, fileType } = await req.json();

    const command = new PutObjectCommand({
      Bucket: env.R2_BUCKET,
      Key: fileName,
      ContentType: fileType,
    });

    const signedUrl = await getSignedUrl(r2, command, {
      expiresIn: 600, // URL valid for 60 seconds
    });

    return Response.json({ url: signedUrl });
  } catch (error) {
    return Response.json({ error: "Error generating signed URL" }, { status: 500 });
  }
}