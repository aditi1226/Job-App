import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable()

export class apiService{

    constructor(private http:HttpClient)
    {}
    getlogin(username:string,password:string) : Observable<any>
    {
        return this.http.get(`http://localhost:8080/login/${username}/${password}`,{responseType: 'text'});
    }
    signup(s:string)
    {
        return this.http.post("http://localhost:8080/signup",s,{responseType:'text'});
    }
    getjobsbyprofile(profile :string)
    {
        return this.http.get(`http://localhost:8080/getjobsbyprofile/${profile}`);
    }
    getjobsbyprofileandcompany(profile :string,company:string)
    {
        return this.http.get(`http://localhost:8080/getjobs/${profile}/${company}`);
    }
    getjobsbycompany(company :string)
    {
        return this.http.get(`http://localhost:8080/getjobsbycompany/${company}`);
    }
    postJob(s:string)
    {
        return this.http.post("http://localhost:8080/postjobs",s,{responseType : 'text'}); 
    }
    getProfile()
    {
        return this.http.get("http://localhost:8080/getprofiles");
    }
    getCompany()
    {
        return this.http.get("http://localhost:8080/getcompanies")
    }
}