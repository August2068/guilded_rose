export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Aged Brie":
          item.quality < 50 && item.sellIn > 0 && (item.quality += 1);
          item.quality < 50 && item.sellIn <= 0 && (item.quality += 2);
          item.sellIn -= 1;
          item.quality = Math.min(item.quality, 50);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          switch (true) {
            case item.sellIn > 10:
              item.quality < 50 && (item.quality += 1);
              break;
            case item.sellIn > 5:
              item.quality < 50 && (item.quality += 2);
              break;
            case item.sellIn > 0:
              item.quality < 50 && (item.quality += 3);
              break;
            default:
              item.quality < 50 && (item.quality += 1);
              break;
          }
          item.sellIn -= 1;
          item.sellIn < 0 && (item.quality = 0);
          item.quality = Math.min(item.quality, 50);
          break;
        default:
          item.quality > 0 && item.sellIn > 0 && (item.quality -= 1);
          item.quality > 0 && item.sellIn <= 0 && (item.quality -= 2);
          item.sellIn -= 1;
          break;
      }
    });
    return this.items;
  }
}
