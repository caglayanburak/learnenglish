import { Component } from '@angular/core';
import { AngularFirestore } from  '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'learn-english';
  constructor(private db: AngularFirestore) {  
    //this.getAllNews();
   }
  news:any[]=[];

ngOnInit():void{
  this.getAllNews();
}

  getAllNews()
  {
    this.db.collection('news').snapshotChanges().subscribe((response) => {
      this.news = response.map(item => 
        Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      );
    })
  }

}
