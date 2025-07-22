import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)

// Setup file path and adapter
const file = path.join(__dirname, '../db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Load data
await db.read()
db.data ||= { students: [], teachers: [], classes: [] }

export { db }