import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  doc_key: any = ''
  sentences: any[] = []
  link:string="";
  title:string="";
  constructor(private route: ActivatedRoute, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.doc_key = params.get('doc_key');
      this.getAllSerntences()
    })
  }

  show(id: unknown)
  {
    // @ts-ignore
    document.getElementById(id).style.display = "block";
  }
  getAllSerntences() {
    this.db
      .collection('news')
      .doc(this.doc_key)
      .get()
      .subscribe(() => {
        // @ts-ignore
        this.link = data().link;
         // @ts-ignore
        this.title = data().title;
         // @ts-ignore
        this.sentences = data().sentences;
      })
  }
}
