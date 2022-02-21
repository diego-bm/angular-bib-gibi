import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-edit',
  templateUrl: './gibi-edit.component.html',
  styleUrls: ['./gibi-edit.component.css']
})
export class GibiEditComponent implements OnInit {

  gibi: Gibi;

  constructor(private router: Router, private gibiService: GibiService, private activatedRoute: ActivatedRoute) {
    this.gibi = new Gibi();
  }

  ngOnInit(): void {
    console.log("GibiEditComponent-ngOnInit");
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getById(id);
  }

  getById(id: number): void {
    this.gibiService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.gibi = data;
      });
  }

  goToIndex(): void {
    this.router.navigateByUrl("gibis/gibi-index");
  }

  edit(): void {
    console.log("GibiEditComponent-edit-start");
    this.gibiService.put(this.gibi)
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.goToIndex();
      });
    console.log("GibiEditComponent-edit-end");
  }
}
