import { Component, OnInit, Injectable } from '@angular/core';
import { Repo } from '../repo';
import { REPOS } from '../mock-repos';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css']
})

export class PullRequestsComponent implements OnInit {
  repos = REPOS;
  isYellow(status: string): boolean {
    return status === 'YELLOW';
    }

isRed(status: string): boolean {
return status === 'RED';
}

isGreen(status: string): boolean {
  return status === 'GREEN';
  }
  getHeroes(): Observable<HttpResponse<Repo[]>> {
    return this.http.get<Repo[]>(
      'http://chromecasthost/repos', { observe: 'response' });
  }

  constructor(private http: HttpClient) {
      //$scope.apply();
  }
  ngOnInit() {
    this.refreshRepos();
  }
  refreshRepos() {
   this.getHeroes()
     .subscribe(resp => {
      this.repos = [];
      this.repos = { ... resp.body };
     // this.$scope.apply();
     });

  }

}

