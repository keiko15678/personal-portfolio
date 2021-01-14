export function determineStaticAssetsPath(): string {
  return process.env.BLOB_URL !== null && process.env.BLOB_URL !== undefined ? process.env.BLOB_URL : ''
}