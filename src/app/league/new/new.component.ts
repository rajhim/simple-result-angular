import {Component, ViewChild} from '@angular/core';
import {LeagueClass} from '../interface/league-class';
import {ReusableClass} from '../../shared/reusable-class/reusable-class';
import {LeagueService} from '../service/league.service';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent extends ReusableClass{
  @ViewChild('f') validateForm: NgForm;
  team = new LeagueClass();
  routeId;
  constructor(private service: LeagueService, private router: Router, private route: ActivatedRoute) {
    super();
    this.route.params.subscribe(params => {
      this.routeId = (params['id']);
    });

    if(this.routeId){
      this.service.viewDetails(this.routeId);
      var details = this.service.league.getValue();
      if(details){
        this.team = details;
      }
    }
  }

  submitData(): any {
    if(this.validateForm.valid){
      this.team.date = this.formatDate(new Date(this.team.date));
      if(!this.routeId){
        this.team.id = this.uuidv4();
        this.service.addNewResult(this.team);
        this.router.navigate(['/result']);
      }else{
        this.service.updateResult(this.team);
        this.router.navigate(['/result']);
      }
    }else{
      Object.keys(this.validateForm.controls).forEach(key=>{
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
        this.validateForm.controls[key].markAsUntouched();
      })
    }




  }
}
