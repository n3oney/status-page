import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Status} from '../status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statuses$: Observable<Status[]>;

  constructor(
    private afFirestore: AngularFirestore
  ) {
    this.statuses$ = afFirestore.collection<Status>('services').valueChanges();
  }
}
