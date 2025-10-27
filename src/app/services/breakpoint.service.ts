import { computed, Injectable, signal } from '@angular/core';
import { debounceTime, fromEvent, startWith } from 'rxjs';

// Like global context/ store
@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  // Signal = Angular's reactive state system HOWEVER it is reactive everywhere
  // automatically without one needing to trigger an update manually compared to React:
  // const [width, setWidth] = useState(window.innerWidth);

  // Signal that holds current device width
  width = signal(window.innerWidth);
  // Add signal for height possibly

  // My breakpoints
  private readonly mobileMax = 667;
  private readonly tabletMax = 850;

  // Computed signals (reactive)
  // They will auto update if a width signal changes
  // Collect the value of the signal "width" by calling it through this.width()
  // Compare the width to mobileMax
  // The comparison returns either true or false
  isMobile = computed(() => this.width() <= this.mobileMax);
  isTablet = computed(
    () => this.width() > this.mobileMax && window.innerWidth <= this.tabletMax
  );
  isDesktop = computed(() => this.width() > this.tabletMax);

  constructor() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(100), startWith(null))
      .subscribe(() => this.width.set(window.innerWidth));
  }
}
