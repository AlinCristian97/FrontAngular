import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  isXSmall$: Observable<boolean>;
  isSmall$: Observable<boolean>;
  isMedium$: Observable<boolean>;
  isLarge$: Observable<boolean>;
  isXLarge$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isXSmall$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.isSmall$ = this.breakpointObserver.observe(Breakpoints.Small).pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.isMedium$ = this.breakpointObserver.observe(Breakpoints.Medium).pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.isLarge$ = this.breakpointObserver.observe(Breakpoints.Large).pipe(
      map(result => result.matches),
      shareReplay()
    );

    this.isXLarge$ = this.breakpointObserver.observe(Breakpoints.XLarge).pipe(
      map(result => result.matches),
      shareReplay()
    );
  }
}
