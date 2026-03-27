import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user-details";

@Injectable({
    providedIn: 'root'
})
export class UserDetailService {

    private apiUrl = 'http://localhost:8080/api/v1/user';

    constructor(private http: HttpClient) {}

    saveUserDetails(userDetails: UserDetails) {
        return this.http.post(this.apiUrl, userDetails);
    }

    
}
