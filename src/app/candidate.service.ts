import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable()
export class CandidateService {

constructor(private http: HttpClient) { }
    private readonly API = '/api/candidate';

    public getCandidates(): Observable<Candidate[]> {
        return this.http.get<Candidate[]>(this.API);
    }

}
