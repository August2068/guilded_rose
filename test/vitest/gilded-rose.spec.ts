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
    const gildedRose = new GildedRose([new Item("Aged Brie", 5, 3)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(4);
  });
  it("aged brie augmente sa qualite plus le temps passe", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 3)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(5);
  });
  it("la qualite d'un produit ne depasse jamais 50", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", -1, 50)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });
  it("sulfuras est un objet legendaire, il n'a pas de date de peremption et ne perd jamais en qualite", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 50, 50),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(50);
    expect(items[0].quality).toBe(50);
  });
});

describe("Backstage passes", () => {
  it("augmente sa qualité plus le temps passe", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 3),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(4);
  });
  it("qualité augmente de 2 quand il reste 10 jours", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 3),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(5);
  });
  it("qualité augmente de 3 quand il reste 5 jours", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 3),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(6);
  });
  it("qualité tombe à 0 après le concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 3),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});
