const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('check if we can go to card page and back to home', async ({ page }) => {
    // go to hp and click pokemon card
    await page.goto('')
    let pokemon = await page.getByText('ivysaur')
    await expect(pokemon).toBeVisible()
    await pokemon.click()
    await expect(page.getByText('ivysaur')).toBeVisible()
    // got back from pokemon card page to hp
    let home = page.getByText('Home')
    await expect(home).toBeVisible()
    await home.click()
    await expect(page.getByText('Home')).toHaveCount(0)
  })
})
