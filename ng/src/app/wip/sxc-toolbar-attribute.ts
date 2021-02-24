import { Context } from '@2sic.com/dnn-sxc-angular';
import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  // the new recommended selector is `sxcToolbar`
  // `sxc-toolbar` is simply still included for backward compatibility
  selector: '[sxcToolbar], [sxc-toolbar]',
})
export class WipSxcTagToolbarDirective implements OnInit {

  /**
   * The configuration of this toolbar
   * @type {*} see 2sxc docs, can be a string, string[], or an object
   * @memberof WipSxcTagToolbarDirective
   */
  @Input('sxcToolbar') sxcToolbar: any;
  @Input('sxc-toolbar') sxcToolbarOld: any; // old name for compatibility

  /**
   * A refresh callback when an action on the toolbar requires data to be refreshed.
   * If not specified, the page will simply reload, if specified, this action will run and page-reload won't happen.
   * New in v.11.12
   */
  @Output('refresh') refresh = new EventEmitter<any>();

  constructor(private element: ElementRef, private context: Context) {
  }

  ngOnInit() {
    // this.zone.runOutsideAngular(() => {
      const node = this.element.nativeElement;
      this.preventRefreshIfListenerConfigured();
      node.setAttribute("sxc-toolbar", JSON.stringify(this.sxcToolbar || this.sxcToolbarOld || {}));
      return (this.context.$2sxc as any)?._manage?._toolbarManager.build(node);
    // });
  }

  /**
   * Check if the event emiter has a listener, and if yes, stop automatic page reload
   */
  private preventRefreshIfListenerConfigured() {
    //
    if (this.refresh.observers.length > 0) {
      this.element.nativeElement.addEventListener('toolbar-init', (event) => {
        event?.detail?.workflow?.add({
          command: 'refresh',           // only capture refresh requests
          code: (wfArgs) => {
            this.refresh.emit(wfArgs);  // emit event
            return false;               // prevent default refresh of the 2sxc API
          }
        });
      });
    }
  }

}
