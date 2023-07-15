import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySnippetsPage } from './my-snippets.page';

describe('MySnippetsPage', () => {
  let component: MySnippetsPage;
  let fixture: ComponentFixture<MySnippetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MySnippetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
