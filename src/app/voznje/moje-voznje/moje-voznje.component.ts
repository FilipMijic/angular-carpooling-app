import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ObrisiVoznjuComponent } from '../moje-voznje/obrisi-voznju/obrisi-voznju.component';
import { OceniVoznjuComponent } from '../oceni-voznju/oceni-voznju.component';
import { KomentarisiVoznjuComponent } from '../komentarisi-voznju/komentarisi-voznju.component';

@Component({
  selector: 'app-moje-voznje',
  templateUrl: './moje-voznje.component.html',
  styleUrls: ['./moje-voznje.component.css']
})
export class MojeVoznjeComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  onObrisi() {
    this.dialog.open(ObrisiVoznjuComponent);
  }

  onOceni() {
    this.dialog.open(OceniVoznjuComponent);
  }
  
  onKomentar() {
    this.dialog.open(KomentarisiVoznjuComponent);
  }
  
}
