
import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FilterContentPipe } from '../filter-content.pipe';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {

  @Input() searchText: any;
  contentItem1 : Content = {
    id: 0,
    title: 'RCB',
    description: 'Here I am written a team of IPL.',
    creator: 'Creator',
    imgURL: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
    tags: ['New', 'Fun'],
    type: 'Exciting'
  }
  contentItem2 : Content = {
    id: 1,
    title: 'CSK',
    description: 'Here I am written a team of IPL WHICH is CSK',
    creator: 'Creator2',

    type: 'Boring',
    imgURL: 'https://www.example.com/image1.jpg'
  }
  contentItem3 : Content = {
    id: 2,
    title: 'GT',
    description: 'Here I am written a team of IPL WHICH is gt',
    creator: 'Creator2',
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4tbxi4ohbx6RPOZ5cJ-HsIKGD1OjOG-65GUQ1NvRd37uwyaL3Qb_d9rKt_-WKQx5YvY&usqp=CAU'
  }
  contentItem4 : Content = {
    id: 3,
    title: 'KKR',
    description: 'Here I am written a team of IPL WHICH is KKR',
    creator: 'Creator',
    imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4tbxi4ohbx6RPOZ5cJ-HsIKGD1OjOG-65GUQ1NvRd37uwyaL3Qb_d9rKt_-WKQx5YvY&usqp=CAU'
  }
  contentItem5 : Content = {
    id: 4,
    title: 'PBKS',
    description: 'Here I am written a team of IPL WHICH is PBKS',
    creator: 'Creator3',
    imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4tbxi4ohbx6RPOZ5cJ-HsIKGD1OjOG-65GUQ1NvRd37uwyaL3Qb_d9rKt_-WKQx5YvY&usqp=CAU'

  }
  contentItem6 : Content = {
    id: 5,
    title: 'LSG',
    description: 'Here I am written a team of IPL WHICH is LSG',
    creator: 'Creator',
    imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4tbxi4ohbx6RPOZ5cJ-HsIKGD1OjOG-65GUQ1NvRd37uwyaL3Qb_d9rKt_-WKQx5YvY&usqp=CAU'
  }
  contentItem7 : Content = {
    id: 6,
    title: 'RR',
    description: 'Here I am written a team of IPL WHICH is RR',
    creator: 'Creator',
    imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4tbxi4ohbx6RPOZ5cJ-HsIKGD1OjOG-65GUQ1NvRd37uwyaL3Qb_d9rKt_-WKQx5YvY&usqp=CAU'
  }

  myContentArray : Content[] = [this.contentItem1, this.contentItem2, this.contentItem3, this.contentItem4, this.contentItem5, this.contentItem6, this.contentItem7];

  search(searchText: string){
    console.log(searchText);
    this.myContentArray.forEach((contentItem) => {
      if(contentItem.title === searchText) {
        console.log('Item was found');
        return 'Item was found';
      } else {
        console.log('Item was not found');
        return 'Item was not found';
      }
    });
  }
}
