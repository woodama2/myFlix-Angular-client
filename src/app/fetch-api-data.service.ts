import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  // Declaring the api url that will provide data for the client app
  // Base URL of the API
  apiUrl = 'https://stark-eyrie-86274-1237014d10af.herokuapp.com'

  // Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this http

  constructor(private http: HttpClient) { }
  
  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.post(`${this.apiUrl}/users`, userDetails).pipe(
  catchError(this.handleError)
  );
}

  // Making the api call for the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(`${this.apiUrl}/login`, userDetails).pipe(
    catchError(this.handleError)
    );
  }

  // Making the api call for the Get All Movies endpoint
  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/movies`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
// Non-typed response extraction
  private extractResponseData(res: any): any {
    const body = res;
    return body || { };
  }

  // Making the api call for the Get ONE Movies endpoint
  getOneMovies(title: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/users/${user.username}/${encodeURIComponent(movie.id)}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Get Director endpoint
  getDirector(directorName: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/directors/' + directorName, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Get Genre Movies endpoint
  getGenre(genreName: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/genre/' + genreName, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Get User endpoint
  getUser(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/' + username, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Get Favorite Movies endpoint
  getFavouriteMovies(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'users/' + username, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      map((data) => data.FavoriteMovies),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Add a movie to Favorite Movies endpoint
  addFavouriteMovies(username: string, movie: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/users/${user.username}/${encodeURIComponent(movie.id)}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Edit User endpoint
  editUser(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/users/${user.username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Delete User endpoint
  deleteUser(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/users/${user.username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  // Making the api call for the Delete a movie from Favorite Movies endpoint
  deleteFavouriteMovies(username: string, movie: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/users/${user.username}/${encodeURIComponent(movie.id)}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }


// Handle API errors
private handleError(error: HttpErrorResponse): any {
  if (error.error instanceof ErrorEvent) {
  console.error('Some error occurred:', error.error.message);
  } else {
  console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`);
  }
  return throwError(
  'Something bad happened; please try again later.');
}

  
}