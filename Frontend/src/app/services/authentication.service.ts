import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';


@Injectable() 

export class AuthenticationService
{
    constructor(){}

    
    checkLoggedIn() : boolean
    {
        if(sessionStorage.getItem("username")==null)
        return false;
        else 
        return true;
    }
}
