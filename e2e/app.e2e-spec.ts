import { BaruPage } from './app.po';

describe('baru App', function() {
  let page: BaruPage;

  beforeEach(() => {
    page = new BaruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
