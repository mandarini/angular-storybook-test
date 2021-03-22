import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponentComponent } from './test-lib-component/test-lib-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestLibComponentComponent],
  exports: [TestLibComponentComponent],
})
export class UiTestModule {}
