import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import * as moment from 'moment';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  public candidates$: Observable<Candidate[]>;
  public jobsGaps = {};
  constructor(private candidateService: CandidateService) {
    this.candidates$ = this.candidateService.getCandidates().pipe(filter(candidates => !!candidates), tap(this.calculateGapBetweenJobs.bind(this)));
  }

  ngOnInit() {
  }

  private calculateGapBetweenJobs(candidates: Candidate[]) {
    this.jobsGaps = {};
    
    for (let i = 0; i < candidates.length; i++) {
      const currentCandidate = candidates[i];
      this.jobsGaps[currentCandidate.name] = {};
      const currentCandidateExperience = currentCandidate.experience;

      for (let j = 0; j < currentCandidateExperience.length - 1; j++) {
        const job = currentCandidateExperience[j];
        const prevJob = currentCandidateExperience[j + 1];
        this.jobsGaps[currentCandidate.name][job.start_date] = moment(job.start_date).diff(moment(prevJob.end_date), 'days');
      }
    }
  }

}
