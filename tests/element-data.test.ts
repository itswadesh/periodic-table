import { expect, test } from '@playwright/test'

import element_data from '../src/lib/periodic-table-data.ts'

export const category_counts: Record<string, number> = {}

for (const { category } of element_data) {
  category_counts[category] = (category_counts[category] ?? 0) + 1
}

test(`element data`, async () => {
  expect(element_data.length).toBe(118)
  expect(element_data[0].name).toBe(`Hydrogen`)
})
