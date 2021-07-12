import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OtkaziVoznjuComponent } from '../zakazane-voznje/otkazi-voznju/otkazi-voznju.component';
import { OceniVoznjuComponent } from '../oceni-voznju/oceni-voznju.component';
import { KomentarisiVoznjuComponent } from '../komentarisi-voznju/komentarisi-voznju.component';

@Component({
  selector: 'app-zakazane-voznje',
  templateUrl: './zakazane-voznje.component.html',
  styleUrls: ['./zakazane-voznje.component.css']
})
export class ZakazaneVoznjeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onOtkazi() {
    this.dialog.open(OtkaziVoznjuComponent);
  }

  onOceni() {
    this.dialog.open(OceniVoznjuComponent);
  }
  
  onKomentar() {
    this.dialog.open(KomentarisiVoznjuComponent);

  }
}
