import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../app.reducer";
import { take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.State>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getisAuth);
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getisAuth).pipe(take(1));
  }
}
