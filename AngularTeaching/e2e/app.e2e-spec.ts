import { AngularTeachingPage } from './app.po';

describe('angular-teaching App', () => {
  let page: AngularTeachingPage;

  beforeEach(() => {
    page = new AngularTeachingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
