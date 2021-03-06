import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from '../../../../core/services/user-rest.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {
  userList: any;

  constructor(private route: ActivatedRoute, private userRest: UserRestService, private router: Router) { }

  ngOnInit() {
     this.getUser();

  }

  getUser(){
    this.userRest.getUsers().subscribe(
      (response) => {this.userList = response.data},
      (error) => { console.log(error) }
    );
  }

  deleteUser(id: number) {
    if(confirm("Are you sure to delete ")) {
      this.userRest.deleteUser(id).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
      );
    }
    this.getUser();
  }

  editUser(id: number) {
    this.router.navigate(['admin/edit-user',id]);
  }
}
