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
  updateQuality() {
    this.items.forEach((item) => {
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
          item.quality > 0 && this.qualityDown(item);
          this.sellInDown(item);
          item.sellIn < 0 && item.quality > 0 && this.qualityDown(item);
          break;
      }
    });

    return this.items;
  }

  // updateQualityOld() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (
  //       this.items[i].name != "Aged Brie" &&
  //       this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
  //     ) {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (
  //           this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
  //         ) {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != "Aged Brie") {
  //         if (
  //           this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
  //         ) {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality =
  //             this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
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
