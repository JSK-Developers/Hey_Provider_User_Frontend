import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { RegistrationField, ACregistrationfield } from '../booking-form/bookingfield';
@Injectable({
    providedIn: 'root'
})
export class HttpservicesService {

    constructor(private httpclient: HttpClient) { }

    ServicesUrl = 'http://localhost:8080/api/';

    ACservicebook(bookingfield: ACregistrationfield): Observable<any> {
        let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
        let options = {
            headers: httpHeaders
        };
        return this.httpclient.post(this.ServicesUrl + 'AcServices', bookingfield, options)
    }
    registration(registrationField: RegistrationField): Observable<any> {
        let httpHeaders = new HttpHeaders().set('content-type', 'application/json'); // data will be converted to json formate 
        let options = {
            headers: httpHeaders
        };
        return this.httpclient.post(this.ServicesUrl + 'users', registrationField, options)
    }

    // login(bookingfield: BookingField): Observable<any> {
    //     let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    //     let options = {
    //         headers: httpHeaders
    //     };
    //     return this.httpclient.post(this.ServicesUrl + 'register', bookingfield, options)
    // }
    public getProviderList(): Observable<any> {
        return this.httpclient.get(`${this.ServicesUrl}` + '/Provider/ListProvider');
    }
    public getRegistrationList(): Observable<any> {
        return this.httpclient.get(`${this.ServicesUrl}` + '/registration/List');
    }
    public getRegistrationListByName(name: String): Observable<any> {
        let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
        let options = {
            headers: httpHeaders
        };
        return this.httpclient.get(`${this.ServicesUrl}` + '/users/' + `${name}`, options);
    }

}
