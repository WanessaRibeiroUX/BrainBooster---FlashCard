import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import path from "path";

// Configuração do Digital Ocean Spaces
const s3Client = new S3Client({
  endpoint: process.env.BUCKET_URL,
  region: "us-east-1", // DigitalOcean Spaces usa us-east-1
  credentials: {
    accessKeyId: process.env.BUCKET_KEY || "",
    secretAccessKey: process.env.BUCKET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = "flash-cards";
const CDN_URL = process.env.BUCKET_CDN || "";

export interface UploadResult {
  url: string;
  filename: string;
  key: string;
}

export interface FileUpload {
  buffer: Buffer;
  originalName: string;
  mimeType: string;
}

/**
 * Faz upload de um arquivo para o Digital Ocean Spaces
 */
export async function uploadFile(
  file: FileUpload,
  folder: string = "flashcards"
): Promise<UploadResult> {
  try {
    // Gerar nome único para o arquivo
    const fileExtension = path.extname(file.originalName);
    const filename = `${uuidv4()}${fileExtension}`;
    const key = `${folder}/${filename}`;

    // Configurar o comando de upload
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimeType,
      ACL: "public-read", // Tornar o arquivo público
    });

    // Fazer o upload
    await s3Client.send(command);

    // Retornar a URL do CDN
    const url = `${CDN_URL}/${key}`;

    return {
      url,
      filename,
      key,
    };
  } catch (error) {
    console.error("Erro ao fazer upload:", error);
    throw new Error("Falha ao fazer upload do arquivo");
  }
}

/**
 * Remove um arquivo do Digital Ocean Spaces
 */
export async function deleteFile(key: string): Promise<void> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    await s3Client.send(command);
  } catch (error) {
    console.error("Erro ao deletar arquivo:", error);
    throw new Error("Falha ao deletar arquivo");
  }
}

/**
 * Valida se um arquivo é uma imagem permitida
 */
export function validateImageFile(mimeType: string, size: number): boolean {
  const allowedImageTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  const maxSize = 5 * 1024 * 1024; // 5MB

  return allowedImageTypes.includes(mimeType) && size <= maxSize;
}

/**
 * Valida se um arquivo é um áudio permitido
 */
export function validateAudioFile(mimeType: string, size: number): boolean {
  const allowedAudioTypes = [
    "audio/mpeg",
    "audio/mp3",
    "audio/wav",
    "audio/ogg",
    "audio/m4a",
    "audio/aac",
  ];

  const maxSize = 10 * 1024 * 1024; // 10MB

  return allowedAudioTypes.includes(mimeType) && size <= maxSize;
}

/**
 * Extrai a chave (key) de uma URL do CDN
 */
export function extractKeyFromUrl(url: string): string | null {
  try {
    const cdnUrl = process.env.BUCKET_CDN || "";
    if (url.startsWith(cdnUrl)) {
      return url.replace(`${cdnUrl}/`, "");
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Processar mídia de cards Anki (extrair e fazer upload)
 */
export async function processAnkiMedia(
  mediaBuffer: Buffer,
  filename: string,
  mimeType: string
): Promise<UploadResult | null> {
  try {
    // Validar o arquivo baseado no tipo
    const isValidImage = validateImageFile(mimeType, mediaBuffer.length);
    const isValidAudio = validateAudioFile(mimeType, mediaBuffer.length);

    if (!isValidImage && !isValidAudio) {
      console.warn(
        `Arquivo ignorado: ${filename} (tipo não suportado ou muito grande)`
      );
      return null;
    }

    // Fazer upload do arquivo
    const result = await uploadFile(
      {
        buffer: mediaBuffer,
        originalName: filename,
        mimeType,
      },
      "anki-media"
    );

    return result;
  } catch (error) {
    console.error(`Erro ao processar mídia do Anki: ${filename}`, error);
    return null;
  }
}
