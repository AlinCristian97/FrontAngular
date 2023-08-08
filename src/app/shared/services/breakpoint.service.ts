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
    this.isXSmall$ = this.observeBreakpoint(Breakpoints.XSmall);
    this.isSmall$ = this.observeBreakpoint(Breakpoints.Small);
    this.isMedium$ = this.observeBreakpoint(Breakpoints.Medium);
    this.isLarge$ = this.observeBreakpoint(Breakpoints.Large);
    this.isXLarge$ = this.observeBreakpoint(Breakpoints.XLarge);
  }

  private observeBreakpoint(breakpoint: string): Observable<boolean> {
    return this.breakpointObserver.observe(breakpoint).pipe(
      map(result => result.matches),
      shareReplay()
    );
  }
}
