import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class ProfilesAPIService {

  constructor(private http:HttpClient) { }

  private profiles:any=new BehaviorSubject<any>([])

  currentProfiles=this.profiles.asObservable()

  gitFinder(searchterm){
    this.http.get(`https://api.github.com/users/${searchterm}?accesstoken=3e30e0fc755cfd701782c70d019fa4ef1f6492e`)
    .subscribe((Response:any)=>{this.profiles.next(Response)})
  }
}
