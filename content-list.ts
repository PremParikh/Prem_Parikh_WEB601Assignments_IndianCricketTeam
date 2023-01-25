import { Content } from './content-interface';

export class ContentList {
  private _items: Content[] = [];

  constructor() {}

  get items(): Content[] {
    return this.items;
  }

  add(item: Content): void {
    this.items.push(item);
  }

  count(): number {
    return this.items.length;
  }

  getItem(index: number): string {
    if (index < 0 || index >= this.items.length) {
      return '<p>Error : Index out of range</p>';
    }
    const item = this.items[index];
    let html = `<h2>${item.title}</h2>`;
    html += `<p>${item.description}</p>`;
    html += `<p>By ${item.creator}</p>`;
    if (item.imgURL) {
      html += `<img src="${item.imgURL}" alt="${item.title}">`;
    }
    if (item.type) {
      html += `<p>Type: ${item.type}</p>`;
    }
    if (item.tags) {
      html += `<p>Tags: ${item.tags.join(', ')}</p>`;
    }
    return html;
  }
}
