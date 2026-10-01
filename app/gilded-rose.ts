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

  qualityUpp(item: Item) {
    item.quality = item.quality + 1;
  }
  qualityDown(item: Item) {
    item.quality = item.quality - 1;
  }
  qualityBackstage(item: Item) {
    // if (item.sellIn < 11) {
    //   if (item.quality < 50) {
    //     this.qualityUpp(item);
    //   }
    // }
    item.sellIn < 11 && item.quality < 50 && this.qualityUpp(item);
    item.sellIn < 6 && item.quality < 50 && this.qualityUpp(item);
  }
  sellInDown(item: Item) {
    item.sellIn = item.sellIn - 1;
  }
  qualityDownCheckFirst(item: Item, number: number) {
    for (let i = 0; i < number; i++) {
      item.quality > 0 && this.qualityDown(item);
    }
  }
  qualityDownCheckFirstSellInNeg(item: Item, number: number) {
    for (let i = 0; i < number; i++) {
      item.sellIn < 0 && item.quality > 0 && this.qualityDown(item);
    }
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name.includes("Conjured")) {
        this.qualityDownCheckFirst(item, 2);
        this.sellInDown(item);
        this.qualityDownCheckFirstSellInNeg(item, 2);
        return this.items;
      }
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Aged Brie":
          item.quality < 50 && this.qualityUpp(item);
          this.sellInDown(item);
          item.sellIn < 0 && item.quality < 50 && this.qualityUpp(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          item.quality < 50 && this.qualityUpp(item);
          this.qualityBackstage(item);
          this.sellInDown(item);
          item.sellIn < 0 && (item.quality = item.quality - item.quality);
          break;
        default:
          this.qualityDownCheckFirst(item, 1);
          this.sellInDown(item);
          this.qualityDownCheckFirstSellInNeg(item, 1);
          break;
      }
    });

    return this.items;
  }
}

// TOO MUCH REFACTORING UNFORTUNATELY
// updateQuality() {
//   this.items.forEach((item) => {
//     switch (item.name) {
//       case "Sulfuras, Hand of Ragnaros":
//         break;
//       case "Aged Brie":
//         item.quality < 50 && item.sellIn > 0 && (item.quality += 1);
//         item.quality < 50 && item.sellIn <= 0 && (item.quality += 2);
//         item.sellIn -= 1;
//         item.quality = Math.min(item.quality, 50);
//         break;
//       case "Backstage passes to a TAFKAL80ETC concert":
//         switch (true) {
//           case item.sellIn > 10:
//             item.quality < 50 && (item.quality += 1);
//             break;
//           case item.sellIn > 5:
//             item.quality < 50 && (item.quality += 2);
//             break;
//           case item.sellIn > 0:
//             item.quality < 50 && (item.quality += 3);
//             break;
//           default:
//             item.quality < 50 && (item.quality += 1);
//             break;
//         }
//         item.sellIn -= 1;
//         item.sellIn < 0 && (item.quality = 0);
//         item.quality = Math.min(item.quality, 50);
//         break;
//       default:
//         item.quality > 0 && item.sellIn > 0 && (item.quality -= 1);
//         item.quality > 0 && item.sellIn <= 0 && (item.quality -= 2);
//         item.sellIn -= 1;
//         break;
//     }
//   });
//   return this.items;
// }
