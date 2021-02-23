import { Context } from '@2sic.com/dnn-sxc-angular';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Directive({
  selector: '[sxcToolbar]'
})
export class WipSxcTagToolbarDirective implements OnInit {
  /**
   * The configuration of this toolbar
   * @type {*} see 2sxc docs, can be a string, string[], or an object
   * @memberof WipSxcTagToolbarDirective
   */
  @Input('sxcToolbar') sxcToolbar: any;

  @Output('refresh') refresh = new EventEmitter<any>();

  constructor(private element: ElementRef, private context: Context) {
  }

  ngOnInit() {
    const node = this.element.nativeElement;
    this.preventRefreshIfListenerConfigured();
    node.setAttribute("sxc-toolbar", JSON.stringify(this.sxcToolbar));
    (this.context.$2sxc as any)._manage._toolbarManager.build(node);
  }

  private preventRefreshIfListenerConfigured() {
    const node = this.element.nativeElement;
    // has listeners?
    if (this.refresh.observers.length > 0) {
      console.log('has listeners...');
      node.addEventListener('toolbar-init', (e) => {
        console.log('toolbar-init hit');
        const wf = e?.detail?.workflow;
        if (!wf) return;

        wf.add({
          command: 'refresh',
          code: (wfArgs) => {
            console.log('expects manual refresh');
            this.refresh.emit(wfArgs);
            return false;
          }
        });
      });
    }
  }

}
