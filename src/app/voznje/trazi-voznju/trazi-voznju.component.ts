import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Voznja } from "../voznja.model";
import { VoznjaService } from '../voznja.service';

@Component({
  selector: 'app-trazi-voznju',
  templateUrl: './trazi-voznju.component.html',
  styleUrls: ['./trazi-voznju.component.css']
})
export class TraziVoznjuComponent implements OnInit {

  displayedColumns = ["naziv", "polaziste", "odrediste", "stajalista", "vremepolaska", "vremedolaska", "prevoznik", "brojmesta", "status" ];
  voznjaSource = new MatTableDataSource<Voznja>();

@ViewChild(MatSort) sort: MatSort;

constructor(private voznjaService: VoznjaService) { }

  ngOnInit() {
    this.voznjaSource.data = this.voznjaService.getVoznje();
  }

  ngAfterViewInit() {
    this.voznjaSource.sort = this.sort;
  }

  doFilter(filterValue: string) {
    this.voznjaSource.filter = filterValue.trim().toLowerCase();
  }
}
