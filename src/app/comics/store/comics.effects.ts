import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as 

@Injectable()
export class NameEffects {
    @Effect() name$: Observable<Action> = this.actions$.pipe(ofType('ACTIONTYPE'));

    constructor(
        private actions$: Actions
    ) {}
}