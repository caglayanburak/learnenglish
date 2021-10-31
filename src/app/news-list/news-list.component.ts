import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor(private db: AngularFirestore) { }
  news:any[]=[];
  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews()
  {
    this.db.collection('news').snapshotChanges().subscribe((response) => {
      this.news = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      );
    })
    /*this.db.collection('news').doc('news1').collection('sentences').snapshotChanges().subscribe((response) => {
      this.news = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      );
    })*/
  }
}
