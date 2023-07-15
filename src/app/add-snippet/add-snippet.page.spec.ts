import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSnippetPage } from './add-snippet.page';

describe('AddSnippetPage', () => {
  let component: AddSnippetPage;
  let fixture: ComponentFixture<AddSnippetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSnippetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
