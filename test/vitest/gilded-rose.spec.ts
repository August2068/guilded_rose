import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("quality et sellIn diminue de 1 quand on update l'inventaire", () => {
    const gildedRose = new GildedRose([new Item("Lait", 2, 3)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);
  });
  it("la qualite d'un produit ne peut jamais etre negative", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("une fois la date de peremption passee la qualite se degrade 2*plus vite", () => {
    const gildedRose = new GildedRose([new Item("Mont d'or", 1, 3)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it("aged brie augmente sa qualite plus le temps passe", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", -1, 3)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(5);
  });
});
