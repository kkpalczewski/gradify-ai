import fs from "fs"
import path from "path"

const SUPPORTED_FORMATS = ['.png', '.webp', '.svg']

export function getTechLogos() {
  return fs.readdirSync(path.join(process.cwd(), "public/tech_logos"))
    .filter(file => SUPPORTED_FORMATS.some(format => file.toLowerCase().endsWith(format)))
    .map(file => `/tech_logos/${file}`)
} 