import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserDetails } from "../models/user-details";

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private apiUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) {}

  // POST: Save user details
  saveUserDetails(userDetails: UserDetails): Observable<string> {
    return this.http.post<string>(this.apiUrl, userDetails);
  }

  // GET: Fetch all users with pagination
 getAllUserDetails(page: number, size: number): Observable<Page<UserDetails>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<UserDetails>>(this.apiUrl, { params });
  }

  // GET: Fetch user by phone number
  getUserByPhoneNumber(phoneNumber: string): Observable<UserDetails> {
    const params = new HttpParams().set('phoneNumber', phoneNumber);
    return this.http.get<UserDetails>(`${this.apiUrl}/byphone`, { params });
  }

}