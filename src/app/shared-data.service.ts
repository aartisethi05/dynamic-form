import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  SharingData = new BehaviorSubject(null);  
}
