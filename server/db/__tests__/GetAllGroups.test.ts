import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'
import { getAllGroups } from '../functions/groups'

const db = connection

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('db.getAllGroups()', () => {
  it('get all the groups', async () => {
    //ARRANGE
    //ACT
    const groups = await getAllGroups()
    //ASSERT
    expect(groups).toHaveLength(3)
  })
})